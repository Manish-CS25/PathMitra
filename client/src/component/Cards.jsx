import React from 'react';
import { Star, Calendar, Users, MessageCircle, Verified } from 'lucide-react';

function Card({ item }) {
  return (
    <div className="mx-3 my-3">
      <div className="w-full bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300 dark:bg-slate-900 dark:text-white dark:border dark:border-slate-800">
        {/* Image Section */}
        <div className="relative">
          <img 
            className="w-full h-56 object-cover rounded-t-xl"
            src={item.cover}
            alt={item.name}
          />
          {/* Overlay and Badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
              Available Now
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              <Verified className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-sm text-gray-200">{item.post} , {item.category}</p>

          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4">
          {/* Stats Row */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{item.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-gray-500" />
              <span>{item.students} 10 students</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4 text-gray-500" />
              <span>1h response</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1">
            {item.expertise?.split(', ').map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-lg dark:bg-blue-900/30 dark:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Price and Booking */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="text-lg font-bold">{item.fees} ₹</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">/hour</span>
            </div>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;