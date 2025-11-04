import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { ActivityBar } from './components/ActivityBar';
import { Sidebar } from './components/Sidebar';
import { EditorArea } from './components/EditorArea';
import { StatusBar } from './components/StatusBar';
import { TitleBar } from './components/TitleBar';
import { Resizer } from './components/Resizer';
import { FILE_TREE } from './constants';
import { FileNode } from './types';

const MIN_SIDEBAR_WIDTH = 200;
const MAX_SIDEBAR_WIDTH = 500;

const App: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<string>('files');
  const [openFileIds, setOpenFileIds] = useState<string[]>(['README.md']);
  const [activeFileId, setActiveFileId] = useState<string>('README.md');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(['src', 'src/1_experience', 'src/2_projects', 'src/3_skills'])
  );
  
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const resizeData = useRef({
    isResizing: false,
    startingWidth: 0,
    startingCursorX: 0,
  });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      resizeData.current = {
        isResizing: true,
        startingWidth: sidebarWidth,
        startingCursorX: e.clientX,
      };
  }, [sidebarWidth]);

  const handleMouseUp = useCallback(() => {
      resizeData.current.isResizing = false;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
      if (!resizeData.current.isResizing) {
        return;
      }
      const deltaX = e.clientX - resizeData.current.startingCursorX;
      const newWidth = resizeData.current.startingWidth + deltaX;

      const clampedWidth = Math.max(MIN_SIDEBAR_WIDTH, Math.min(newWidth, MAX_SIDEBAR_WIDTH));
      setSidebarWidth(clampedWidth);
  }, []);

  useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
  }, [handleMouseMove, handleMouseUp]);


  const fileMap = useMemo(() => {
    const map = new Map<string, FileNode>();
    const traverse = (nodes: FileNode[]) => {
      for (const node of nodes) {
        map.set(node.id, node);
        if (node.children) {
          traverse(node.children);
        }
      }
    };
    traverse(FILE_TREE);
    return map;
  }, []);

  const openFiles = useMemo(() => {
    return openFileIds.map(id => fileMap.get(id)).filter((file): file is FileNode => !!file);
  }, [openFileIds, fileMap]);

  const activeFile = useMemo(() => {
    return fileMap.get(activeFileId);
  }, [activeFileId, fileMap]);

  const handleFileClick = useCallback((fileId: string) => {
    if (!openFileIds.includes(fileId)) {
      setOpenFileIds(prev => [...prev, fileId]);
    }
    setActiveFileId(fileId);
  }, [openFileIds]);

  const handleTabClick = useCallback((fileId: string) => {
    setActiveFileId(fileId);
  }, []);

  const handleTabClose = useCallback((fileId: string) => {
    setOpenFileIds(prev => {
      const newOpenFiles = prev.filter(id => id !== fileId);
      if (activeFileId === fileId) {
        setActiveFileId(newOpenFiles[newOpenFiles.length - 1] || '');
      }
      return newOpenFiles;
    });
  }, [activeFileId]);

  const handleFolderToggle = useCallback((folderId: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen text-gray-300 overflow-hidden font-sans">
      <TitleBar />
      <main className="flex flex-1 overflow-hidden">
        <ActivityBar activeIcon={activeIcon} onIconClick={setActiveIcon} />
        {activeIcon === 'files' && (
          <>
            <Sidebar
              style={{ width: `${sidebarWidth}px` }}
              activeFileId={activeFileId}
              onFileClick={handleFileClick}
              expandedFolders={expandedFolders}
              onFolderToggle={handleFolderToggle}
            />
            <Resizer onMouseDown={handleMouseDown} />
          </>
        )}
        <EditorArea
          openFiles={openFiles}
          activeFile={activeFile}
          onTabClick={handleTabClick}
          onTabClose={handleTabClose}
        />
      </main>
      <StatusBar activeFile={activeFile} />
    </div>
  );
};

export default App;