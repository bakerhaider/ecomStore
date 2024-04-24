import Navbar from '@/components/Navbar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
