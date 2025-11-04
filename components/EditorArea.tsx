import React from 'react';
import { FileNode } from '../types';
import { EditorTabs } from './EditorTabs';
import { EditorContent } from './EditorContent';
import { Breadcrumbs } from './Breadcrumbs';

interface EditorAreaProps {
  openFiles: FileNode[];
  activeFile?: FileNode;
  onTabClick: (fileId: string) => void;
  onTabClose: (fileId: string) => void;
}

export const EditorArea: React.FC<EditorAreaProps> = ({ openFiles, activeFile, onTabClick, onTabClose }) => {
  return (
    <div className="flex-1 flex flex-col bg-[var(--editor-bg)] min-w-0">
      <EditorTabs
        openFiles={openFiles}
        activeFileId={activeFile?.id || ''}
        onTabClick={onTabClick}
        onTabClose={onTabClose}
      />
      <Breadcrumbs activeFile={activeFile} />
      <EditorContent activeFile={activeFile} />
    </div>
  );
};