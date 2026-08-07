import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "enquiries.json");

interface EnquiryData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  employees?: string;
  message?: string;
}

async function readEnquiries(): Promise<EnquiryData[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const body: EnquiryData = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      );
    }

    const enquiries = await readEnquiries();
    enquiries.push({
      ...body,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      submittedAt: new Date().toISOString(),
    } as any);

    await fs.writeFile(DATA_FILE, JSON.stringify(enquiries, null, 2));

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const enquiries = await readEnquiries();
  return NextResponse.json({ total: enquiries.length, enquiries });
}
