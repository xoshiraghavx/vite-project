import Image from 'next/image';
import React from 'react';
const benefits = [
  'Promotes hair growth and thickness',
  'Nourishes and conditions the scalp',
  'Reduces hair fall and breakage',
];
const HomeAbout = () => {
  return (
    <section className='max-w-6xl mx-auto container px-4 py-[10vh] grid md:grid-cols-2 gap-4 md:gap-8'>
      <div className='col-span-1'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#333333]'>
          Nourish Your Hair Naturally
        </h2>
        <p className='text-lg md:text-xl text-[#666666] mt-4'>
          At Herbal Locks, we are dedicated to promoting healthy, lustrous hair
          through the ancient wisdom of Ayurveda. We believe in using nature's
          bounty responsibly. That's why our hair oil is made without harsh
          chemicals.
        </p>
        <div className='grid md:grid-cols-2 mt-4'>
          {benefits.map((item, index) => (
            <div
              key={index}
              className='flex items-center space-x-3 transition-colors duration-300 hover:text-[#5C8D4E]'
            >
              <Image
                src='/logo.svg'
                alt='leaf'
                width={15}
                height={15}
                className='h-8 w-8 text-[#5C8D4E] img'
              />
              <span className='text-[#666666]'>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <img
        src='/image1.jpeg'
        className='aspect-square rounded-xl w-[90%] md:w-[80%] mx-auto md:mr-0 object-cover md:sticky top-0 col-span-1'
        alt=''
      />
    </section>
  );
};
export default HomeAbout;
