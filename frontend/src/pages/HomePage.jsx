import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Education } from '../sections/Education';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Achievements } from '../sections/Achievements';
import { Contact } from '../sections/Contact';
import { ScrollToTopButton } from '../sections/ScrollToTopButton';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default HomePage;

