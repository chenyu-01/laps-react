import React from 'react';

export default function LeavePerPage() {
  return (
    <div className="flex items-stretch justify-between gap-1">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaf283f-5a39-4c2c-ae92-8081188e1fd6?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eaf283f-5a39-4c2c-ae92-8081188e1fd6?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eaf283f-5a39-4c2c-ae92-8081188e1fd6?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eaf283f-5a39-4c2c-ae92-8081188e1fd6?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eaf283f-5a39-4c2c-ae92-8081188e1fd6?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eaf283f-5a39-4c2c-ae92-8081188e1fd6?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eaf283f-5a39-4c2c-ae92-8081188e1fd6?apiKey=61d501c9e4204f7ab9004ebff2b8b115&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eaf283f-5a39-4c2c-ae92-8081188e1fd6?apiKey=61d501c9e4204f7ab9004ebff2b8b115&"
        className="aspect-[2.05] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
      />
      <div className="text-zinc-800 text-opacity-80 text-sm font-medium grow whitespace-nowrap mt-2 self-start">
        {' '}
        per page
      </div>
    </div>
  );
}
