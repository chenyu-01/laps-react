import React from 'react';

export default function LeaveTest() {
    return (
        <div className="justify-between items-stretch border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] flex gap-5 pr-16 border-b-[0.889px] border-solid max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <div className="flex items-stretch justify-between gap-0 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">

                <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal whitespace-nowrap justify-center items-center border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] grow px-16 py-5 border-b-[0.889px] border-solid max-md:px-5">
                    OrderID
                </div>
                <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal whitespace-nowrap justify-center items-center border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] grow px-16 py-5 border-b-[0.889px] border-solid max-md:px-5">
                    Start
                </div>
                <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal whitespace-nowrap justify-center items-stretch border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] grow px-16 py-5 border-b-[0.889px] border-solid max-md:px-5">
                    End
                </div>
                <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal whitespace-nowrap justify-center items-stretch border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] grow px-16 py-5 border-b-[0.889px] border-solid max-md:px-5">
                    Reason
                </div>
                <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal whitespace-nowrap justify-center items-stretch border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] grow px-16 py-5 border-b-[0.889px] border-solid max-md:px-5">
                    Operator
                </div>
                <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal whitespace-nowrap justify-center items-stretch border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] grow px-16 py-5 border-b-[0.889px] border-solid max-md:px-5">
                    Status
                </div>
            </div>

        </div>
    );
}