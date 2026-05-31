import React, { useState, useRef, useEffect, useCallback } from 'react';

interface TerminalPanelProps {
  onClose: () => void;
}

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalPanel: React.FC<TerminalPanelProps> = ({ onClose }) => {
  const [history, setHistory] = useState<HistoryItem[]>([
    { command: 'welcome', output: 'Welcome to the Lalit Tambe Portfolio Terminal! Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const [height, setHeight] = useState(256);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  
  const resizeData = useRef({ isResizing: false, startingHeight: 0, startingCursorY: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    resizeData.current = {
      isResizing: true,
      startingHeight: height,
      startingCursorY: e.clientY,
    };
  }, [height]);

  const handleMouseUp = useCallback(() => {
    resizeData.current.isResizing = false;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!resizeData.current.isResizing) return;
    const deltaY = resizeData.current.startingCursorY - e.clientY;
    const newHeight = resizeData.current.startingHeight + deltaY;
    setHeight(Math.max(100, Math.min(newHeight, window.innerHeight * 0.8)));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) {
      setHistory((prev) => [...prev, { command: '', output: '' }]);
      return;
    }

    const args = trimmed.split(' ');
    const baseCmd = args[0].toLowerCase();

    let output: string | React.ReactNode = '';
    switch (baseCmd) {
      case 'help':
        output = 'Available commands:\n  help       - Show this help message\n  about      - Learn more about me\n  contact    - Get my contact information\n  experience - View my work experience\n  projects   - View my projects\n  skills     - View my technical skills\n  ls         - List files\n  cat        - View file contents\n  whoami     - Print current user\n  pwd        - Print working directory\n  date       - Print current date\n  echo       - Print arguments\n  sudo       - Execute a command as superuser\n  clear      - Clear the terminal screen';
        break;
      case 'about':
        output = 'Lalit Tambe - Full Stack Engineer specializing in scalable SaaS & data-intensive applications.\nType "contact" to get in touch.';
        break;
      case 'experience':
        output = '1. Full Stack Engineer @ Insnapsys (May 2021 - Present)\n   - Architected multi-tenant data sync engine.\n   - Engineered multi-layered security framework.\n\n2. Frontend Intern @ AxelBuzz (Dec 2020 - May 2021)\n   - Developed Survey & Quizz web app in ReactJs.';
        break;
      case 'projects':
      case 'project':
        output = '1. mongo-aggregate (NPM Package)\n   - A fluent, chainable MongoDB aggregation builder.\n   - Abstracted complex stages into intuitive methods like .where() and .with().';
        break;
      case 'skills':
      case 'skill':
        output = 'Backend: PHP, Python, JavaScript, TypeScript, Laravel, Django, NodeJS, Express.js\nFrontend: HTML5, CSS, ReactJs, Redux, Livewire\nDatabases: SQL, MySQL, MongoDB, PostgreSQL\nTools: Git, GitHub Actions, Postman, Bash';
        break;
      case 'contact':
        output = 'Email: lalittambe963@gmail.com';
        break;
      case 'whoami':
        output = 'visitor';
        break;
      case 'pwd':
        output = '/home/visitor/portfolio';
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'echo':
        output = args.slice(1).join(' ');
        break;
      case 'sudo':
        output = 'visitor is not in the sudoers file. This incident will be reported.';
        break;
      case 'ls':
        output = 'README.md  contact.html  package.json  src/';
        break;
      case 'cat':
        if (args[1] === 'README.md') output = 'Lalit Tambe - Full Stack Engineer... (Check the actual file!)';
        else if (args[1] === 'contact.html') output = 'Email: lalittambe963@gmail.com';
        else if (args[1]) output = `cat: ${args[1]}: No such file or directory`;
        else output = 'cat: missing operand';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        output = `Command not found: ${baseCmd}. Type "help" for available commands.`;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div 
      className="bg-[var(--editor-bg)] flex flex-col font-mono text-sm z-10 relative flex-shrink-0"
      style={{ height: `${height}px` }}
    >
      <div 
        className="h-1 w-full cursor-row-resize hover:bg-[#007acc] transition-colors duration-200 ease-in-out z-20 absolute top-0"
        onMouseDown={handleMouseDown}
      />
      <div className="flex justify-between items-center px-4 py-2 border-t border-b border-[#3c3c3c] select-none mt-1">
        <div className="flex space-x-4 uppercase text-xs tracking-wider">
          <span className="text-[#e7e7e7] border-b border-[#e7e7e7] pb-1 cursor-pointer">Terminal</span>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <i className="codicon codicon-close"></i>
        </button>
      </div>
      <div className="flex-1 overflow-auto p-4 text-[#cccccc]" onClick={() => inputRef.current?.focus()}>
        {history.map((item, i) => (
          <div key={i} className="mb-2">
            {item.command && (
              <div className="flex">
                <span className="text-[#4EC9B0]">visitor@portfolio</span>
                <span className="text-gray-400 mx-1">:</span>
                <span className="text-[#569CD6]">~</span>
                <span className="text-gray-400 mx-1">$</span>
                <span className="ml-2">{item.command}</span>
              </div>
            )}
            {item.output && <div className="whitespace-pre-wrap mt-1">{item.output}</div>}
          </div>
        ))}
        <div className="flex mt-2">
          <span className="text-[#4EC9B0]">visitor@portfolio</span>
          <span className="text-gray-400 mx-1">:</span>
          <span className="text-[#569CD6]">~</span>
          <span className="text-gray-400 mx-1">$</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 ml-2 bg-transparent outline-none border-none text-[#cccccc] tour-terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
