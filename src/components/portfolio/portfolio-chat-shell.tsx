"use client";

import {
  MessageInput,
  MessageInputSubmitButton,
  MessageInputTextarea,
  MessageInputToolbar,
} from "@/components/tambo/message-input";
import {
  MessageSuggestions,
  MessageSuggestionsList,
  MessageSuggestionsStatus,
} from "@/components/tambo/message-suggestions";
import { ScrollableMessageContainer } from "@/components/tambo/scrollable-message-container";
import { ThreadContent, ThreadContentMessages } from "@/components/tambo/thread-content";
import { TamboProvider } from "@tambo-ai/react";
import { components, tools } from "@/lib/tambo";
import { useAnonymousUserKey } from "@/lib/use-anonymous-user-key";

const starterPrompts = [
  { id: "s1", title: "Skills", detailedSuggestion: "What are my skills?", messageId: "skills" },
  {
    id: "s2",
    title: "Experience",
    detailedSuggestion: "Summarize my experience for a senior full-stack role.",
    messageId: "experience",
  },
  {
    id: "s3",
    title: "Projects",
    detailedSuggestion: "Show my top projects with stack highlights.",
    messageId: "projects",
  },
];

export function PortfolioChatShell() {
  const userKey = useAnonymousUserKey();

  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
      userKey={userKey}
      components={components}
      tools={tools}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col" style={{ minHeight: "calc(100vh - 160px)" }}>
        <ScrollableMessageContainer className="flex-1 py-4">
          <ThreadContent>
            <ThreadContentMessages />
          </ThreadContent>
        </ScrollableMessageContainer>

        <div className="sticky bottom-0 pb-6 pt-2">
          <MessageSuggestions initialSuggestions={starterPrompts}>
            <MessageSuggestionsStatus />
            <MessageSuggestionsList />
          </MessageSuggestions>

          <MessageInput variant="solid" className="mt-2">
            <MessageInputTextarea placeholder="Ask about skills, experience, or projects…" />
            <MessageInputToolbar>
              <MessageInputSubmitButton />
            </MessageInputToolbar>
          </MessageInput>
        </div>
      </div>
    </TamboProvider>
  );
}
