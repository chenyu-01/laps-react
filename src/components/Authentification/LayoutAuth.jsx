import React from 'react';
import Layout from '../Layout';
import universityImage from './university.png';
export default function LayoutAuth({ children }) {
  return (
    <div>
      <Layout>
        <img
          loading="lazy"
          srcSet={universityImage}
          className="object-contain object-center md:w-1/2 overflow-hidden hidden md:flex"
        />
        <div className="justify-center self-center flex md:w-1/2 flex-col items-center my-auto">
          {children}
        </div>
      </Layout>
    </div>
  );
}
