import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <Content />
      <Sidebar />
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
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a346b6424d08fbabf8514f67f59566ea35bb1db40937ff6cb77f39947b1e5b8?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
        className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc4fdf937793aea890ed4c7604cdc951e8e794893deca87672486fc12f0dc052?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
        className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
    </div>
  );
}

function Content() {
  return (
    <div className="flex basis-[0%] flex-col items-stretch self-start">
      <div className="flex justify-between gap-5 items-start">
        <div className="text-black text-xs font-medium">Name</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60aa9784d753b62a78b2aaa8142e445781107b4aedc7a4b367f927b622970677?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
          className="aspect-[1.75] object-contain object-center w-[7px] fill-neutral-400 overflow-hidden shrink-0 max-w-full mt-2"
        />
      </div>
      <div className="text-neutral-400 text-center text-xs capitalize">
        Type
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white flex w-[303px] shrink-0 max-w-full h-[714px] flex-col rounded-lg self-start" />
  );
}

export default MyComponent;
