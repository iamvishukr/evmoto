import React from 'react';

const testimonials = [
  {
    platform: 'quora',
    icon: 'Q',
    color: 'text-red-500 bg-red-100',
    items: [
      { name: 'Mylavavapu Phanichandra', date: '11 Mar, 2022', quote: 'They have simplified my process of procuring a loan' },
      { name: 'Diana Elizabeth Roy', date: '05 Jul, 2021', quote: 'This organisation makes this process seamless for FREE.' },
      { name: 'Mounika Bhargavi', date: '05 Jul, 2021', quote: 'They have made the process of loan more smooth' },
      { name: 'Bhargavi', date: '05 Jul, 2021', quote: 'The process of loan more smooth and provided good suggestions.' },
    ]
  },
  {
    platform: 'facebook',
    icon: 'F',
    color: 'text-blue-600 bg-blue-100',
    items: [
      { name: 'Vaishali Tiwari', date: '09 Nov, 2020', quote: 'Tried on my own and was fed up after multiple bank visits, WMS helped' },
      { name: 'Karthik Bhukya', date: '28 Aug, 2021', quote: 'They gave me all the necessary detailed info regarding different banks' },
      { name: 'Prateek Srivastav', date: '20 Dec, 2021', quote: 'Sincere appreciation to Wemakescholars for their hassle-free process' },
    ]
  },
  {
    platform: 'linkedin',
    icon: 'in',
    color: 'text-blue-700 bg-blue-100',
    items: [
      { name: 'Adithyan Jagannathan Panicker', date: '16 Oct, 2024', quote: 'helped me negotiate with the rate of interest and processing fee.' },
      { name: 'Raval Dhaval Sanjaybhai', date: '15 Oct, 2024', quote: 'Attention to detail ensured a smooth experience.' },
    ]
  },
  {
    platform: 'google',
    icon: 'G',
    color: 'text-red-600 bg-red-100',
    items: [
      { name: 'Kunal Das', date: '14 Oct, 2024', quote: 'Whole team works very hard and are always within a phone call reach' },
      { name: 'Krishna Mohan', date: '14 Oct, 2024', quote: 'Arun shaji helped me negotiate lower interest rate with bank' },
      { name: 'Syed Fasih Ur Rahaman', date: '09 Oct, 2024', quote: 'Streamline entire process by guiding me to their single online portal' },
    ]
  },
];

export default function Component() {
  const handleViewAll = () => {
    window.location.href = 'https://www.wemakescholars.com/testimonial';
  };
  return (
    <div className="container mx-auto px-4 mt-[-375px]">
      <h1 className="text-3xl font-bold text-center mb-8">Why students can't stop talking about us!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((platform) => (
          <div key={platform.platform} className="bg-white rounded-lg shadow-md p-6 relative">
            <div className={`absolute top-2 right-2 w-8 h-8 ${platform.color} rounded-full flex items-center justify-center font-bold`}>
              {platform.icon}
            </div>
            {platform.items.map((item, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                </div>
                <blockquote className="italic">{item.quote}</blockquote>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-8 text-center">
        <button
          onClick={handleViewAll}
          className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
        >
          View all
        </button>
      </div>
      </div>
    </div>
  );
}