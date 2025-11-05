import React from 'react';
import { PythonIcon } from './icons/PythonIcon';

const languageColors: Record<string, string> = {
  javascript: 'text-yellow-400',
  typescript: 'text-blue-400',
  json: 'text-orange-400',
  html: 'text-red-500',
  markdown: 'text-cyan-400',
  default: 'text-gray-400',
};

export const FileIcon: React.FC<{ language: string; className?: string }> = ({ language, className }) => {
  if (language === 'python') {
    return <PythonIcon className={className} />;
  }

  const colorClass = languageColors[language] || languageColors.default;
  return (
    <i className={`codicon codicon-file ${className} ${colorClass}`} />
    // <svg 
    //   xmlns="http://www.w3.org/2000/svg" 
    //   fill="none" 
    //   viewBox="0 0 24 24" 
    //   strokeWidth={1.5} 
    //   stroke="currentColor" 
    //   className={`${className} ${colorClass}`}
    // >
    //   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    // </svg>
  );
};