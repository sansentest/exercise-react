import React from 'react';
import CodeBlock from '../components/CodeBlock';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { LayoutTemplate, FileInput, Network, Target, ArrowRight, ArrowLeft } from 'lucide-react';
export default function ComponentsPage() {
  const step1Code = `import React from 'react';

// 1. A component is a JavaScript function that starts with a Capital Letter
function Button() {
  // 2. It returns JSX (HTML-like syntax)
  return (
    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition">
      Click Me!
    </button>
  );
}

// 3. You must export it so other files can use it
export default Button;`;

  const step2Code = `import React from 'react';
// 1. Import the component from its file
import Button from './components/Button';

export default function App() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Welcome to my App</h1>
      
      {/* 2. Use the component just like a custom HTML tag! */}
      <Button />
      
      {/* You can re-use it as many times as you want! */}
      <Button />
      <Button />
    </div>
  );
}`;

  const step3Code = `import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

// Components can be nested inside other components to build complex layouts!
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar at the top */}
      <Navbar />
      
      <div className="flex">
        {/* Sidebar on the left */}
        <Sidebar />
        
        {/* Main content on the right */}
        <MainContent />
      </div>
    </div>
  );
}`;

  return (
    <>
      <Hero title="React Components" description="Learn how to build reusable UI elements and compose them together to build complex applications.">
        <div className="w-full mt-10 text-left">
          <h3 className="text-base font-extrabold text-slate-800 mb-4 uppercase tracking-wider">Core Concepts</h3>
          <ul className="space-y-4 text-slate-700 font-medium text-sm">
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">1</span>
              Creating a Component
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">2</span>
              Exporting & Importing
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">3</span>
              Nesting Components
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-black shadow-sm shrink-0">4</span>
              Student Challenge!
            </li>
          </ul>
        </div>
      </Hero>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-16">

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><LayoutTemplate className="w-5 h-5" /></span>
            1. Creating a Component
          </h2>
          <p className="text-slate-600 mb-4">A React component is simply a JavaScript function that returns UI. The golden rule is that the function name <strong>must start with a capital letter</strong> so React knows it's a custom component and not a standard HTML tag.</p>
          <CodeBlock code={step1Code} language="jsx" title="📁 src / components / Button.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><FileInput className="w-5 h-5" /></span>
            2. Exporting & Importing
          </h2>
          <p className="text-slate-600 mb-4">To use your component in another file, you must <code>export</code> it from its original file, and <code>import</code> it where you want to use it. Once imported, you render it using self-closing tag syntax like <code>&lt;Button /&gt;</code>.</p>
          <CodeBlock code={step2Code} language="jsx" title="📁 src / App.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Network className="w-5 h-5" /></span>
            3. Nesting Components
          </h2>
          <p className="text-slate-600 mb-4">The true power of React is <strong>composition</strong>. You can take many small, isolated components and nest them inside one another to build entire pages and layouts.</p>
          <CodeBlock code={step3Code} language="jsx" title="📁 src / pages / Dashboard.jsx" />
        </section>

        <section className="w-full bg-indigo-50 border border-indigo-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
             <Target className="w-6 h-6 text-indigo-600" />
             4. Student Challenge
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-slate-700 font-medium text-lg">
            <li>Create a new file <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">Header.jsx</code>. Make it return a <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">&lt;header&gt;</code> with a title.</li>
            <li>Create a new file <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">Footer.jsx</code>. Make it return a <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">&lt;footer&gt;</code> with copyright text.</li>
            <li>Open your main <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">App.jsx</code> (or a page component).</li>
            <li>Import both <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">Header</code> and <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">Footer</code> at the top of the file.</li>
            <li>Render the <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">&lt;Header /&gt;</code> at the top, add some dummy text in the middle, and render the <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">&lt;Footer /&gt;</code> at the bottom!</li>
          </ol>
        </section>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <ArrowLeft className="w-5 h-5" />
            Back: React Intro
          </Link>
          <Link to="/props" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-200">
            Next: React Props
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
    </>
  );
}