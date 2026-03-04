export type PortfolioContentType =
  | "about"
  | "skills"
  | "experience"
  | "project"
  | "unknown";

export interface PortfolioDocument {
  id: string;
  type: PortfolioContentType;
  title: string;
  body: string;
  metadata: Record<string, string>;
  sourcePath: string;
}

export interface RetrievedChunk {
  id: string;
  type: PortfolioContentType;
  title: string;
  text: string;
  metadata: Record<string, string>;
  score: number;
}
