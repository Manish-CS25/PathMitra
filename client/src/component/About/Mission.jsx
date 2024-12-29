import React from 'react';

export function Mission() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At PathMitra, we believe everyone deserves personalized guidance to reach their full potential. Our mission is to bridge the gap between ambition and achievement through one-to-one mentorship.
            </p>
            <div className="space-y-4">
              {[
                "Personalized career roadmaps",
                "Industry-expert mentorship",
                "Skill development guidance",
                "Regular progress tracking"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Team meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}