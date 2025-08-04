'use client';

import Sidebar from '@/components/sidebar/Sidebar';
import Topbar from '@/components/Topbar';
import { useState } from 'react';

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Topbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className='flex flex-1 overflow-auto'>
        <Sidebar isOpen={isSidebarOpen} />
        <main className='flex-1 bg-[#f3f3f3]'>{children}</main>
      </div>
    </div>
  );
}
