import React from 'react';
import { VscodeIcon } from './icons/VscodeIcon';

const MenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="px-2 py-1 text-sm rounded hover:bg-white/10">{children}</button>
);

const WindowControlButton: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`w-12 h-full flex items-center justify-center hover:bg-white/10 ${className}`}>
    {children}
  </div>
);

export const TitleBar: React.FC = () => {
  return (
    <header className="bg-[var(--title-bar-bg)] h-8 flex items-center justify-between text-gray-300 select-none">
      <div className="flex items-center h-full">
        <div className="flex items-center justify-center w-12">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code Icon"
              className="w-[22px] h-[22px]"
            />
        </div>
        <div className="flex items-center space-x-1">
          <MenuItem>File</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Selection</MenuItem>
          <MenuItem>View</MenuItem>
          <MenuItem>Go</MenuItem>
          <MenuItem>Run</MenuItem>
          <MenuItem>Terminal</MenuItem>
          <MenuItem>Help</MenuItem>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="bg-black/20 rounded px-4 py-1 text-sm text-gray-400 w-1/3 max-w-lg text-center">
          Q DSA
        </div>
      </div>
      
      <div className="flex items-center h-full">
        <WindowControlButton>
          <svg width="10" height="10" viewBox="0 0 10 2"><path fill="currentColor" d="M0,0 L10,0 L10,2 L0,2 L0,0 Z"></path></svg>
        </WindowControlButton>
        <WindowControlButton>
          <svg width="10" height="10" viewBox="0 0 10 10"><path fill="currentColor" d="M0,0 L10,0 L10,2 L2,2 L2,10 L0,10 L0,0 Z M3,3 L10,3 L10,10 L3,10 L3,3 Z"></path></svg>
        </WindowControlButton>
        <WindowControlButton className="hover:bg-red-500">
          <svg width="10" height="10" viewBox="0 0 10 10"><path fill="currentColor" d="M0,0 L10,0 L10,1.5 L1.5,10 L0,8.5 L8.5,0 Z M8.5,10 L10,8.5 L1.5,0 L0,1.5 L8.5,10 Z"></path></svg>
        </WindowControlButton>
      </div>
    </header>
  );
};