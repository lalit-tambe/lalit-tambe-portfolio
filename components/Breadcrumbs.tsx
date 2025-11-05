import React from 'react';
import { FileNode } from '../types';
// import { ChevronRightSmallIcon } from './icons/ChevronRightSmallIcon';

interface BreadcrumbsProps {
  activeFile?: FileNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ activeFile }) => {
  if (!activeFile) {
    return <div className="h-6 bg-[var(--editor-bg)]" />;
  }

  const pathSegments = activeFile.id.split('/');

  return (
    <div className="bg-[var(--editor-bg)] text-sm text-gray-400 flex items-center px-4 h-6">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          <span className={index === pathSegments.length - 1 ? 'text-gray-200' : ''}>
            {segment}
          </span>
          {index < pathSegments.length - 1 && (
            <i className="codicon codicon-chevron-right w-4 h-4 text-gray-500 mx-1" />
            // <ChevronRightSmallIcon className="w-4 h-4 text-gray-500 mx-1" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};