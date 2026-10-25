'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
     FiInstagram,
     FiFacebook,
     FiTwitter,
     FiYoutube,
     FiArrowRight,
     FiMail
} from 'react-icons/fi';
import Image from 'next/image';

export default function Footer() {
     const [email, setEmail] = useState('');

     const handleNewsletterSubmit = (e) => {
          e.preventDefault();
          if (email) {
               alert('Thank you for joining the Ovrixa Squad!');
               setEmail('');
          }
     };

     return (
          <footer className="bg-[#111111] text-white border-t border-neutral-800">
               <div className="max-w-7xl mx-auto px-0 sm:px-6 pt-16 pb-12">

                    {/* Top Grid: Brand Info, Links & Newsletter */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

                         {/* Column 1: Brand Info (2 cols wide on large screens) */}
                         <div className="lg:col-span-2 space-y-4">
                              <Link href="/">
                                   <Image src="/logo-01.png" alt="Ovrixa Logo" width={140} height={50} priority />
                              </Link>
                              <p className="text-neutral-400 text-sm max-w-sm leading-relaxed pt-3">
                                   Engineered for athletes who refuse to settle. Dominating the cricket crease, football turf, and every arena in between with high-performance sports gear.
                              </p>

                              {/* Social Links */}
                              <div className="flex space-x-4 pt-2">
                                   <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors">
                                        <FiInstagram />
                                   </a>
                                   <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors">
                                        <FiFacebook />
                                   </a>
                                   <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors">
                                        <FiTwitter />
                                   </a>
                                   <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors">
                                        <FiYoutube />
                                   </a>
                              </div>
                         </div>

                         {/* Column 2: Quick Links */}
                         <div className="space-y-3">
                              <h3 className="text-[#CCFF00] font-bold uppercase text-xs tracking-wider">
                                   Shop Categories
                              </h3>
                              <ul className="space-y-2 text-sm text-neutral-400">
                                   <li><Link href="/football" className="hover:text-white transition-colors">Football Gear</Link></li>
                                   <li><Link href="/cricket" className="hover:text-white transition-colors">Cricket Equipment</Link></li>
                                   <li><Link href="/training" className="hover:text-white transition-colors">Training & Activewear</Link></li>
                                   <li><Link href="/footwear" className="hover:text-white transition-colors">Turf & Cleats</Link></li>
                                   <li><Link href="/collections" className="hover:text-white transition-colors">New Releases</Link></li>
                              </ul>
                         </div>

                         {/* Column 3: Customer Support */}
                         <div className="space-y-3">
                              <h3 className="text-[#CCFF00] font-bold uppercase text-xs tracking-wider">
                                   Customer Care
                              </h3>
                              <ul className="space-y-2 text-sm text-neutral-400">
                                   <li><Link href="/track-order" className="hover:text-white transition-colors">Track Your Order</Link></li>
                                   <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                                   <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
                                   <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
                                   <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                              </ul>
                         </div>

                         {/* Column 4: Newsletter Sign-up */}
                         <div className="space-y-3">
                              <h3 className="text-[#CCFF00] font-bold uppercase text-xs tracking-wider">
                                   Join The Squad
                              </h3>
                              <p className="text-xs text-neutral-400">
                                   Subscribe to get exclusive product drops, training tips, and 10% off your first purchase.
                              </p>

                              {/* Newsletter Form */}
                              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                                   <div className="relative">
                                        <input
                                             type="email"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             placeholder="Enter your email"
                                             required
                                             className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm px-4 py-2.5 rounded-none focus:outline-none focus:border-[#CCFF00] transition-colors pr-10"
                                        />
                                        <button
                                             type="submit"
                                             aria-label="Submit Newsletter"
                                             className="absolute right-0 top-0 bottom-0 px-3 bg-[#CCFF00] text-[#111111] hover:bg-white transition-colors flex items-center justify-center font-bold"
                                        >
                                             <FiArrowRight />
                                        </button>
                                   </div>
                              </form>
                         </div>

                    </div>

                    {/* Divider */}
                    <hr className="border-neutral-800 my-8" />

                    {/* Bottom Bar: Copyright & Policies */}
                    <div className="flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 md:space-y-0">
                         <p>&copy; 2026 OVRIXA Sports. All rights reserved.</p>

                         <div className="flex space-x-6">
                              <Link href="/privacy-policy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
                              <Link href="/terms-of-service" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
                              <Link href="/refund-policy" className="hover:text-neutral-400 transition-colors">Refund Policy</Link>
                         </div>
                    </div>

               </div>
          </footer>
     );
}