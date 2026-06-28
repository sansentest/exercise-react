const fs = require('fs');
const files = [
  'c:/Users/SAN SEN/Desktop/learn react js/page/src/pages/PropsPage.jsx',
  'c:/Users/SAN SEN/Desktop/learn react js/page/src/pages/HandlingPage.jsx'
];

for (let file of files) {
  let code = fs.readFileSync(file, 'utf8');
  
  // Replace white cards
  code = code.replace(/<section className=\"bg-white\/80 backdrop-blur-md rounded-3xl shadow-xl border border-white p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300\">/g, '<section className=\"w-full\">');
  
  // Replace dark Project Structure card
  code = code.replace(/<section className=\"bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl shadow-2xl border border-indigo-700\/50 p-8 md:p-10 text-white hover:shadow-indigo-900\/40 hover:-translate-y-1 transition-all duration-300\">/g, '<section className=\"w-full\">');
  
  // Replace Emerald Run Server card
  code = code.replace(/<section className=\"bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 rounded-3xl shadow-2xl border border-emerald-400\/50 p-8 md:p-10 text-white hover:shadow-emerald-500\/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden\">/g, '<section className=\"w-full\">');

  // Replace Indigo Student Challenge card (HandlingPage)
  code = code.replace(/<section className=\"bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-3xl shadow-2xl border border-blue-400\/50 p-8 md:p-10 text-white hover:shadow-blue-500\/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden\">/g, '<section className=\"w-full\">');

  // Replace Pink Student Challenge card (PropsPage)
  code = code.replace(/<section className=\"bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 rounded-3xl shadow-2xl border border-pink-400\/50 p-8 md:p-10 text-white hover:shadow-rose-500\/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden\">/g, '<section className=\"w-full\">');

  // Remove the absolute blur elements from gradient cards
  code = code.replace(/<div className=\"absolute[^\"]*blur-2xl\"><\/div>\n\s*/g, '');

  // Fix text colors for dark card (Project structure)
  code = code.replace(/text-indigo-200/g, 'text-slate-600');
  
  // Explicitly change title colors
  code = code.replace(/<h2 className=\"text-2xl font-bold mb-4 flex items-center\">/g, '<h2 className=\"text-2xl font-bold text-slate-900 mb-4 flex items-center\">');

  // Fix Run server text colors
  code = code.replace(/text-emerald-50 /g, 'text-slate-600 ');
  code = code.replace(/<h2 className=\"text-3xl font-extrabold mb-4 flex items-center gap-3 relative z-10\">/g, '<h2 className=\"text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3\">');
  
  // Fix Student Challenge HandlingPage colors
  code = code.replace(/text-indigo-100 /g, 'text-slate-600 ');
  code = code.replace(/<div className=\"bg-black\/20 backdrop-blur-sm p-6 rounded-xl border border-white\/10 relative z-10\">/g, '<div className=\"bg-slate-100 p-6 rounded-xl border border-slate-200 mt-4\">');
  code = code.replace(/<h3 className=\"font-bold text-white mb-3 text-lg\">/g, '<h3 className=\"font-bold text-slate-900 mb-3 text-lg\">');
  code = code.replace(/text-indigo-50 font-medium/g, 'text-slate-700 font-medium');

  // Fix Student Challenge PropsPage colors
  code = code.replace(/text-pink-100 /g, 'text-slate-600 ');
  code = code.replace(/<ol className=\"list-decimal list-inside space-y-3 text-white font-medium bg-white\/10 p-6 rounded-xl border border-white\/20\">/g, '<ol className=\"list-decimal list-inside space-y-3 text-slate-700 font-medium bg-slate-100 p-6 rounded-xl border border-slate-200 mt-4\">');

  fs.writeFileSync(file, code);
}
console.log('Done');
