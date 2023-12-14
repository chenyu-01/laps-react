import * as React from 'react';

function LeavingReqComponent(props) {
  return (
    <form className="bg-white flex w-full justify-between gap-5 pl-7 pr-5 py-4 rounded-2xl items-start max-md:max-w-full max-md:flex-wrap max-md:pl-5">
      <header className="flex justify-between gap-5 items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9ce2e81463a0b793f1670e8134d2c8545473b4eb08d75db9b9be891832b72f1?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
          className="aspect-[1.03] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
          alt="Logo"
        />
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-black text-base font-medium">Reason</div>
          <div className="flex items-center justify-between gap-5 mt-3">
            <div className="text-neutral-400 text-xs font-medium my-auto">
              Type
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c4dcab370ef6664074553645fd3a9a9d3ab4b5df1f36a45df449a2b94ef1b1?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
                className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                alt="Icon"
              />
              <div className="text-black text-xs font-medium self-center grow whitespace-nowrap my-auto">
                Name
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-stretch justify-between gap-5">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-start justify-between gap-5 max-md:justify-center">
            <div className="text-neutral-400 text-sm font-medium self-start">
              Duration
            </div>
            <div className="text-neutral-400 text-sm font-medium self-start">
              Start
            </div>
            <div className="text-neutral-400 text-sm font-medium self-start">
              Status
            </div>
            <div className="text-neutral-400 text-sm font-medium self-stretch">
              Type
            </div>
          </div>
          <div className="flex w-full justify-between gap-5 mt-3.5 items-start">
            <div className="text-black text-base font-bold">2D 5h</div>
            <div className="flex justify-between gap-5 items-start max-md:justify-center">
              <div className="text-slate-800 text-xs font-medium">12 Feb</div>
              <div className="text-cyan-700 text-xs font-medium">Approved</div>
              <div className="text-slate-800 text-xs font-medium">Type2</div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bea13afffb89d575b0f38841e2b4f59a806870176b9dc93a0a6a301587957b39?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
          className="aspect-[0.3] object-contain object-center w-[3px] fill-stone-300 overflow-hidden self-center shrink-0 max-w-full my-auto"
          alt="Divider"
        />
      </div>
    </form>
  );
}
