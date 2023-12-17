import * as React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

function TestLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex flex-col bg-gray-50 h-screen w-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-grow">
        <Sidebar isOpen={isSidebarOpen} />
        <Content>{children}</Content>
      </div>
    </div>
  );
}

function Content({ children }) {
  return <div className="flex-grow p-4">{children}</div>;
}

export default TestLayout;
