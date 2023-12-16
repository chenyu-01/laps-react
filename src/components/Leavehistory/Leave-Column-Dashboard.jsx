import {React} from "react";

export default function leaveColumnDashboard(){
    return(
        <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
            <div className="shadow-2xl bg-white flex w-full grow flex-col justify-center mx-auto pl-9 pr-16 py-12 items-start max-md:px-5">
                <div className="flex items-stretch gap-3 mt-14 mb-[472px] max-md:my-10">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a8ad1e84b7786370863bd4fd8dbb35930e092231a4f0fddb4e57cca5ea355de?apiKey=61d501c9e4204f7ab9004ebff2b8b115&"
                        className="aspect-[1.11] object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
                    />
                </div>
            </div>
        </div>
    );
}