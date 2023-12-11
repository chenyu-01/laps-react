import React from 'react';
import Layout from './Layout';
import universityImage from './university.png';
export default function LayoutAuth({ children }) {
  return (
    <div className="flex justify-between">
      <Layout>
        <img
          loading="lazy"
          srcSet={universityImage}
          className="object-contain object-center md:w-1/2 overflow-hidden hidden md:flex"
        />
        <div className="justify-center flex flex-col items-center my-auto">
          <div className="mr-4">{children}</div>
        </div>
      </Layout>
    </div>
  );
}
