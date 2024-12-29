import React from 'react'
// import list from "../assets/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Slider from "react-slick";

function FreeMentor() {
  const [Mentor , setMentor] = useState([])
  useEffect(() => {
    const getMentor = async () => { 
      try {
        const res = await axios.get("http://localhost:3003/mentors");
        // console.log(res.data);
        setMentor(res.data.filter((item) => item.fees === 0));
      } catch (error) { 
        console.log(error);
      } 
    }
    getMentor();
  } , []) 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <h1 className='font-seminold text-xl pb-2 ml-3'>Free Mentorship</h1>
      
      <p className='pb-2 ml-3'>"Seek Free Guidance now and gain the keys to transforming your life! Empower yourself with guided path and take the next step forward."</p>

      
      <div>      <Slider {...settings}>
        {Mentor.map((item) => (
          <Cards item={item} key={item.id}/>
        ))}
      </Slider></div>


    </div>


    </>

  )
}

export default FreeMentor
