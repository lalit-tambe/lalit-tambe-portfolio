import React from 'react';
import { PythonIcon } from './icons/PythonIcon';
import { TypescriptIcon } from './icons/TypescriptIcon';
import { JsonIcon } from './icons/JsonIcon';
import { HtmlIcon } from './icons/HtmlIcon';

const languageColors: Record<string, string> = {
  javascript: 'text-yellow-400',
  markdown: 'text-cyan-400',
  default: 'text-gray-400',
};

export const FileIcon: React.FC<{ language: string; className?: string }> = ({ language, className }) => {
  switch (language) {
    case 'python':
      return <PythonIcon className={className} />;
    case 'typescript':
      return <TypescriptIcon className={className} />;
    case 'json':
      // return <JsonIcon className={className} />;
      return <i className={`codicon codicon-symbol-object ${className} text-orange-400`} />;
    case 'html':
      return <HtmlIcon className={className} />;
    default:
      const colorClass = languageColors[language] || languageColors.default;
      return (
        <i className={`codicon codicon-file ${className} ${colorClass}`} />
      );
  }
};