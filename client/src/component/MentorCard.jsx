import React from 'react';
import { Star, Users, Award, Calendar, Clock, GraduationCap, Verified } from 'lucide-react';

const MentorImage = ({ image, name, title }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
    <img 
      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
      src={image}
      alt={`${name}'s profile`}
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <div className="flex items-center space-x-2">
        <h2 className="text-white text-2xl font-bold">{name}</h2>
        <Verified className="w-5 h-5 text-blue-400" />
      </div>
      <p className="text-gray-200 text-sm mt-1 opacity-90">{title}</p>
    </div>
  </div>
);

const MentorStats = ({ rating, students }) => (
  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg dark:bg-slate-800/50">
    <div className="flex flex-col items-center justify-center p-2 border-r border-gray-200 dark:border-gray-700">
      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mb-1" />
      <span className="font-bold text-lg">{rating}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">Rating</span>
    </div>
    <div className="flex flex-col items-center justify-center p-2 border-r border-gray-200 dark:border-gray-700">
      <Users className="w-5 h-5 text-blue-500 mb-1" />
      <span className="font-bold text-lg">{students}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">Students</span>
    </div>
    <div className="flex flex-col items-center justify-center p-2">
      <Award className="w-5 h-5 text-purple-500 mb-1" />
      <span className="font-bold text-lg">Top</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">Mentor</span>
    </div>
  </div>
);

const MentorDetails = ({ expertise, experience }) => (
  <div className="space-y-4">
    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg dark:bg-blue-900/20">
      <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
      <div>
        <h3 className="font-semibold text-blue-900 dark:text-blue-300">Expertise</h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">{expertise}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-3">
      <div className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg dark:bg-purple-900/20">
        <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <div>
          <span className="block text-sm font-medium text-purple-900 dark:text-purple-300">Experience</span>
          <span className="text-sm text-purple-800 dark:text-purple-200">{experience}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg dark:bg-green-900/20">
        <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
        <div>
          <span className="block text-sm font-medium text-green-900 dark:text-green-300">Response</span>
          <span className="text-sm text-green-800 dark:text-green-200">&lt; 2 hours</span>
        </div>
      </div>
    </div>
  </div>
);

export const MentorCard = ({ mentor }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:bg-slate-900 dark:text-white dark:border dark:border-slate-700">
        <MentorImage 
          image={mentor.image} 
          name={mentor.name} 
          title={mentor.title} 
        />
        
        <div className="p-6 space-y-6">
          <MentorStats 
            rating={mentor.rating} 
            students={mentor.students} 
          />
          
          <MentorDetails 
            expertise={mentor.expertise} 
            experience={mentor.experience} 
          />

          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30">
              <Calendar className="w-5 h-5" />
              <span>Schedule Session</span>
            </button>
            <button className="w-full bg-gray-50 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};