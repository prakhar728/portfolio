import { promises as fs } from "fs";
import path from "path";
import { PortfolioDocument, PortfolioContentType, RetrievedChunk } from "@/lib/portfolio/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function toType(rawType: string | undefined, sourcePath: string): PortfolioContentType {
  if (rawType === "about" || rawType === "skills" || rawType === "experience" || rawType === "project") {
    return rawType;
  }
  if (sourcePath.includes("/experience/")) return "experience";
  if (sourcePath.includes("/projects/")) return "project";
  return "unknown";
}

function parseFrontmatter(markdown: string): { data: Record<string, string>; body: string } {
  if (!markdown.startsWith("---")) {
    return { data: {}, body: markdown.trim() };
  }

  const closing = markdown.indexOf("\n---", 3);
  if (closing === -1) {
    return { data: {}, body: markdown.trim() };
  }

  const rawFrontmatter = markdown.slice(3, closing).trim();
  const body = markdown.slice(closing + 4).trim();

  const data: Record<string, string> = {};
  for (const line of rawFrontmatter.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key.length > 0) {
      data[key] = value;
    }
  }

  return { data, body };
}

async function readMarkdownFiles(dirPath: string): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await readMarkdownFiles(fullPath)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

export async function loadPortfolioDocuments(): Promise<PortfolioDocument[]> {
  const files = await readMarkdownFiles(CONTENT_ROOT);

  const docs = await Promise.all(
    files.map(async (filePath) => {
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = parseFrontmatter(raw);
      const relativePath = path.relative(CONTENT_ROOT, filePath).replace(/\\/g, "/");

      const id = parsed.data.id ?? relativePath.replace(/\.md$/, "").replace(/\//g, "_");
      const title = parsed.data.title ?? id;
      const type = toType(parsed.data.type, `/${relativePath}`);

      return {
        id,
        type,
        title,
        body: parsed.body,
        metadata: parsed.data,
        sourcePath: relativePath,
      } satisfies PortfolioDocument;
    }),
  );

  return docs;
}

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1);
}

function scoreDocument(doc: PortfolioDocument, query: string): number {
  const queryTerms = tokenize(query);
  if (queryTerms.length === 0) {
    return 0;
  }

  const haystack = `${doc.title} ${doc.body} ${Object.values(doc.metadata).join(" ")}`.toLowerCase();
  let score = 0;

  for (const term of queryTerms) {
    const titleMatch = doc.title.toLowerCase().includes(term);
    const bodyMatches = haystack.split(term).length - 1;

    if (titleMatch) score += 3;
    if (bodyMatches > 0) score += Math.min(4, bodyMatches);
  }

  return score;
}

export async function retrieveRelevantContent(query: string, limit = 6): Promise<RetrievedChunk[]> {
  const docs = await loadPortfolioDocuments();

  const scored = docs
    .map((doc) => ({ doc, score: scoreDocument(doc, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(({ doc, score }) => ({
    id: doc.id,
    type: doc.type,
    title: doc.title,
    text: doc.body,
    metadata: doc.metadata,
    score,
  }));
}
