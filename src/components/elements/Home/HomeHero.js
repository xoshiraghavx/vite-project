'use client';
import { FollowerPointerCard } from '@/components/ui/following-pointer';
import { TextGenerateEffect } from '@/components/ui/test-generate-effect';
import React, { useEffect, useState } from 'react';

const HomeHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const Script = document.createElement('script');
    //id should be same as given to form element
    const Form = document.getElementById('payment-button');
    Script.setAttribute(
      'src',
      'https://checkout.razorpay.com/v1/payment-button.js'
    );
    Script.setAttribute('data-payment_button_id', 'pl_NpfzbsJbi8NTng');
    if (Form) {
      Form.appendChild(Script);
    }
  }, [mounted]);

  return (
    <div className='min-h-[100vh] w-full relative overflow-hidden'>
      {/* Backgroud Gradients */}

      <div className='absolute z-[0px] -translate-x-1/2 translate-y-2/3 w-full rounded-full aspect-square left-0 bottom-0 bg-gradient-to-tr from-emerald-200 to-transparent  blur-3xl'></div>
      <div className='absolute z-[2px] -translate-x-1/2 -translate-y-1/2 w-2/3 rounded-full aspect-square left-0 top-0 bg-gradient-to-br from-teal-200 to-transparent  blur-3xl'></div>
      <div className='absolute z-[4px] translate-x-1/2  -translate-y-1/2 w-full rounded-full aspect-square right-0 top-0 bg-gradient-to-bl from-yellow-200 to-transparent blur-3xl'></div>

      <div className='relative z-10 w-full pt-[20vh]'>
        <div className='flex flex-row'>
          <div className='w-3/5  pl-32 pt-[10vh]'>
            <FollowerPointerCard title={'Buy Now'}>
              <TextGenerateEffect
                words='#1 in Natural Hair Regrowth'
                className='text-base text-gray-600 font-normal mb-2'
              />
              <div className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800'>
                Herbal Locks Hair Oil
              </div>
              <TextGenerateEffect
                words='Delays premature greying Keeps the scalp healthy Guranteed hair growth Nourishes the roots Hair loss control'
                className='mt-6 text-lg md:text-2xl font-medium text-gray-700'
              />
              {/* <button className='mt-6 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-full flex items-center justify-center py-3 px-8 shadow-lg hover:scale-95 transition-transform'>
                            Buy it now
                        </button> */}
              {mounted ? (
                <form id='payment-button' className='mt-6'></form>
              ) : null}
            </FollowerPointerCard>
          </div>
          <div className='w-2/5'>
            <img
              src='/assets/ill1.png'
              className='w-full mr-0 ml-auto'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
