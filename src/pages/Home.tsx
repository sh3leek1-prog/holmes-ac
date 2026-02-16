import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Courses } from '@/components/Courses';
import { Teachers } from '@/components/Teachers';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Features />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
};
