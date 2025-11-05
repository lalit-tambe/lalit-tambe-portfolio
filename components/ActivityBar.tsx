import React from 'react';

interface ActivityBarProps {
  activeIcon: string;
  onIconClick: (iconId: string) => void;
}

const IconButton: React.FC<{
  id: string;
  activeId: string;
  onClick: (id: string) => void;
  icon: string;
  label: string;
}> = ({ id, activeId, onClick, icon, label }) => {
  const isActive = id === activeId;
  return (
    <button
      onClick={() => onClick(id)}
      className="relative w-full flex justify-center items-center py-3 text-gray-400 hover:text-white"
      aria-label={label}
      title={label}
    >
      {isActive && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#007acc]"></div>}
      <i className={`codicon ${icon} text-2xl`}></i>
    </button>
  );
};


export const ActivityBar: React.FC<ActivityBarProps> = ({ activeIcon, onIconClick }) => {
  return (
    <div className="bg-[#333333] w-12 flex flex-col justify-between items-center py-2">
      <div className="w-full">
        {/* <IconButton id="files" activeId={activeIcon} onClick={onIconClick} label="Explorer">
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
        </IconButton> */}
        <IconButton id="files" activeId={activeIcon} onClick={onIconClick} label="Explorer" icon="codicon-files" />
        <IconButton id="search" activeId={activeIcon} onClick={onIconClick} label="Search" icon="codicon-search" />
        <IconButton id="source-control" activeId={activeIcon} onClick={onIconClick} label="Source Control" icon="codicon-source-control" />
        <IconButton id="debug" activeId={activeIcon} onClick={onIconClick} label="Run and Debug" icon="codicon-debug-alt" />
        <IconButton id="extensions" activeId={activeIcon} onClick={onIconClick} label="Extensions" icon="codicon-extensions" />
      </div>
      <div className="w-full">
        <IconButton id="account" activeId={activeIcon} onClick={onIconClick} label="Accounts" icon="codicon-account" />
        <IconButton id="settings" activeId={activeIcon} onClick={onIconClick} label="Manage" icon="codicon-settings-gear" />
        {/* <IconButton id="account" activeId={activeIcon} onClick={onIconClick} label="Accounts">
          <AccountIcon className="w-7 h-7" />
        </IconButton>
        <IconButton id="settings" activeId={activeIcon} onClick={onIconClick} label="Manage">
          <SettingsIcon className="w-7 h-7" />
        </IconButton> */}
      </div>
    </div>
  );
};
