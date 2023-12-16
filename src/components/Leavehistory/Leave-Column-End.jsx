import React from 'react';

export default function LeaveColumnEnd() {
    return (
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
            <div className="text-neutral-800 text-opacity-90 text-center text-sm tracking-normal whitespace-nowrap">
                Feb 29, 2033
            </div>
            <div className="text-neutral-800 text-opacity-90 text-center text-sm tracking-normal whitespace-nowrap mt-10">
                March 14, 2033
            </div>
            <div className="text-neutral-800 text-opacity-90 text-center text-sm tracking-normal whitespace-nowrap mt-10">
                March 19, 2033
            </div>
        </div>
    );
}