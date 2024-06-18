import HomeAbout from '@/components/elements/Home/HomeAbout';
import HomeContact from '@/components/elements/Home/HomeContact';
import HomeFaq from '@/components/elements/Home/HomeFaq';
import HomeHero from '@/components/elements/Home/HomeHero';
import HomeIngredients from '@/components/elements/Home/HomeIngredients';
import HomeTestimonials from '@/components/elements/Home/HomeTestimonials';
import Footer from '@/components/elements/global/Footer';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeIngredients />
      <HomeTestimonials />
      <HomeContact />
      <HomeFaq />
      <Footer />
    </main>
  );
}
