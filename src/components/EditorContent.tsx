import React from "react";
import { FileNode } from "../types";
import { FILE_CONTENT } from "../constants";
import { ContactPage } from "./ContactPage";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface EditorContentProps {
  activeFile?: FileNode;
}

export const EditorContent: React.FC<EditorContentProps> = ({ activeFile }) => {
  if (!activeFile) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a file to view its content
      </div>
    );
  }

  if (activeFile.id === "contact.html") {
    return (
      <div className="flex-1 overflow-auto">
        <ContactPage />
      </div>
    );
  }

  const content = FILE_CONTENT[activeFile.id] || "File content not found.";

  if (activeFile.language === "markdown" || activeFile.id === "README.md") {
    return (
      <div className="flex-1 overflow-auto min-h-0 w-full">
        <div className="p-8 pb-16 text-gray-300 leading-relaxed markdown-body mx-auto max-w-5xl">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto text-sm leading-6">
      <SyntaxHighlighter
        language={activeFile.language || "text"}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
          fontSize: "14px",
          fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
        }}
        showLineNumbers={true}
        lineNumberStyle={{
          minWidth: "3em",
          paddingRight: "1em",
          color: "var(--line-number-color)",
          textAlign: "right",
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};
