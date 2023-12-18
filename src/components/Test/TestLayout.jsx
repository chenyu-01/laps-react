import * as React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function TestLayout({ children }) {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return (
      <div
        className={
          'flex flex-col items-center justify-center h-screen w-screen'
        }
      >
        <p className={'rounded-3xl text-8xl text-center'}>Not Authenticated</p>
        <button
          className={'bg-indigo-400 py-4 my-3 rounded-2xl px-3 text-5xl'}
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </button>
      </div>
    );
  }
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="bg-gray-50 h-screen w-screen flex xl:justify-center">
      <div className={'flex flex-col items-center xl:max-w-screen-xl w-full '}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-grow w-full relative">
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
