import React from 'react';
import CodeBlock from '../components/CodeBlock';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Settings, Folder, Globe, Shirt, ShoppingBag, Target, MousePointerClick, Database, Share2, Play, ArrowRight, ArrowLeft } from 'lucide-react';
export default function HandlingPage() {
  const step1Code = `# 1. Create a new Vite app
npm create vite@latest my-store -- --template react
cd my-store
npm install

# 2. Install React Router DOM & Tailwind CSS
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite`;

  const step3Code = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TShirtPage from './pages/TShirtPage';
import SneakerPage from './pages/SneakerPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TShirtPage />} />
        <Route path="/sneaker" element={<SneakerPage />} />
      </Routes>
    </Router>
  );
}`;

  const step4Code = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TShirtPage() {
  // 1. State to track cart items
  const [cartCount, setCartCount] = useState(0);

  // 2. Event Handler: Add to Cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  // 3. Event Handler: Clear Cart
  const handleClearCart = () => {
    // 🎯 STUDENT CHALLENGE: Write the code to set cartCount back to 0
    
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Navbar Section */}
      <nav className="bg-white p-4 shadow-sm flex justify-between items-center px-8">
        <h1 className="text-2xl font-black text-blue-600">SN_STORE</h1>
        
        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="font-medium text-blue-600">T-Shirt</Link>
          <Link to="/sneaker" className="font-medium text-gray-600 hover:text-blue-600">Sneakers</Link>
        </div>

        {/* Cart Info */}
        <div className="font-bold text-gray-700">
          Cart: <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">{cartCount}</span>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="p-10 flex flex-col items-center">
        
        {/* Product Card */}
        <div className="bg-white p-5 rounded-2xl shadow-md max-w-sm w-full border border-gray-100">
          <div className="bg-gray-200 h-64 rounded-xl mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" 
              alt="T-shirt" 
              className="w-full h-full object-cover" 
            />
          </div>

          <h2 className="text-xl font-bold text-gray-800">Classic White Tee</h2>
          <p className="text-blue-600 font-bold text-lg mt-1 mb-4">$25.00</p>

          {/* Add to Cart Button (onClick) */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl transition-all active:scale-95"
          >
            Add to Cart
          </button>
          
          {/* Note: No Clear button here. You will add it in SneakerPage! */}
        </div>

      </div>
    </div>
  );
}`;

  const step5Code = `import React from 'react';
import { Link } from 'react-router-dom';

export default function SneakerPage( ) {
  return (
    <div className="p-10 flex flex-col items-center">
      <div className="bg-white p-5 rounded-2xl shadow-md max-w-sm w-full border border-gray-100">
        <div className="bg-gray-200 h-64 rounded-xl mb-4 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500" 
            alt="Sneaker" 
            className="w-full h-full object-cover" 
          />
        </div>

        <h2 className="text-xl font-bold text-gray-800">Air Max Pro</h2>
        <p className="text-blue-600 font-bold text-lg mt-1 mb-4">$120.00</p>

        <div className="space-y-3">
          {/* 🎯 Challenge: Make this button work! */}
          <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl transition-all active:scale-95">
            Add to Cart
          </button>

          {/* 🎯 Challenge: Make this button work! */}
          <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3 px-4 rounded-xl transition-all border border-red-200 active:scale-95">
            Clear Cart
          </button>
        </div>

      </div>
    </div>
  );
}`;

  return (
    <>
      <Hero 
        title="Mastering React Events" 
        subtitle="Learn how to make your UI interactive by handling user events properly. We are building the SN_STORE E-Commerce UI!" 
        icon={<MousePointerClick className="w-8 h-8 text-blue-600" />}
        color="blue"
      />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-16 mt-8">
        
        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Settings className="w-5 h-5" /></span>
            1. Setup & Installations
          </h2>
          <p className="text-slate-600 mb-4">Let's start by creating a new project and installing Tailwind CSS and React Router.</p>
          <CodeBlock code={step1Code} language="bash" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Folder className="w-5 h-5" /></span>
            2. Project Structure
          </h2>
          <p className="text-slate-600 mb-6">Create the following folders and files inside your <code>src</code> directory before we start coding:</p>
          <div className="bg-slate-900 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto shadow-inner text-white">
            <span className="text-blue-400">my-store/</span><br />
            └── <span className="text-blue-400 font-bold">src/</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-green-400 font-bold">App.jsx</span> <span className="text-gray-400 italic">← (Main file with Router & State)</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-blue-400 font-bold">pages/</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── <span className="text-green-400 font-bold">TShirtPage.jsx</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── <span className="text-green-400 font-bold">SneakerPage.jsx</span><br />
          </div>
        </section>
        
        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Globe className="w-5 h-5" /></span>
            3. The App Router
          </h2>
          <p className="text-slate-600 mb-4">Here is our main App component. It sets up the routes for our store.</p>
          <CodeBlock code={step3Code} language="jsx" title="📁 src / App.jsx" />
        </section>
        
        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Shirt className="w-5 h-5" /></span>
            4. The T-Shirt Page (Events & State)
          </h2>
          <p className="text-slate-600 mb-4">This page demonstrates how to attach an <code>onClick</code> handler to a button and update state.</p>
          <CodeBlock code={step4Code} language="jsx" title="📁 src / pages / TShirtPage.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><ShoppingBag className="w-5 h-5" /></span>
            5. The Sneaker Page (UI Designed)
          </h2>
          <p className="text-slate-600 mb-4">Here is the fully designed Sneaker Page. It receives both <code>onAdd</code> and <code>onClear</code> props, but the buttons don't have events yet!</p>
          <CodeBlock code={step5Code} language="jsx" title="📁 src / pages / SneakerPage.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Play className="w-5 h-5" /></span>
            6. Run Server
          </h2>
          <p className="text-slate-600 mb-4">You're all set! Start your development server to see your E-commerce app in action:</p>
          <CodeBlock code="npm run dev" language="bash" />
        </section>

        <section className="w-full bg-blue-50 border border-blue-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 text-xl flex items-center gap-2">
             <Target className="w-6 h-6 text-blue-600" />
             Your Tasks:
          </h3>
          <ol className="list-decimal list-inside space-y-4 text-slate-700 font-medium text-lg">
            <li>Go to <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">TShirtPage.jsx</code> and write the code inside <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">handleClearCart</code> to reset the <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">cartCount</code> state to <strong>0</strong>.</li>
            <li>Go to <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">SneakerPage.jsx</code> and look at the "Add to Cart" button. Add the <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">onClick</code> attribute and set it to <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">onAdd</code>.</li>
            <li>Look at the "Clear Cart" button. Add the <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">onClick</code> attribute and set it to <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">onClear</code>.</li>
          </ol>
        </section>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200 relative z-10">
          <Link to="/props" className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <ArrowLeft className="w-5 h-5" />
            Back: React Props
          </Link>
          <Link to="/state" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-200">
            Next: React State
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
    </>
  );
}