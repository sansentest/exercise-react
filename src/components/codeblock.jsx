import React, { useState, useEffect } from 'react';

export default function CodeBlock({ code, language, title }) {
  const [copied, setCopied] = useState(false);

  // Trigger PrismJS highlighting when code changes
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl bg-[#0f172a] border border-slate-700/50">
      {/* macOS style header */}
      <div className="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></div>
        </div>
        {title && (
          <div className="text-slate-400 font-mono text-xs font-medium tracking-wider bg-slate-900/50 px-3 py-1 rounded-md border border-slate-700/50">
            {title}
          </div>
        )}
        <div className="w-16 flex justify-end">
          <button 
            className="text-xs font-medium px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 text-slate-300"
            onClick={handleCopy}
            style={{
              color: copied ? '#4ade80' : ''
            }}
          >
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
      </div>
      
      <div className="code-container relative group">
        <pre><code className={`language-${language}`}>{code}</code></pre>
      </div>
    </div>
  );
}