import React from 'react';

function AdminPage(props) {
  return (
    <form className="flex max-w-[700px] justify-between gap-5 items-start max-md:flex-wrap">
      <header className="text-black text-2xl font-bold">User Records</header>
      <AdminTitle />
      <AdminTitle />
    </form>
  );
}

function AdminTitle() {
  return (
    <div className="flex-3.5 px-5 items-start max-md:justify-center">
      <div className="flex-col text-neutral-400 text-sm font-medium relative whitespace-nowrap overflow-hidden aspect-[4.076923076923077] justify-center items-stretch mt-2 pr-4">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f6f8e11c-5767-4656-a2aa-8ee637f76dd2?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6f8e11c-5767-4656-a2aa-8ee637f76dd2?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6f8e11c-5767-4656-a2aa-8ee637f76dd2?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6f8e11c-5767-4656-a2aa-8ee637f76dd2?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6f8e11c-5767-4656-a2aa-8ee637f76dd2?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6f8e11c-5767-4656-a2aa-8ee637f76dd2?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6f8e11c-5767-4656-a2aa-8ee637f76dd2?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6f8e11c-5767-4656-a2aa-8ee637f76dd2?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"className="absolute h-full w-full object-cover object-center inset-0"
          alt="Type1"
        />
        <span>Type1</span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eeab42927ff7b87fb8c27f005e858615fd9e87a01c2d6fe0d6ddbff1553a338?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
        className="aspect-square object-contain object-center w-2.5 stroke-[0.768px] stroke-neutral-400 overflow-hidden self-center shrink- max-w-full my-auto"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3992a09e8284f5fc5ef17e979e8de61e1eaad6ea25199cfc1895ccada55a4ab9?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
        className="aspect-square object-contain object-center w-[22px] overflow-hidden self-stretch shrink-0 max-w-full"
        alt=""
      />
    </div>
  );
}

export default AdminPage;
