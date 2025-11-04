import React from 'react';
import { GitBranchIcon } from './icons/GitBranchIcon';
import { FileNode } from '../types';

interface StatusBarProps {
    activeFile?: FileNode;
}

const languageMap: Record<string, string> = {
    python: 'Python',
    typescript: 'TypeScript',
    json: 'JSON',
    markdown: 'Markdown',
    html: 'HTML'
};

const StatusItem: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="flex items-center px-2 hover:bg-white/10 h-full cursor-pointer">
        {children}
    </div>
);


export const StatusBar: React.FC<StatusBarProps> = ({ activeFile }) => {
  return (
    <footer className="bg-[var(--status-bar-bg)] h-6 flex items-center justify-between text-white text-xs">
      <div className="flex items-center h-full">
        <StatusItem>
            <GitBranchIcon className="w-4 h-4 mr-1" />
            <span>main</span>
        </StatusItem>
      </div>
      <div className="flex items-center h-full">
        <StatusItem>
            <span>Ln 11, Col 29</span>
        </StatusItem>
        <StatusItem>
            <span>Spaces: 4</span>
        </StatusItem>
        <StatusItem>
            <span>UTF-8</span>
        </StatusItem>
        <StatusItem>
            <span>CRLF</span>
        </StatusItem>
        <StatusItem>
            <span>{`{ } ${languageMap[activeFile?.language || ''] || 'Plain Text'}`}</span>
        </StatusItem>
      </div>
    </footer>
  );
};