import React from 'react';
// import { GitBranchIcon } from './icons/GitBranchIcon';
import { FileNode } from '../types';

interface StatusBarProps {
    activeFile?: FileNode;
    onToggleTerminal?: () => void;
}

const languageMap: Record<string, string> = {
    python: 'Python',
    typescript: 'TypeScript',
    json: 'JSON',
    markdown: 'Markdown',
    html: 'HTML'
};

const StatusItem: React.FC<{children: React.ReactNode, onClick?: () => void}> = ({ children, onClick }) => (
    <div className="flex items-center px-2 hover:bg-white/10 h-full cursor-pointer" onClick={onClick}>
        {children}
    </div>
);


export const StatusBar: React.FC<StatusBarProps> = ({ activeFile, onToggleTerminal }) => {
  return (
    <footer className="bg-[var(--status-bar-bg)] h-6 flex items-center justify-between text-white text-xs z-20 relative">
      <div className="flex items-center h-full">
        <StatusItem>
           <i className="codicon codicon-source-control w-4 h-4 mr-1" />
            <span>main</span>
        </StatusItem>
        <StatusItem onClick={onToggleTerminal}>
           <div className="tour-terminal-btn flex items-center h-full w-full">
             <i className="codicon codicon-terminal mr-1" />
             <span>Terminal</span>
           </div>
        </StatusItem>
      </div>
      <div className="flex items-center h-full">
        <StatusItem>
            <span>Ln 11, Col 29</span>
        </StatusItem>
         {/* FIX: Corrected a typo in the following component's closing tag. */}
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