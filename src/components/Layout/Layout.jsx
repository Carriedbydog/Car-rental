import Header from 'components/Header/Header';
import { useSidebar } from 'components/Сontext/Context';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { sidebarOpen } = useSidebar();
  return (
    <div className="flex">
      <Header />
      <Outlet className={`content ${sidebarOpen ? 'ml-60' : 'ml-0'}`} />
    </div>
  );
};

export default Layout;
