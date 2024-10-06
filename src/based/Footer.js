// Footer.jsx
import React from 'react';
import { Check } from 'lucide-react';

function Footer() {
   const servicesWithCheck = [
      'Haircuts in both modern and classic styles',
      'Beard trimming, shaving, and facial care',
      'Consultation on hairstyles that suit individual face shapes and personal style',
      'Hair care services such as washing, perming, dyeing, and styling',
   ];

   const socialLinks = [
      { name: 'Facebook', href: 'https://www.facebook.com' },
      { name: 'Instagram', href: 'https://www.instagram.com' },
      { name: 'Twitter', href: 'https://www.twitter.com' },
   ];

   return (
      <footer className="bg-black text-white py-10">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between flex-wrap">
               {/* Information Column */}
               <div className="flex-1 min-w-[180px] px-4 mb-8 md:mb-0">
                  <h3 className="text-xl mb-5 font-bold">Information</h3>
                  <p className="text-sm leading-relaxed mb-5">
                     Hair Harmony is typically professional and stylish, offering a comfortable environment where
                     clients can relax and enhance their appearance.
                  </p>
               </div>

               {/* Our Services Column */}
               <div className="flex-1 min-w-[180px] px-4 mb-8 md:mb-0">
                  <h3 className="text-xl mb-5 font-bold">Our Services</h3>
                  <ul className="list-none p-0">
                     {servicesWithCheck.map((service, index) => (
                        <li key={index} className="text-sm leading-relaxed mb-2.5">
                           <a
                              href="#"
                              className="flex items-center gap-2 no-underline text-white transition-colors duration-300 ease-in-out hover:text-[#c1b6b6]"
                           >
                              <Check
                                 size={16}
                                 strokeWidth={2}
                                 className="stroke-red flex-shrink-0"
                                 aria-hidden="true"
                              />
                              {service}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Schedule Column */}
               <div className="flex-1 min-w-[180px] px-4 mb-8 md:mb-0">
                  <h3 className="text-xl mb-5 font-bold">Schedule</h3>
                  <ul className="list-none p-0">
                     <li className="text-sm leading-relaxed mb-2.5">Monday - Sunday</li>
                     <li className="text-sm leading-relaxed">08:00 am - 10:00 pm</li>
                  </ul>
               </div>

               {/* Follow Us Column */}
               <div className="flex-1 min-w-[180px] px-4 mb-8 md:mb-0">
                  <h3 className="text-xl mb-5 font-bold font-bold">Follow Us</h3>
                  <ul className="list-none p-0">
                     {socialLinks.map((link, index) => (
                        <li key={index} className="text-sm leading-relaxed mb-2.5">
                           <a
                              href={link.href}
                              className="no-underline text-white transition-colors duration-300 ease-in-out hover:text-[#c1b6b6]"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact Us Column */}
               <div className="flex-1 min-w-[180px] px-4">
                  <h3 className="text-xl mb-5 font-bold">Contact Us</h3>
                  <p className="text-sm leading-relaxed mb-5 flex items-center">
                     <Check size={16} strokeWidth={2} className="stroke-red mr-2 flex-shrink-0" aria-hidden="true" />
                     FPT University, Thu Duc City, HCM, VN
                  </p>
                  <p className="text-sm leading-relaxed mb-5 flex items-center">
                     <Check size={16} strokeWidth={2} className="stroke-red mr-2 flex-shrink-0" aria-hidden="true" />
                     hairhamony@gmail.com
                  </p>
                  <p className="text-sm leading-relaxed flex items-center">
                     <Check size={16} strokeWidth={2} className="stroke-red mr-2 flex-shrink-0" aria-hidden="true" />
                     (+84) 1234 5678
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
