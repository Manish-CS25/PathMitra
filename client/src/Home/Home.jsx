import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Footer from '../component/Footer';

import FreeMentor from '../component/FreeMentors';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeMentor />
      <Footer />
    </>
  );
}

export default Home;