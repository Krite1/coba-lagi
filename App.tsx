import React from 'react';
import Header from './components/Header.jsx';
import Blog from './components/Blog.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => {
  return (
    <div className="bg-[#FDFBF5] font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Blog />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;