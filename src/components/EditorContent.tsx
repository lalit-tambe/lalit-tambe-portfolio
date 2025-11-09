import React from "react";
import { FileNode } from "../types";
import { FILE_CONTENT } from "../constants";
import { ContactPage } from "./ContactPage";

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

  if (activeFile.id === "README.md") {
    return (
      <div className="flex-1 overflow-auto">
        <div
          className="p-8 overflow-auto text-gray-300 leading-relaxed markdown-body mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  }

  const lines = content.split("\n");

  return (
    <div className="flex-1 overflow-auto p-4 editor-font text-sm leading-6">
      <table>
        <tbody>
          {lines.map((line, i) => (
            <tr
              key={i}
              className={
                activeFile.id === "src/1_experience/experience.py" && i === 10
                  ? "bg-[var(--active-line-bg)]"
                  : ""
              }
            >
              <td className="text-right text-[var(--line-number-color)] pr-4 select-none w-10">
                {i + 1}
              </td>
              <td className="whitespace-pre">
                <code dangerouslySetInnerHTML={{ __html: line || " " }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
