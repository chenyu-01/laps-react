import * as React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

function TestLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="bg-gray-50 h-screen w-screen flex xl:justify-center">
      <div className={'flex flex-col items-center xl:max-w-screen-xl w-full '}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-grow w-full">
          <Sidebar isOpen={isSidebarOpen} />
          <Content>{children}</Content>
        </div>
      </div>
    </div>
  );
}

function Content({ children }) {
  return <div className={'bg-gray-100 grow'}>{children}</div>;
}

export default TestLayout;
