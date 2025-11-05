import React from 'react';
import { FileNode } from '../types';
import { FileIcon } from './icons/FileIcon';
// import { CloseIcon } from './icons/CloseIcon';

interface EditorTabsProps {
  openFiles: FileNode[];
  activeFileId: string;
  onTabClick: (fileId: string) => void;
  onTabClose: (fileId: string) => void;
}

export const EditorTabs: React.FC<EditorTabsProps> = ({ openFiles, activeFileId, onTabClose, onTabClick }) => {
  const handleCloseClick = (e: React.MouseEvent, fileId: string) => {
    e.stopPropagation();
    onTabClose(fileId);
  };
  
  return (
    <div className="bg-[#252526] flex overflow-x-auto">
      {openFiles.map((file) => {
        const isActive = file.id === activeFileId;
        return (
          <div
            key={file.id}
            onClick={() => onTabClick(file.id)}
            className={`flex items-center justify-between p-2 cursor-pointer text-sm border-r border-r-black/30 flex-shrink-0 ${
              isActive 
                ? 'bg-[var(--active-tab-bg)] text-white' 
                : 'bg-[var(--inactive-tab-bg)] text-gray-400 hover:bg-[#3e3e3e]'
            }`}
          >
            <div className="flex items-center">
              <FileIcon language={file.language || ''} className="w-4 h-4 mr-2" />
              <span className="whitespace-nowrap">{file.name}</span>
            </div>
            <button
              onClick={(e) => handleCloseClick(e, file.id)}
              className="ml-4 p-1 rounded opacity-70 hover:opacity-100 hover:bg-white/20"
            >
              <i className="codicon codicon-close w-3 h-3" />
              {/* <CloseIcon className="w-3 h-3" /> */}
            </button>
          </div>
        );
      })}
    </div>
  );
};