import React from 'react';
import CodeBlock from '../components/CodeBlock';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Folder, Layout, ArrowRight, ArrowLeft, Target, Play, Globe } from 'lucide-react';

export default function PropsPage() {
  const step1Code = `# Install React Router & Icons
npm install lucide-react react-router-dom

# Install Tailwind CSS v4
npm install tailwindcss @tailwindcss/vite`;
  
  const step2Code = `import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ image, category, title, price, isNew }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 mb-4">
        <img src={image} alt={title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"/>
        {isNew && (
          <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase">New</span>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full text-gray-600 hover:text-red-500">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">{category}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">\${price.toFixed(2)}</p>
          <button className="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;`;

  const step3Code = `import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';

const Navbar = ({ brandName, cartCount }) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center sm:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>

          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">{brandName}</Link>
          </div>

          <div className="hidden sm:flex space-x-8">
            <Link to="/" className="text-gray-900 font-medium hover:text-indigo-600 transition">Home</Link>
            <Link to="/men" className="text-gray-900 font-medium hover:text-indigo-600 transition">Men</Link>
          </div>

          <div className="flex items-center">
            <button className="relative p-2 text-gray-600 hover:text-black transition">
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`;

  const step4Code = `import React from 'react';
import ProductCard from '../ProductCard';

const Home = ({ allProducts }) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
        <p className="text-gray-500 mt-2">Discover our latest minimalist collection.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard 
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            isNew={product.isNew}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;`;

  const step5Code = `import React from 'react';
import ProductCard from '../ProductCard';

const MenPage = ({ allProducts }) => {
  // Logic: Keep only products where category is "Men"
  const menItems = allProducts.filter(item => item.category === "Men");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Men's Collection</h1>
        <p className="text-gray-500 mt-2">Showing {menItems.length} items for Men.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menItems.map(item => (
          <ProductCard 
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            image={item.image}
            isNew={item.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default MenPage;`;

  const step6Code = `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import MenPage from './components/pages/MenPage';

const productsData = [
  { id: 1, title: "Classic White Tee", category: "Men", price: 25.00, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800", isNew: true },
  { id: 2, title: "Denim Jacket", category: "Men", price: 75.00, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800", isNew: false },
  { id: 3, title: "Minimalist Dress", category: "Women", price: 45.00, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800", isNew: true },
  { id: 4, title: "Slim Fit Chinos", category: "Men", price: 40.50, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800", isNew: false },
];

export default function App() {
  const [cartCount, setCartCount] = useState(2);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans pb-12">
        <Navbar brandName="SN_STORE" cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home allProducts={productsData} />} />
          <Route path="/men" element={<MenPage allProducts={productsData} />} />
        </Routes>
      </div>
    </Router>
  );
}`;

  return (
    <>
      <Hero 
        title="Mastering React Props" 
        subtitle="Learn how to organize your React files properly and pass data between components using Props. We are building the SN_STORE E-Commerce UI!" 
        icon={<Layout className="w-8 h-8 text-indigo-600" />}
        color="indigo"
      />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-16 mt-8">
        
        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Play className="w-5 h-5" /></span>
            1. Install Packages
          </h2>
          <p className="text-slate-600 mb-4">Run these commands in your terminal to install Icons, React Router, and Tailwind CSS.</p>
          <CodeBlock code={step1Code} language="bash" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Folder className="w-5 h-5" /></span>
            2. Project Folder Structure
          </h2>
          <p className="text-slate-600 mb-6">Create the following folders and files inside your <code>src</code> directory before we start coding:</p>
          <div className="bg-slate-900 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto shadow-inner text-white">
            <span className="text-indigo-400">my-react-app/</span><br />
            └── <span className="text-indigo-400 font-bold">src/</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-green-400 font-bold">App.jsx</span> <span className="text-gray-400 italic">← (Main file with Router & State)</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-indigo-400 font-bold">components/</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── <span className="text-green-400 font-bold">Navbar.jsx</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── <span className="text-green-400 font-bold">ProductCard.jsx</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── <span className="text-indigo-400 font-bold">pages/</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-green-400 font-bold">Home.jsx</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-green-400 font-bold">MenPage.jsx</span><br />
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Layout className="w-5 h-5" /></span>
            3. The Product Component (Child)
          </h2>
          <p className="text-slate-600 mb-4">This reusable card accepts props like <code>image</code>, <code>title</code>, and <code>price</code>.</p>
          <CodeBlock code={step2Code} language="jsx" title="📁 src / components / ProductCard.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Layout className="w-5 h-5" /></span>
            4. The Navbar
          </h2>
          <p className="text-slate-600 mb-4">A simple sticky navbar receiving <code>brandName</code> and <code>cartCount</code> as props.</p>
          <CodeBlock code={step3Code} language="jsx" title="📁 src / components / Navbar.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Layout className="w-5 h-5" /></span>
            5. The Store Page (Parent)
          </h2>
          <p className="text-slate-600 mb-4">This page iterates over the data using `.map` and passes it to the `ProductCard` component.</p>
          <CodeBlock code={step4Code} language="jsx" title="📁 src / components / pages / Home.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Target className="w-5 h-5" /></span>
            6. Filtering Data (Men's Page)
          </h2>
          <p className="text-slate-600 mb-4">Here we filter the data array to only show Men's clothing.</p>
          <CodeBlock code={step5Code} language="jsx" title="📁 src / components / pages / MenPage.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Globe className="w-5 h-5" /></span>
            7. The App Router
          </h2>
          <p className="text-slate-600 mb-4">Bringing it all together in our main App component.</p>
          <CodeBlock code={step6Code} language="jsx" title="📁 src / App.jsx" />
        </section>

        <section className="w-full bg-pink-50 border border-pink-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 text-xl flex items-center gap-2">
             <Target className="w-6 h-6 text-pink-600" />
             Student Challenge: Create WomenPage!
          </h3>
          <p className="text-slate-700 mb-4 text-lg">Follow these steps to build the <strong>Women's Collection</strong> page:</p>
          <ol className="list-decimal list-inside space-y-4 text-slate-700 font-medium text-lg">
            <li>Create a new file named <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">WomenPage.jsx</code> inside the <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">src/components/pages/</code> folder.</li>
            <li>Write the code similar to <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">MenPage.jsx</code>, but change the logic to filter products where <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">category === "Women"</code>.</li>
            <li>Go to <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">App.jsx</code>, import your new <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">WomenPage</code>, and add a new <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">&lt;Route path="/women" ... /&gt;</code> inside the Routes.</li>
            <li>Go to <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">Navbar.jsx</code> and update the Women navigation link to use <code className="bg-white border border-slate-200 px-2 py-1 rounded font-mono text-base">&lt;Link to="/women"&gt;Women&lt;/Link&gt;</code>.</li>
          </ol>
        </section>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200 relative z-10">
          <Link to="/components" className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <ArrowLeft className="w-5 h-5" />
            Back: React Components
          </Link>
          <Link to="/handling" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-200">
            Next: React Events
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
    </>
  );
}