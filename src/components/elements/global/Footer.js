import Image from 'next/image';

import { NavigateOutside } from '../utils/Links';

import { FaInstagram, FaFacebook } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto'>
      <div className='text-center'>
        <div className='flex flex-col justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='leaf'
            width={64}
            height={64}
            className='text-[#5C8D4E] img'
          />
        </div>
        <div className='mt-3'>
          <p className='text-gray-500 dark:text-neutral-500'>
            &copy; <b>Herbal Locks</b> 2024 All rights reserved.
          </p>
        </div>
        <div className='flex justify-center items-center gap-4 text-xl p-4'>
          <NavigateOutside
            href='https://www.instagram.com/herbal_locks'
            icon={<FaInstagram className='text-rose-600' />}
          />
          <NavigateOutside
            href='mailto:locksherbal@gmail.com'
            icon={<MdOutlineMail className='text-emerald-600' />}
          />
          <NavigateOutside
            href='https://www.facebook.com/VedicHerbalLocks/'
            icon={<FaFacebook className='text-sky-600' />}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;