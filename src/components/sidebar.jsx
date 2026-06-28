import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { name: "React Introduction", path: "/intro" },
    { name: "React Components", path: "/components" },
    { name: "React Props", path: "/props" },
    { name: "React Events", path: "/handling" },
    { name: "React State 1", path: "/state" },
    { name: "React State 2", path: "/state2" },
    { name: "React Hooks", path: "/hooks" },
    { name: "React Router", path: "/router" },
  ];

  return (
    <aside className="fixed top-20 left-0 w-64 h-[calc(100vh-5rem)] border-r border-slate-200/50 bg-white/70 backdrop-blur-xl overflow-y-auto hidden lg:block z-40 shadow-[10px_0_30px_rgba(0,0,0,0.02)]">
      <div className="p-6">
        <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">React Tutorial</h3>
        <nav className="flex flex-col space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 translate-x-1' 
                    : 'text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
