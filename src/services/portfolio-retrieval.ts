import { RetrievedChunk } from "@/lib/portfolio/types";

interface SearchPortfolioInput {
  query: string;
  limit?: number;
}

interface SearchPortfolioOutput {
  chunks: RetrievedChunk[];
}

export async function searchPortfolioContent(
  input: SearchPortfolioInput,
): Promise<SearchPortfolioOutput> {
  try {
    const response = await fetch("/api/portfolio/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      return { chunks: [] };
    }

    const json = (await response.json()) as SearchPortfolioOutput;
    return json;
  } catch (error) {
    console.error("searchPortfolioContent tool failed", error);
    return { chunks: [] };
  }
}
