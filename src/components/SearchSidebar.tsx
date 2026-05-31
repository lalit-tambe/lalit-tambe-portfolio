import React, { useState } from 'react';
import { FILE_CONTENT } from '../constants';

interface SearchSidebarProps {
  style?: React.CSSProperties;
  onFileClick: (fileId: string) => void;
}

export const SearchSidebar: React.FC<SearchSidebarProps> = ({ style, onFileClick }) => {
  const [query, setQuery] = useState('');

  const getResults = () => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    const results: { fileId: string; matches: number }[] = [];
    
    for (const [fileId, content] of Object.entries(FILE_CONTENT)) {
      const lowerContent = content.toLowerCase();
      let count = 0;
      let pos = lowerContent.indexOf(lowerQuery);
      while (pos !== -1) {
        count++;
        pos = lowerContent.indexOf(lowerQuery, pos + 1);
      }
      if (count > 0) {
        results.push({ fileId, matches: count });
      }
    }
    return results;
  };

  const results = getResults();

  return (
    <div style={style} className="bg-[var(--sidebar-bg)] h-full flex flex-col flex-shrink-0 select-none border-r border-[#3c3c3c]">
      <div className="px-4 py-2 uppercase text-[11px] font-semibold tracking-wider text-gray-400">
        Search
      </div>
      <div className="px-4 py-2">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search portfolio..." 
          className="w-full bg-[#3c3c3c] text-[#cccccc] border border-transparent focus:border-[#007acc] outline-none px-2 py-1 text-sm rounded-sm"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {query && results.length === 0 && (
          <div className="px-4 mt-2 text-xs text-gray-500">No results found.</div>
        )}
        {results.map((result) => (
          <div key={result.fileId} className="flex flex-col text-sm text-[#cccccc] mb-1 cursor-pointer hover:bg-[#2a2d2e]" onClick={() => onFileClick(result.fileId)}>
            <div className="px-4 py-1 flex items-center">
              <i className="codicon codicon-file mr-2 text-gray-400"></i>
              <span className="truncate flex-1">{result.fileId.split('/').pop()}</span>
              <span className="ml-2 text-[10px] bg-[#4d4d4d] text-[#cccccc] rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{result.matches}</span>
            </div>
            <div className="px-4 pl-8 text-[11px] text-gray-500 truncate pb-1">
              {result.fileId}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
