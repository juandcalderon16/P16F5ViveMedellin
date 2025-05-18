"use client";
import React, { useState } from 'react';
import Icon from '@/app/components/Icon/page';
import NavTitle from '@/app/components/Atoms/NavTitle/page';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      
      <button onClick={() => setIsOpen(!isOpen)}>
        <Icon icon="material-symbols-light:10k" />
      </button>
      
      {isOpen && (
        <div className='bg-white absolute shadow-md w-5/6 inset-x-10 top-20 rounded-md'>
          <NavTitle title='home' link='/' />
          <NavTitle title='about' link='/' />
          <NavTitle title='contact' link='/' />
          <NavTitle title='services' link='/' />
          <NavTitle title='products' link='/' />
          <NavTitle title='blog' link='/' />
        </div>
      )}
    </div>
  );
};

export default Page;