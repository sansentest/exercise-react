import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isKhmer = document.cookie.includes('googtrans=/en/km');

  const handleTranslate = () => {
    if (isKhmer) {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + window.location.hostname + "; path=/;";
    } else {
      document.cookie = "googtrans=/en/km; path=/;";
      document.cookie = "googtrans=/en/km; domain=" + window.location.hostname + "; path=/;";
    }
    window.location.reload();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/60 border-b border-white/40 shadow-[0_4px_30px_rgb(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur group-hover:blur-md transition-all duration-300 opacity-60"></div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAVZa-qTINpjVxq0Wd6QNQ4qc9ERAxQItjw&s" 
              alt="SPI Logo" 
              className="relative w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div>
            <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight leading-none mb-1">SPI.EDU</h1>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">Learning Platform</p>
          </div>
        </Link>

        {/* Navigation & Translate */}
        <div className="flex items-center gap-8">
          <nav className="flex gap-8">
            <Link 
              to="/" 
              className={`relative font-bold transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-600 after:left-0 after:-bottom-1.5 hover:after:w-full after:transition-all after:duration-300 ${['/', '/components', '/props', '/handling', '/state', '/state2'].includes(location.pathname) ? 'text-indigo-600 after:w-full' : 'text-slate-500 hover:text-indigo-500'}`}
            >
              Home
            </Link>
          </nav>
          <button 
            onClick={handleTranslate}
            className="flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none"
            title={isKhmer ? "View in English" : "បកប្រែជាភាសាខ្មែរ"}
          >
            {isKhmer ? (
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-8 h-auto rounded shadow-sm" /> 
            ) : (
              <img src="https://flagcdn.com/w40/kh.png" alt="Khmer" className="w-8 h-auto rounded shadow-sm" /> 
            )}
          </button>
        </div>
      </div>
    </header>
  );
}