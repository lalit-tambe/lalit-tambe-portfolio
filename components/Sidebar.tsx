import React, { useState } from 'react';
import { FILE_TREE } from '../constants';
import { FileTree } from './FileTree';
import { ChevronDownIcon } from './icons/ChevronIcons';
import { EllipsisIcon } from './icons/EllipsisIcon';

interface SidebarProps {
  activeFileId: string;
  onFileClick: (fileId: string) => void;
  expandedFolders: Set<string>;
  onFolderToggle: (folderId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeFileId, onFileClick, expandedFolders, onFolderToggle }) => {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  return (
    <div className="bg-[#252526] w-64 flex flex-col text-sm">
      <header className="flex justify-between items-center p-2.5 text-xs uppercase text-gray-400 tracking-wider">
        <span>Explorer</span>
        <button className="text-gray-400 hover:text-white">
            <EllipsisIcon className="w-5 h-5"/>
        </button>
      </header>
      <div className="flex-1 overflow-y-auto">
        <div 
          className="flex items-center p-1 cursor-pointer font-bold"
          onClick={() => setIsExplorerOpen(!isExplorerOpen)}
        >
          <ChevronDownIcon className={`w-4 h-4 mr-1 transition-transform ${!isExplorerOpen ? '-rotate-90' : ''}`} />
          <span className="uppercase">LALIT-TAMBE-PORTFOLIO</span>
        </div>
        {isExplorerOpen && (
          <FileTree
            nodes={FILE_TREE}
            activeFileId={activeFileId}
            onFileClick={onFileClick}
            expandedFolders={expandedFolders}
            onFolderToggle={onFolderToggle}
          />
        )}
      </div>
    </div>
  );
};