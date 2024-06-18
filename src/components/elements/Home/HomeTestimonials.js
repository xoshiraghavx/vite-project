import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
const testimonials = [
  {
    quote:
      "I've struggled with thinning hair for years, but this oil has been a game-changer! After just a few months of regular use, I've noticed significantly less shedding and my hairline is starting to fill in again. The ingredients seem to be really nourishing my scalp. Highly recommend!",
    name: 'Jhankar Sethi',
    // title: "A Tale of Two Cities",
  },
  {
    quote:
      "As someone with naturally dry, frizzy hair, I'm always on the hunt for good hair oils - and this one is a keeper! It makes my hair so soft, shiny and manageable without weighing it down. I love that it's made with pure, high-quality ayurvedic herbs too. A little goes a long way.",
    name: 'Ananya Pandey',
    // title: "Hamlet",
  },
  {
    quote:
      "I was a bit skeptical of hair oils at first, but the texture of this one won me over from the first use. It has such a thick herbal oil. Beyond that, it's worked wonders on my split ends and dry lengths. My hair feels stronger and healthier overall.",
    name: 'Saavi Chaudhary',
    // title: "A Dream Within a Dream",
  },
  {
    quote:
      "My sister gifted me this hair oil and I'm so glad she did! At my age, volume and growth are an issue, but I've definitely seen improvements after a couple months with this ayurvedic formula. It's become an essential part of my routine.",
    name: 'Kanika Kothari',
    // title: "Pride and Prejudice",
  },
  {
    quote:
      'I get tons of compliments on how nice and glossy my hair looks ever since I started using this oil! It seems to be working really well for me. Plus, the packaging looks so nice sitting on my bathroom counter. Great product all around.',
    name: 'Sharddha Mishra',
    // title: "Moby-Dick",
  },
];
const HomeTestimonials = () => {
  return (
    <>
      <div className='h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#333333] my-10'>
          What Our Customers Say
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </>
  );
};

export default HomeTestimonials;
