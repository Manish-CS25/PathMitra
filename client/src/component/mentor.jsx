import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import list from "../assets/list.json"
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Mentors() {

  const [mentor , setMentor] = useState([])
  useEffect(() => {
    const getMentors = async () => { 
      try {
        const res = await axios.get("http://localhost:3003/mentors");
        // console.log(res.data);
        setMentor(res.data);
      } catch (error) { 
        console.log(error);
      } 
    }
    getMentors();
  } , []) 
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            Welcome! Start Your Career Journey{" "}
            <span className="text-pink-500">Here!:)</span> Premium Mentorship
          </h1>
          <p className="mt-12">
          We’re delighted to have you explore our premium mentorship , where every session opens a new world of insights and growth. Whether you're seeking expert advice, personalized guidance, or hidden strategies, our curated mentorship programs have something for every aspirant. Dive into our resources, and let your next breakthrough find you. Happy learning!
          </p>
          <Link to="/">
            <button className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:text-black">
              Free Mentorship
            </button>
          </Link>
 
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
              mentor.map((item) => (
                <Cards item={item} key={item.id} />
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default Mentors;
