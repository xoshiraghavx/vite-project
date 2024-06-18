import Image from 'next/image';
import React from 'react';
const items = [
  'Sunflower Oil',
  'Fenugreek Seed',
  'Hibiscuc Leaves',
  'Coconut Oil',
  'Nigella Seed',
  'Curry Leaves',
  'Mustard Oil',
  'Aloe Vera',
  'Neem Leaves',
  'Til Oil',
  'Vitamin E',
  'Shikakai',
  'Tulsi',
  'Amla',
  'Onion',
];

const HomeIngredients = () => {
  return (
    <section className='max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto container px-4 lg:py-[10vh] flex flex-col-reverse md:flex-row gap-4 md:gap-8 lg:gap-12'>
      <div className='w-full md:w-2/3'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#333333]'>
          Ingredients That Nourish
        </h2>
        <p className='text-lg md:text-xl text-[#666666] mt-4'>
          Our herbal hair oil combines carefully selected Ayurvedic botanicals
          renowned for their hair-nourishing properties. This potent blend
          delivers vital nutrients to promote healthy hair growth and strengthen
          strands from root to tip.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 mt-4'>
          {items.map((item, index) => (
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
        src='/image2.jpeg'
        className='w-full md:w-1/3 aspect-square rounded-xl mx-auto md:mr-0 object-cover md:sticky top-0'
        alt=''
      />
    </section>
  );
};

export default HomeIngredients;
