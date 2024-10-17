import React from 'react';
import { FaFacebookF, FaRedditAlien, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const socialIcons = [
  { Icon: FaFacebookF, color: 'bg-blue-600' },
  { Icon: FaRedditAlien, color: 'bg-red-500' },
  { Icon: FaTwitter, color: 'bg-blue-400' },
  { Icon: FaInstagram, color: 'bg-pink-600' },
  { Icon: FaLinkedinIn, color: 'bg-blue-700' },
  { Icon: FaYoutube, color: 'bg-red-600' },
];

const footerLinks = [
  {
    title: 'By subject',
    links: ['Arts Scholarships', 'Architecture Scholarships', 'Sports Scholarships', 'Engineering Scholarships', 'Law Scholarships', 'MBA scholarships', 'Undergraduate Scholarships', 'Masters Scholarships', 'PhD Scholarships', 'Post-Doc Fellowships', 'Scholarships for women', 'Postgraduate scholarships'],
  },
  {
    title: 'By nationality',
    links: ['International Scholarships', 'Scholarships for India', 'Scholarships for Pakistani', 'Scholarships for China', 'Scholarships for UK', 'Scholarships for Malaysia', 'Scholarships for Canada', 'Scholarships for School', 'Scholarships for African', 'Fulbright Scholarships', 'Commonwealth Scholarship', 'Inspire fellowship'],
  },
  {
    title: 'By country of interest',
    links: ['US Scholarships', 'UK Scholarships', 'Canada Scholarships', 'India Scholarships', 'China Scholarships', 'Germany Scholarship', 'Japan Scholarships', 'Australia Scholarships', 'New Zealand Scholarships', 'Europe Scholarships', 'Singapore Scholarship', 'Malaysia Scholarships'],
  },
  {
    title: 'Education Loans',
    links: ['Education Loan', 'SBI Education Loan', 'Bank of Baroda Education Loan', 'Avanse Education Loan', 'Canara Education Loan', 'Incred Education Loan', 'Punjab National Bank Education Loan', 'Auxilo Bank Education Loan', 'ICICI Bank Education Loan', 'VidyaLoans'],
  },
];

const companyLinks = [
  { title: "We're hiring!", href: '#' },
  { title: 'About us', href: '#' },
  { title: 'Blog', href: '#' },
  { title: 'Testimonials', href: '#' },
  { title: 'FAQs', href: '#' },
  { title: 'Contact us', href: '#' },
];

const legalLinks = [
  { title: 'Terms & Conditions', href: '#' },
  { title: 'Privacy Policy', href: '#' },
  { title: 'Media coverage', href: '#' },
  { title: 'Sitemap', href: '#' },
];

const partnerLinks = [
  { title: 'Partner Login', href: '#' },
  { title: 'International Campus Delegate Program', href: '#' },
  { title: 'Consultancy Preferred Partners', href: '#' },
  { title: 'Report a error', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <span className="mr-4">Connect with us</span>
          <div className="flex space-x-2">
            {socialIcons.map(({ Icon, color }, index) => (
              <a key={index} href="#" className={`${color} p-2 rounded-full`}>
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {partnerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">WeMakeScholars</h3>
            <p className="text-sm">
              WeMakeScholars is a Not-just-for-Profit organization and India's Largest Education Finance Platform assisting students with scholarships and education loans to study abroad and study in India.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-sm">
          <p>
            All Content, Logo, Company names and any other subject of intellectual property are registered trademarks of their respective owners. Display of such intellectual property on WeMakeScholars.com does not imply any partnership, affiliation with or endorsement by them.
          </p>
        </div>
      </div>
    </footer>
  );
}