import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Testimonials from './Testimonials';
import Ingredient from './Ingredient';
import About from './About';
import { Footer } from './Footer';
import Image from 'next/image';
import Contact from './Contact';

export function Component() {
  return (
    <>
      <section className='w-full py-12 md:py-20 lg:py-24'>
        <About />
      </section>
      <section className='w-full bg-gray-50 py-12 md:py-20 lg:py-24'>
        <Ingredient />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className='w-full bg-gray-50 py-12 md:py-20 lg:py-24'>
        <Contact/>
        </section>
        <Footer />
    </>
  );
}
