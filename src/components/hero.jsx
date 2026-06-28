import React from 'react';
import { Info } from 'lucide-react';

export default function Hero({ title, description, children }) {
  return (
    <div className="relative pt-32 pb-8 lg:pt-36 lg:pb-12 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
          {title}
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-6">
          {description}
        </p>
        {children && (
          <div className="w-full mt-2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}