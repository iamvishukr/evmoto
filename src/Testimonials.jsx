import React from 'react';

const Testimonials = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why students can't stop talking about us!</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"They have simplified my process of procuring a loan"</p>
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=50&width=50" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">1 Mar, 2023</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;