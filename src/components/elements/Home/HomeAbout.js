import Image from 'next/image';
import React from 'react';
const benefits = [
  'Promotes hair growth and thickness',
  'Nourishes and conditions the scalp',
  'Reduces hair fall and breakage',
];
const HomeAbout = () => {
  return (
    <section className='max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto container px-4 pb-[10vh] lg:pt-[15vh] pt-[8vh] flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12'>
      <img
        src='/image1.jpeg'
        className='w-full md:w-1/3 aspect-square rounded-xl mx-auto md:ml-0 object-cover md:sticky top-0'
        alt=''
      />
      <div className='w-full md:w-2/3'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#333333]'>
          Nourish Your Hair Naturally
        </h2>
        <p className='text-lg md:text-xl text-[#666666] mt-4'>
          At Herbal Locks, we are dedicated to promoting healthy, lustrous hair
          through the ancient wisdom of Ayurveda. We believe in using nature&apos;s
          bounty responsibly. That&apos;s why our hair oil is made without harsh
          chemicals.
        </p>
        <div className='grid mt-4'>
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
    </section>
  );
};
export default HomeAbout;
