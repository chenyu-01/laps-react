import React from 'react';

export default function LeaveUserCard() {
  return (
    <div className="items-stretch bg-white bg-opacity-50 self-stretch flex gap-2.5 px-2.5 py-2 rounded-lg border-[1.024px] border-solid border-indigo-50 max-md:justify-center">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a25b2841c2883a5b547c872b01a863ba9fe73357673d9b7f69812037db7191b?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25b2841c2883a5b547c872b01a863ba9fe73357673d9b7f69812037db7191b?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25b2841c2883a5b547c872b01a863ba9fe73357673d9b7f69812037db7191b?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25b2841c2883a5b547c872b01a863ba9fe73357673d9b7f69812037db7191b?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25b2841c2883a5b547c872b01a863ba9fe73357673d9b7f69812037db7191b?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25b2841c2883a5b547c872b01a863ba9fe73357673d9b7f69812037db7191b?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25b2841c2883a5b547c872b01a863ba9fe73357673d9b7f69812037db7191b?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25b2841c2883a5b547c872b01a863ba9fe73357673d9b7f69812037db7191b?apiKey=61d501c9e4204f7ab9004ebff2b8b115&"
        className="aspect-[0.97] object-contain object-center w-8 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
      <div className="items-stretch flex grow basis-[0%] flex-col">
        <div className="justify-center text-slate-700 text-xs font-medium whitespace-nowrap">
          Welcome back,
        </div>
        <div className="justify-center text-slate-700 text-lg font-medium whitespace-nowrap">
          Drennan
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de69c149d32cb11035a433e57b651c06d7b90aa5de606430097ee35126a89b98?apiKey=61d501c9e4204f7ab9004ebff2b8b115&"
        className="aspect-[0.96] object-contain object-center w-6 fill-black fill-opacity-0 overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
    </div>
  );
}
