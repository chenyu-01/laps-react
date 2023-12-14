import React from 'react';

function PersonCardComponent(props) {
  return (
    <div className="shadow-lg bg-white flex w-[230px] max-w-full flex-col items-stretch mt-5 px-5 py-3.5 rounded-lg self-start max-md:pl-5">
      <Header />
      <UserInfo />
      <LeavingStatus />
    </div>
  );
}

function Header() {
  return (
    <header className="flex w-full items-stretch justify-between gap-5">
      <div className="flex items-stretch justify-between gap-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b24350a7c69799f8a5b405d71c5a65f7402bd11ce8a01b748ffbf78915888f95?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
          className="aspect-[1.03] object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
          alt="Logo"
        />
        <div className="text-black text-lg font-semibold self-center grow whitespace-nowrap my-auto">
          Name
        </div>
      </div>
      <div className="text-cyan-700 text-xs leading-5 capitalize self-start">
        Type
      </div>
    </header>
  );
}

function UserInfo() {
  return (
    <div className="shadow-lg bg-white flex items-stretch justify-between gap-2 mt-3 py-1.5 rounded-lg">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/695598bf-0946-4945-96f7-061f3927021f?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/695598bf-0946-4945-96f7-061f3927021f?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695598bf-0946-4945-96f7-061f3927021f?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/695598bf-0946-4945-96f7-061f3927021f?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/695598bf-0946-4945-96f7-061f3927021f?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695598bf-0946-4945-96f7-061f3927021f?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/695598bf-0946-4945-96f7-061f3927021f?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/695598bf-0946-4945-96f7-061f3927021f?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
        className="aspect-[0.96] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
        alt="Author"
      />
      <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
        <div className="text-black text-xs">Authored by</div>
        <div className="text-black text-xs font-semibold mt-1.5">Name</div>
      </div>
    </div>
  );
}

function LeavingStatus() {
  return (
    <div className="shadow-lg bg-white flex items-stretch justify-between gap-2.5 mt-2 py-2 rounded-lg">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb66c9f7-0bc3-4f7a-aa7b-c27f1fea9183?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb66c9f7-0bc3-4f7a-aa7b-c27f1fea9183?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb66c9f7-0bc3-4f7a-aa7b-c27f1fea9183?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb66c9f7-0bc3-4f7a-aa7b-c27f1fea9183?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb66c9f7-0bc3-4f7a-aa7b-c27f1fea9183?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb66c9f7-0bc3-4f7a-aa7b-c27f1fea9183?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb66c9f7-0bc3-4f7a-aa7b-c27f1fea9183?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb66c9f7-0bc3-4f7a-aa7b-c27f1fea9183?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
        className="aspect-square object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
        alt="Leaving Status"
      />
      <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
        <div className="text-black text-xs">Leaving Status</div>
        <div className="text-black text-xs font-semibold mt-1">Status</div>
      </div>
    </div>
  );
}
