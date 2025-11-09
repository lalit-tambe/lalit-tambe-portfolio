import React from 'react';
import { FileNode } from '../types';
// import { ChevronDownIcon, ChevronRightIcon } from './icons/ChevronIcons';
// import { FolderIcon, FolderOpenIcon } from './icons/FolderIcons';
import { FileIcon } from './FileIcon';

interface FileTreeProps {
  nodes: FileNode[];
  level?: number;
  activeFileId: string;
  onFileClick: (fileId: string) => void;
  expandedFolders: Set<string>;
  onFolderToggle: (folderId: string) => void;
}

export const FileTree: React.FC<FileTreeProps> = ({ nodes, level = 0, activeFileId, onFileClick, expandedFolders, onFolderToggle }) => {
  return (
    <ul>
      {nodes.map((node) => {
        if (node.type === 'folder') {
          const isExpanded = expandedFolders.has(node.id);
          return (
            <li key={node.id}>
              <div
                className="flex items-center cursor-pointer hover:bg-white/10 px-2 py-1"
                style={{ paddingLeft: `${level * 16 + 8}px` }}
                onClick={() => onFolderToggle(node.id)}
              >
                 <i className={`codicon ${isExpanded ? 'codicon-chevron-down' : 'codicon-chevron-right'} w-4 h-4 mr-1`} />
                <i className={`codicon ${isExpanded ? 'codicon-folder-opened' : 'codicon-folder'} w-5 h-5 mr-2 text-blue-400`} />
                {/* {isExpanded ? <ChevronDownIcon className="w-4 h-4 mr-1" /> : <ChevronRightIcon className="w-4 h-4 mr-1" />}
                {isExpanded ? <FolderOpenIcon className="w-5 h-5 mr-2 text-blue-400" /> : <FolderIcon className="w-5 h-5 mr-2 text-blue-400" />} */}
                <span>{node.name}</span>
              </div>
              {isExpanded && node.children && (
                <FileTree
                  nodes={node.children}
                  level={level + 1}
                  activeFileId={activeFileId}
                  onFileClick={onFileClick}
                  expandedFolders={expandedFolders}
                  onFolderToggle={onFolderToggle}
                />
              )}
            </li>
          );
        }
        
        const isActive = activeFileId === node.id;
        return (
          <li key={node.id}>
            <div
              className={`flex items-center cursor-pointer hover:bg-white/10 px-2 py-1 ${isActive ? 'bg-[#37373d]' : ''}`}
              style={{ paddingLeft: `${level * 16 + 24}px` }}
              onClick={() => onFileClick(node.id)}
            >
              <FileIcon language={node.language || ''} className="w-5 h-5 mr-2" />
              <span>{node.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
