import CodeBlock from '../components/CodeBlock';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Settings, Folder, ShoppingCart, Layout, ArrowRight, ArrowLeft, Target, Database, Plus, RefreshCw, ShoppingBag, Globe } from 'lucide-react';

export default function StatePage() {
  const step1Code = `# 1. Create a new Vite app
npm create vite@latest react-store -- --template react
cd react-store

# 2. Install dependencies (icons)
npm install lucide-react

# 3. Start your server
npm run dev`;

  const step2Code = `// src/components/Navbar.jsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center bg-indigo-600 text-white p-4 shadow-lg rounded-b-lg">
      <h1 className="text-xl font-bold">State Store</h1>
      
      {/* Dynamic State Display */}
      <div className="flex items-center gap-2 bg-indigo-800 px-4 py-2 rounded-full">
        <ShoppingCart className="w-5 h-5" />
        <span className="font-bold">{cartCount} Items</span>
      </div>
    </nav>
  );
}`;

  const step3Code = `// src/components/ProductCard.jsx
import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ name, price, onAdd }) {
  return (
    <div className="border border-slate-200 p-6 rounded-xl shadow-sm bg-white hover:shadow-md transition">
      <h3 className="font-bold text-lg text-slate-800">{name}</h3>
      <p className="text-slate-500 mb-4">Price: $\\{price}</p>
      
      <button 
        onClick={onAdd}
        className="flex items-center justify-center gap-2 w-full bg-indigo-50 text-indigo-700 py-2 rounded-lg font-medium hover:bg-indigo-100 transition"
      >
        <Plus className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  );
}`;

  const step4Code = `// src/App.jsx
import React, { useState } from 'react'; // 1. Import useState!
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

export default function App() {
  // 2. Create the state variable and its updater function
  const [cartCount, setCartCount] = useState(0);

  // 3. Create a handler to update the state
  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // Triggers a re-render!
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 4. Pass the state down as a prop */}
      <Navbar cartCount={cartCount} />
      
      <main className="mt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 5. Pass the updater function down as a prop */}
          <ProductCard name="Air Max Sneakers" price="120" onAdd={handleAddToCart} />
          <ProductCard name="Graphic T-Shirt" price="25" onAdd={handleAddToCart} />
          <ProductCard name="Denim Jacket" price="85" onAdd={handleAddToCart} />
        </div>
      </main>
    </div>
  );
}`;

  return (
    <>
      <Hero 
        title="React State" 
        subtitle="Give your apps memory! Learn how to use useState to build a fully interactive E-Commerce cart."
        icon={<Database className="w-8 h-8 text-violet-600" />}
        color="violet"
      >
        <div className="mt-8 text-left inline-block w-full max-w-4xl text-slate-800 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-violet-100 text-violet-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <Database className="w-5 h-5" />
            </span>
            What is State?
          </h2>
          <p className="text-slate-700 mb-4 text-lg">
            In React, <strong>State</strong> is like the memory of a component. While <strong>Props</strong> are passed down from parents and cannot be changed by the child, <strong>State</strong> is created inside a component and CAN be changed!
          </p>
          
          <h3 className="font-bold text-slate-800 mb-2 mt-6">Think of it like a video game:</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 font-medium">
            <li>Your current <strong>Score</strong> is stored in State (it goes up when you get coins).</li>
            <li>Your <strong>Health Bar</strong> is stored in State (it goes down when you get hit).</li>
            <li>Whether the game is <strong>Paused</strong> or not is stored in State.</li>
          </ul>
          
          <p className="text-slate-700 text-lg">
            We use a special hook called <code className="bg-white text-violet-800 px-2 py-1 rounded font-mono shadow-sm border border-slate-100">useState()</code> to create these memory variables. When you update the state, React automatically re-draws your screen to show the new data!
          </p>
        </div>
      </Hero>

      <main className="max-w-4xl mx-auto p-6 space-y-16 mt-8">
        


        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-violet-100 text-violet-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Settings className="w-5 h-5" /></span>
            1. Create Project & Packages
          </h2>
          <p className="text-slate-600 mb-4">Let's build a new E-Commerce site from scratch. Run these commands in your terminal to create the project and install icons.</p>
          <CodeBlock code={step1Code} language="bash" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-violet-100 text-violet-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Layout className="w-5 h-5" /></span>
            2. Create the Navbar Component
          </h2>
          <p className="text-slate-600 mb-4">Create a Navbar that will display our cart state. Notice how it receives <code>cartCount</code> as a prop!</p>
          <CodeBlock code={step2Code} language="jsx" title="📁 src / components / Navbar.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-violet-100 text-violet-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><ShoppingBag className="w-5 h-5" /></span>
            3. Create the Product Component
          </h2>
          <p className="text-slate-600 mb-4">Create a reusable Product Card. It receives an <code>onAdd</code> function as a prop, which it calls when the button is clicked.</p>
          <CodeBlock code={step3Code} language="jsx" title="📁 src / components / ProductCard.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-violet-100 text-violet-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><RefreshCw className="w-5 h-5" /></span>
            4. The Main App (Connecting State)
          </h2>
          <p className="text-slate-600 mb-4">This is where the magic happens! We import <code>useState</code> to create memory for our App. When the state updates, React automatically re-renders the page with the new numbers.</p>
          <CodeBlock code={step4Code} language="jsx" title="📁 src / App.jsx" />
        </section>

        <section className="w-full bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 p-8 rounded-3xl shadow-xl text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="bg-white text-violet-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md"><Target className="w-6 h-6" /></span>
            5. Student Challenge: Clear the Cart!
          </h2>
          <p className="mb-6 text-lg relative z-10 font-medium text-violet-100">Your store can add items, but what if a user wants to empty their cart? Let's add a reset button!</p>
          <div className="bg-black/20 p-6 rounded-2xl">
            <h3 className="font-bold text-white mb-4 text-xl flex items-center gap-2">
               Your Tasks:
            </h3>
            <ol className="list-decimal list-inside space-y-4 text-violet-50 font-medium text-lg">
              <li>In <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">App.jsx</code>, create a new function called <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">handleClearCart</code> right below your add handler.</li>
              <li>Inside that function, use <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">setCartCount(0)</code> to reset the memory to zero.</li>
              <li>Pass this new function down as a prop to your <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">Navbar</code> (e.g., <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">onClear=&#123;handleClearCart&#125;</code>).</li>
              <li>Open <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">Navbar.jsx</code>, add a "Clear Cart" button next to the item count, and make its <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">onClick</code> fire the <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">onClear</code> prop!</li>
            </ol>
          </div>
        </section>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200 relative z-10">
          <Link to="/handling" className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <ArrowLeft className="w-5 h-5" />
            Back: React Events
          </Link>
          <Link to="/hooks" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-200">
            Next: React Hooks
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </main>
    </>
  );
}
