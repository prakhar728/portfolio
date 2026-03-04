import { retrieveRelevantContent } from "@/lib/portfolio/content";
import { NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  query: z.string().min(1),
  limit: z.number().int().min(1).max(12).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const chunks = await retrieveRelevantContent(parsed.data.query, parsed.data.limit ?? 6);
    return NextResponse.json({ chunks });
  } catch (error) {
    console.error("Failed to retrieve portfolio content", error);
    return NextResponse.json({ error: "Failed to retrieve content" }, { status: 500 });
  }
}
