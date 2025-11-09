import React from 'react';

interface ResizerProps {
  onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Resizer: React.FC<ResizerProps> = ({ onMouseDown }) => {
  return (
    <div
      className="w-1 cursor-col-resize bg-transparent hover:bg-[#007acc] transition-colors duration-200 ease-in-out"
      style={{ flexShrink: 0 }}
      onMouseDown={onMouseDown}
    />
  );
};