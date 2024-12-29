import React from 'react';
import { Users, Target, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    // Increased margin-top to mt-20 (5rem) from mt-16 (4rem)
    <div className="relative bg-gradient-to-r from-pink-500 to-pink-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Personal Career Guide
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            PathMitra provides personalized one-to-one guidance to help you navigate your career journey with confidence.
          </p>
        </div>
       
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Users, 
              title: "Personal Mentorship", 
              desc: "Get matched with experienced mentors" 
            },
            { 
              icon: Target, 
              title: "Focused Guidance", 
              desc: "Tailored advice for your career goals" 
            },
            { 
              icon: BookOpen, 
              title: "Continuous Support", 
              desc: "Regular sessions and progress tracking" 
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:bg-white/5 transition-colors duration-300"
            >
              <div className="inline-flex p-4 bg-white/10 rounded-lg mb-4 items-center justify-center hover:bg-white/15 transition-colors duration-300">
                <item.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}