import * as React from 'react';

function TestLayout({ children }) {
  return (
    <div className="flex flex-col bg-gray-50 h-screen w-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <Content>{children}</Content>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex w-full items-stretch justify-between gap-5 pl-20 pr-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <div className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
        <div className="flex w-full justify-between gap-5 pr-1.5 items-start max-md:max-w-full max-md:flex-wrap">
          <Navigation />
          <Images />
        </div>
        <div className="bg-cyan-700 flex w-[83px] shrink-0 h-1 flex-col mt-5 self-start" />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="justify-between items-stretch flex gap-5 max-md:justify-center">
      <div className="text-black text-base font-bold whitespace-nowrap">
        Overview
      </div>
      <div className="text-neutral-400 text-base font-medium">Report</div>
      <div className="text-neutral-400 text-base font-medium">File Storage</div>
      <div className="text-neutral-400 text-base font-medium whitespace-nowrap">
        Message
      </div>
    </div>
  );
}

function Images() {
  return (
    <div className="justify-between items-stretch self-stretch flex gap-2">
      {/* Your image components remain unchanged */}
    </div>
  );
}

function Content({ children }) {
  return <div className="flex-grow p-4">{children}</div>;
}

function Sidebar() {
  return <div className="w-1/5 p-4" />;
}

export default TestLayout;
