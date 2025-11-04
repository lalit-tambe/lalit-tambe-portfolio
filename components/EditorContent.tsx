import React from 'react';
import { FileNode } from '../types';
import { FILE_CONTENT } from '../constants';

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

  const content = FILE_CONTENT[activeFile.id] || 'File content not found.';
  
  if (activeFile.language === 'html' && activeFile.id === 'contact.html') {
    return (
      <div
        className="flex-1 p-4 overflow-auto font-sans"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  const lines = content.split('\n');

  return (
    <div className="flex-1 overflow-auto p-4 font-editor text-sm leading-6">
      <table>
        <tbody>
          {lines.map((line, i) => (
            <tr key={i} className={activeFile.id === 'src/1_experience/experience.py' && i === 10 ? 'bg-[var(--active-line-bg)]' : ''}>
              <td className="text-right text-[var(--line-number-color)] pr-4 select-none w-10">
                {i + 1}
              </td>
              <td className="whitespace-pre">
                <code dangerouslySetInnerHTML={{ __html: line || ' ' }}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};