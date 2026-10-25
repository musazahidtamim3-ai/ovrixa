'use client';

import Link from 'next/link';
import { FiArrowRight, FiZap } from 'react-icons/fi';

export default function PromoBanner() {
     return (
          <section className="bg-[#111111] max-w-7xl mx-auto py-8 sm:py-10 border-b border-neutral-800 relative overflow-hidden">

               {/* Subtle Background Glow Element */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#CCFF00]/10 rounded-full blur-[100px] pointer-events-none" />

               <div className="max-w-7xl mx-auto relative z-10">
                    <div
                         className="relative overflow-hidden bg-neutral-900 shadow-2xl group rounded-sm"
                         style={{
                              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.75)), url('https://media.istockphoto.com/id/1293105095/photo/soccer-field-with-illumination-green-grass-and-cloudy-sky-background-for-design-or-advertising.webp?a=1&b=1&s=612x612&w=0&k=20&c=F9M1uKE-x18OVSnaz7MxquE-XCe6RfK4YjrnvXzInnU=')`,
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                         }}
                    >
                         {/* Dynamic Grid Accent Overlay */}
                         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                         {/* Centered Compact Content Container */}
                         <div className="relative z-10 py-8 px-6 sm:py-10 sm:px-12 flex flex-col items-center text-center justify-center max-w-2xl mx-auto space-y-4">

                              {/* Flash Sale Tag */}
                              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/15 backdrop-blur-md px-3.5 py-1 rounded-full shadow-md">
                                   <FiZap className="text-[#CCFF00] text-xs animate-pulse" />
                                   <span className="text-[#CCFF00] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                                        LIMITED TIME FLASH SALE
                                   </span>
                              </div>

                              {/* Compact Banner Headline */}
                              <h2 className="text-2xl sm:text-4xl font-black italic uppercase text-white tracking-wider leading-tight">
                                   UNLEASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-[#E2FF66] to-white">30% OFF</span> YOUR NEXT GEAR
                              </h2>

                              {/* Subtitle / Description */}
                              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
                                   Engineered for peak performance and extreme durability. Gear up with Ovrixa pro-grade apparel and turf footwear today.
                              </p>

                              {/* Promo Code Badge */}
                              <div className="inline-flex items-center space-x-2 bg-black/60 px-3 py-1 border border-white/15 rounded-md backdrop-blur-sm">
                                   <span className="text-neutral-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                                        USE CODE:
                                   </span>
                                   <span className="bg-[#CCFF00]/10 border border-[#CCFF00]/40 text-[#CCFF00] font-mono text-xs font-black px-2.5 py-0.5 tracking-widest rounded-sm">
                                        OVRI30
                                   </span>
                              </div>

                              {/* Centered CTA Section */}
                              <div className="pt-1 flex flex-col items-center justify-center space-y-2 w-full sm:w-auto">
                                   <Link
                                        href="/sale"
                                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#CCFF00] text-[#111111] px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                   >
                                        <span>CLAIM DISCOUNT NOW</span>
                                        <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                                   </Link>

                                   {/* Terms Link */}
                                   <span className="text-neutral-400 text-[10px] font-medium tracking-wide">
                                        *Valid on selected items. Ends in 48 hours.
                                   </span>
                              </div>

                         </div>
                    </div>
               </div>
          </section>
     );
}