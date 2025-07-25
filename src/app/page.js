'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Certifications />
      <Projects />
      <Footer />
    </>
  );
}
