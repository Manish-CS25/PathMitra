import React from 'react';
import { Hero } from './Hero';
import { Mission } from './Mission';
import { Process } from './Process';
import Navbar from '../Navbar';
import Footer from '../Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow"> {/* Removed padding-top since it's handled in Hero */}
        <Hero />
        <Mission />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default About;