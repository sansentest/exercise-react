import CodeBlock from '../components/CodeBlock';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Settings, Folder, ShoppingCart, Layout, ArrowRight, ArrowLeft, Target, Database, Plus, RefreshCw, ShoppingBag, List, Trash2 } from 'lucide-react';

export default function StatePage2() {
  const step1Code = `# 1. Create a new Vite app
npm create vite@latest advanced-cart -- --template react
cd advanced-cart

# 2. Install dependencies (icons)
npm install lucide-react

# 3. Start your server
npm run dev`;

  const step2Code = `// src/components/ProductList.jsx
import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Available Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-lg text-slate-800 mb-1">{product.name}</h3>
              <p className="text-fuchsia-600 font-bold text-xl mb-4">$\\{product.price}</p>
              <button 
                onClick={() => onAddToCart(product)}
                className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition shadow-md"
              >
                <Plus className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;

  const step3Code = `// src/components/CartSidebar.jsx
import React from 'react';
import { ShoppingCart, Trash2, ShoppingBag, Minus, Plus } from 'lucide-react';

export default function CartSidebar({ cartItems, onUpdateQuantity, onRemove }) {
  // Calculate total price by considering quantity!
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="w-[380px] bg-white p-6 rounded-3xl shadow-xl border border-slate-100 h-fit sticky top-24">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-800">
        <ShoppingCart className="w-6 h-6 text-fuchsia-600" />
        Your Cart ({cartItems.length})
      </h2>
      
      <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
        {cartItems.map(item => (
          <div key={item.id} className="flex gap-4 border-b border-slate-100 pb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1">
              <p className="font-bold text-slate-800 leading-tight mb-1">{item.name}</p>
              <p className="text-sm font-bold text-fuchsia-600">$\\{item.price}</p>
              
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center bg-slate-100 rounded-lg p-1 shadow-inner">
                  <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded-md shadow-sm transition"><Minus className="w-3 h-3" /></button>
                  <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded-md shadow-sm transition"><Plus className="w-3 h-3" /></button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition ml-auto">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {cartItems.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="font-medium text-lg">Your cart is empty.</p>
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center pt-6 border-t-2 border-dashed border-slate-200">
        <span className="font-bold text-lg text-slate-800">Total:</span>
        <span className="font-bold text-2xl text-fuchsia-600">$\\{totalPrice}</span>
      </div>
      
      <button className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white py-4 rounded-xl font-bold mt-6 hover:shadow-lg hover:shadow-fuchsia-200 hover:-translate-y-0.5 transition-all">
        Checkout Securely
      </button>
    </div>
  );
}`;

  const step4Code = `// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';

export default function App() {
  // 1. Beautiful products with images!
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, name: "Mechanical Keyboard", price: 149, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" },
    { id: 3, name: "Gaming Mouse", price: 59, image: "https://images.unsplash.com/photo-1527814050087-179f00460c5f?w=500&q=80" },
  ];

  const [cart, setCart] = useState([]);

  // 2. Add to cart (with quantity logic!)
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // If it exists, map through and increase quantity by 1
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      // If it's new, add it with quantity: 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 3. Update quantity (+ or -)
  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + change) }; // Prevents going below 1
      }
      return item;
    }));
  };

  // 4. Remove entirely
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-12">
        <ProductList products={products} onAddToCart={addToCart} />
        <CartSidebar 
          cartItems={cart} 
          onUpdateQuantity={updateQuantity} 
          onRemove={removeFromCart} 
        />
      </div>
    </div>
  );
}`;

  return (
    <>
      <Hero 
        title="React State: Advanced E-Commerce" 
        subtitle="Build a beautiful, fully-functional Shopping Cart using Arrays, Objects, and complex React State manipulations."
        icon={<List className="w-8 h-8 text-fuchsia-600" />}
        color="fuchsia"
        >
          <div className="mt-8 text-left inline-block w-full max-w-4xl text-slate-800 relative z-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="bg-fuchsia-100 text-fuchsia-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">
                <Database className="w-5 h-5" />
              </span>
              Why use Arrays in State?
            </h2>
            <p className="text-slate-700 mb-4 text-lg">
              In our last lesson, we just counted <i>how many</i> items were in the cart using a simple number (<code className="bg-white text-fuchsia-800 px-1 rounded shadow-sm">0, 1, 2...</code>). But in a real E-Commerce website, we need to know <strong>exactly what items</strong> the user added!
            </p>
            <p className="text-slate-700 text-lg">
              To do this, we can store an <strong>Array of Objects</strong> inside our State. Whenever the user clicks "Add to Cart", we simply push the product data (like its name and price) into our state array.
            </p>
          </div>
        </Hero>

      <main className="max-w-4xl mx-auto p-6 space-y-16 mt-8">
        
        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-fuchsia-100 text-fuchsia-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Settings className="w-5 h-5" /></span>
            1. Create Project & Packages
          </h2>
          <p className="text-slate-600 mb-4">First, let's create a fresh new React project and install our icons just like we always do.</p>
          <CodeBlock code={step1Code} language="bash" title="Terminal" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-fuchsia-100 text-fuchsia-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><ShoppingBag className="w-5 h-5" /></span>
            2. Create the Product List
          </h2>
          <p className="text-slate-600 mb-4">Let's create a component that maps over a list of products and provides an "Add to Cart" button. It will accept an <code>onAddToCart</code> prop to talk to the parent App.</p>
          <CodeBlock code={step2Code} language="jsx" title="📁 src / components / ProductList.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-fuchsia-100 text-fuchsia-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Folder className="w-5 h-5" /></span>
            3. Displaying the Cart Array
          </h2>
          <p className="text-slate-600 mb-4">Now we'll build the Cart Sidebar. It takes the array of <code>cartItems</code> as a prop, uses <code>.map()</code> to show them, and uses <code>.reduce()</code> to calculate the total price!</p>
          <CodeBlock code={step3Code} language="jsx" title="📁 src / components / CartSidebar.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-fuchsia-100 text-fuchsia-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><RefreshCw className="w-5 h-5" /></span>
            4. The Main App (Using Arrays in State)
          </h2>
          <p className="text-slate-600 mb-4">When updating an array in state, <strong>never modify the original array directly</strong> (like using <code>cart.push()</code>). Always create a copy using the spread operator <code>[...cart]</code> and add your new item to the end!</p>
          <CodeBlock code={step4Code} language="jsx" title="📁 src / App.jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-white text-fuchsia-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md"><Target className="w-6 h-6" /></span>
            5. Student Challenge: Remove Items!
          </h2>
          <p className="text-slate-600 mb-6 text-lg relative z-10 font-medium">Currently, our delete trash can icon doesn't do anything! It's time for you to wire it up.</p>
          
          <div className="bg-gradient-to-br from-fuchsia-600 via-pink-500 to-rose-500 p-8 rounded-3xl border border-fuchsia-400/30 mt-6 shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-300 text-white relative z-10">
            <h3 className="font-bold text-white mb-4 text-xl flex items-center gap-2">
               <Target className="w-6 h-6 text-fuchsia-200" />
               Your Tasks:
            </h3>
            <ol className="list-decimal list-inside space-y-4 text-fuchsia-50 font-medium text-lg">
              <li>In <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">App.jsx</code>, create a new function called <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">removeFromCart(indexToRemove)</code>.</li>
              <li>Inside that function, use the <code>.filter()</code> array method to create a new array that excludes the item at that specific index. Then use <code>setCart()</code> to save it!</li>
              <li>Pass your new function down as a prop to <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">CartSidebar</code> (e.g. <code>onRemove=&#123;removeFromCart&#125;</code>).</li>
              <li>In <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">CartSidebar.jsx</code>, add an <code>onClick</code> event to the Trash button that calls your new function with the item's index!</li>
            </ol>
          </div>
        </section>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200 relative z-10">
          <Link to="/state" className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <ArrowLeft className="w-5 h-5" />
            Back: React State 1
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