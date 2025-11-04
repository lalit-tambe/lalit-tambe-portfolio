import React from 'react';
import { FilesIcon } from './icons/FilesIcon';
import { SearchIcon } from './icons/SearchIcon';
import { SourceControlIcon } from './icons/SourceControlIcon';
import { DebugIcon } from './icons/DebugIcon';
import { ExtensionsIcon } from './icons/ExtensionsIcon';
import { AccountIcon } from './icons/AccountIcon';
import { SettingsIcon } from './icons/SettingsIcon';

interface ActivityBarProps {
  activeIcon: string;
  onIconClick: (iconId: string) => void;
}

const IconButton: React.FC<{
  id: string;
  activeId: string;
  onClick: (id: string) => void;
  children: React.ReactNode;
  label: string;
}> = ({ id, activeId, onClick, children, label }) => {
  const isActive = id === activeId;
  return (
    <button
      onClick={() => onClick(id)}
      className="relative w-full flex justify-center items-center py-3 text-gray-400 hover:text-white"
      aria-label={label}
      title={label}
    >
      {isActive && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#007acc]"></div>}
      {children}
    </button>
  );
};


export const ActivityBar: React.FC<ActivityBarProps> = ({ activeIcon, onIconClick }) => {
  return (
    <div className="bg-[#333333] w-12 flex flex-col justify-between items-center py-2">
      <div className="w-full">
        <IconButton id="files" activeId={activeIcon} onClick={onIconClick} label="Explorer">
          <FilesIcon className="w-7 h-7" />
        </IconButton>
        <IconButton id="search" activeId={activeIcon} onClick={onIconClick} label="Search">
          <SearchIcon className="w-7 h-7" />
        </IconButton>
        <IconButton id="source-control" activeId={activeIcon} onClick={onIconClick} label="Source Control">
          <SourceControlIcon className="w-7 h-7" />
        </IconButton>
        <IconButton id="debug" activeId={activeIcon} onClick={onIconClick} label="Run and Debug">
          <DebugIcon className="w-7 h-7" />
        </IconButton>
        <IconButton id="extensions" activeId={activeIcon} onClick={onIconClick} label="Extensions">
          <ExtensionsIcon className="w-7 h-7" />
        </IconButton>
      </div>
      <div className="w-full">
        <IconButton id="account" activeId={activeIcon} onClick={onIconClick} label="Accounts">
          <AccountIcon className="w-7 h-7" />
        </IconButton>
        <IconButton id="settings" activeId={activeIcon} onClick={onIconClick} label="Manage">
          <SettingsIcon className="w-7 h-7" />
        </IconButton>
      </div>
    </div>
  );
};
