import React from 'react';
import CodeBlock from '../components/CodeBlock';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Layers, Code2, Cpu, Target, Settings, Folder, Network, ArrowRight } from 'lucide-react';

export default function IntroPage() {
  const stepCreateCode = `# 1. Create a new React project using Vite
npm create vite@latest my-react-app -- --template react

# 2. Go into your project folder
cd my-react-app

# 3. Install all the necessary dependencies
npm install

# 4. Start the development server!
npm run dev`;

  const stepFlowHtml = `<!-- 1. index.html contains an empty div -->
<div id="root"></div>`;

  const stepFlowMain = `// 2. main.jsx grabs that div and injects your React App into it!
import { createRoot } from 'react-dom/client';

// Mount your app to the browser
const root = createRoot(document.getElementById('root'));
root.render(<App />);`;

  const stepFlowApp = `// 3. App.jsx is your main page. You can import other components here!
import Welcome from './components/Welcome.jsx'; // Importing a custom file

function App() {
  return (
    <div>
      {/* Rendering the imported file */}
      <Welcome />
    </div>
  );
}
export default App;`;

  const stepFlowWelcome = `// 4. Welcome.jsx is your custom component!
export default function Welcome() {
  return (
    <div className="welcome-message">
      <h1>Hello from Welcome Component!</h1>
    </div>
  );
}`;

  const stepWelcomeCode = `// A Component is just a JavaScript function that returns UI!
export default function Welcome() {
  return (
    <div className="card">
      <h1>Hello, React!</h1>
      <p>I am a reusable component.</p>
    </div>
  );
}`;

  const stepAppWelcomeCode = `// Import your new component
import Welcome from './components/Welcome';

// You can use it as many times as you want!
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
export default App;`;

  const step2Code = `// JSX lets you write HTML directly inside your JavaScript code.
// It also lets you inject dynamic JavaScript variables using curly braces {}.

const user = {
  name: "Sarah",
  role: "Developer"
};

function UserProfile() {
  return (
    <div className="profile">
      {/* Injecting variables dynamically */}
      <h2>Name: {user.name}</h2>
      <p>Role: {user.role}</p>
      
      {/* You can even do math or logic inside! */}
      <p>Next year, Sarah will be {25 + 1} years old.</p>
    </div>
  );
}`;

  const step3Code = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      {/* When you click the button, React doesn't reload the page. */}
      {/* The Virtual DOM figures out that ONLY the {count} number changed, */}
      {/* and it instantly updates just that tiny piece of text in the real DOM! */}
      <h2>Clicks: {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}`;

  return (
    <>
      <Hero title="React Introduction" description="Welcome to React! Let's explore the fundamental concepts that make React the most popular UI library in the world.">
        <div className="w-full mt-10 text-left">
          <h3 className="text-base font-extrabold text-slate-800 mb-4 uppercase tracking-wider">Core Concepts</h3>
          <ul className="space-y-4 text-slate-700 font-medium text-sm">
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">1</span>
              Creating a React Project
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">2</span>
              Project Folder Structure
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">3</span>
              The React Flow
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">4</span>
              Components: UI Building Blocks
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">5</span>
              JSX: HTML inside JavaScript
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shadow-sm shrink-0">6</span>
              The Virtual DOM
            </li>
            <li className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-black shadow-sm shrink-0">7</span>
              Student Challenge!
            </li>
          </ul>
        </div>
      </Hero>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-16">

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Settings className="w-5 h-5" /></span>
            1. Creating a React Project
          </h2>
          <p className="text-slate-600 mb-4">React projects are typically created using a build tool. The most popular and fastest build tool today is <strong>Vite</strong>. Open your terminal and run these commands to set up a brand new React application from scratch!</p>
          <CodeBlock code={stepCreateCode} language="bash" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Folder className="w-5 h-5" /></span>
            2. Project Folder Structure
          </h2>
          <p className="text-slate-600 mb-6">Once you create a Vite project, you'll see a bunch of files. Here is what they all do:</p>
          <div className="bg-gray-900 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto shadow-inner">
            <span className="text-blue-400">my-react-app/</span><br />
            ├── <span className="text-blue-400">node_modules/</span> <span className="text-gray-400 italic">← (All installed packages live here. Never edit this!)</span><br />
            ├── <span className="text-blue-400">public/</span> <span className="text-gray-400 italic">← (Static assets like favicon.ico)</span><br />
            ├── <span className="text-green-400 font-bold">index.html</span> <span className="text-gray-400 italic">← (The main HTML file that loads React into the browser)</span><br />
            ├── <span className="text-green-400 font-bold">package.json</span> <span className="text-gray-400 italic">← (Lists your project's dependencies and scripts)</span><br />
            └── <span className="text-blue-400 font-bold">src/</span> <span className="text-gray-400 italic">← (You will write 99% of your code inside the src folder!)</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-300 font-bold">main.jsx</span> <span className="text-gray-400 italic">← (The entry point that grabs index.html and injects React into it)</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-300 font-bold">App.jsx</span> <span className="text-gray-400 italic">← (The main root component of your application)</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-yellow-300">index.css</span> <span className="text-gray-400 italic">← (Your global CSS styles)</span><br />
          </div>
        </section>
        
        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Network className="w-5 h-5" /></span>
            3. The React Flow (How files connect)
          </h2>
          <p className="text-slate-600 mb-4">React has a specific flow for how it boots up. <code>index.html</code> loads first. Then, <code>main.jsx</code> takes your <code>App.jsx</code> and injects it into the HTML. If you create a new component file, you just import it into your App!</p>
          
          <div className="space-y-6 mt-6">
            <div className="bg-white/50 p-4 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="bg-slate-800 text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">1</span> 
                The HTML File
              </h3>
              <CodeBlock code={stepFlowHtml} language="html" title="📁 index.html" />
            </div>
            
            <div className="bg-white/50 p-4 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="bg-slate-800 text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">2</span> 
                The Entry Point
              </h3>
              <CodeBlock code={stepFlowMain} language="jsx" title="📁 src / main.jsx" />
            </div>
            
            <div className="bg-white/50 p-4 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="bg-slate-800 text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">3</span>
                The Main App Component
              </h3>
              <CodeBlock code={stepFlowApp} language="jsx" title="📁 src / App.jsx" />
            </div>

            <div className="bg-white/50 p-4 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="bg-slate-800 text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">4</span>
                The Component (Welcome)
              </h3>
              <CodeBlock code={stepFlowWelcome} language="jsx" title="📁 src / components / Welcome.jsx" />
            </div>
          </div>
          <p className="text-slate-600 mb-4">React apps are built out of <strong>Components</strong>. Think of them like LEGO bricks. You build small, reusable pieces (like a Button, a Navbar, or a Card) and combine them to create complex pages.</p>
          
          <div className="space-y-6 mt-6">
            <div className="bg-white/50 p-4 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="bg-slate-800 text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">1</span> 
                The Component (Welcome)
              </h3>
              <CodeBlock code={stepWelcomeCode} language="jsx" title="📁 src / components / Welcome.jsx" />
            </div>
            
            <div className="bg-white/50 p-4 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="bg-slate-800 text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">2</span> 
                Using the Component
              </h3>
              <CodeBlock code={stepAppWelcomeCode} language="jsx" title="📁 src / App.jsx" />
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Layers className="w-5 h-5" /></span>
            4. Components: UI Building Blocks
          </h2>
          <p className="text-slate-600 mb-4">React apps are built out of <strong>Components</strong>. Think of them like LEGO bricks. You build small, reusable pieces (like a Button, a Navbar, or a Card) and combine them to create complex pages.</p>
          <CodeBlock code={stepWelcomeCode} language="jsx" />
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl"><Code2 className="w-5 h-5" /></span>
            5. JSX: HTML inside JavaScript
          </h2>
          <p className="text-slate-600 mb-4">React uses a special syntax called <strong>JSX</strong>. It looks exactly like HTML, but it actually lives inside your JavaScript files. This makes it incredibly easy to build dynamic interfaces by injecting JavaScript variables directly into the markup using curly braces <code>{'{ }'}</code>.</p>
          <CodeBlock code={step2Code} language="jsx" />
        </section>

        <section className="w-full bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 p-8 rounded-3xl shadow-xl text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="bg-white text-emerald-700 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md"><Target className="w-6 h-6" /></span>
            7. Student Challenge: Your First Component!
          </h2>
          <p className="mb-6 text-lg relative z-10 font-medium text-emerald-100">Now it's your turn! Try creating your very first React component from scratch.</p>
          <div className="bg-black/20 p-6 rounded-2xl">
            <h3 className="font-bold text-white mb-4 text-xl flex items-center gap-2">
               Your Tasks:
            </h3>
            <ol className="list-decimal list-inside space-y-4 text-emerald-50 font-medium text-lg">
              <li>Create a new file named <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">HelloComponent.jsx</code> inside the <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">src/components/</code> folder.</li>
              <li>Write a JavaScript function that returns an <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">&lt;h2&gt;</code> tag saying "Hello React!" or any text you like.</li>
              <li>Don't forget to <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">export default HelloComponent;</code> at the bottom of the file!</li>
              <li>Open <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">App.jsx</code>, import your new component at the top, and add <code className="bg-black/20 px-2 py-1 rounded font-mono text-base">&lt;HelloComponent /&gt;</code> inside the main App return block.</li>
              <li>Save all files and look at your browser to see your very first component rendered on the screen!</li>
            </ol>
          </div>
        </section>

        <div className="flex justify-end mt-12 pt-8 border-t border-slate-200">
          <Link to="/components" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-200">
            Next: React Components
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </main>
    </>
  );
}