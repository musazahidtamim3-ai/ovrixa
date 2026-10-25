'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function CategorySection() {
     const categories = [
          {
               id: 1,
               name: "Men's Collection",
               subtitle: 'Pro-grade activewear & gear',
               itemCount: '180+ Items',
               image: 'https://images.unsplash.com/photo-1580906853305-5702e648164e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/men',
               gridSpan: 'md:col-span-2 lg:col-span-2',
          },
          {
               id: 2,
               name: "Women's Fit",
               subtitle: 'High-performance apparel',
               itemCount: '140+ Items',
               image: 'https://images.unsplash.com/photo-1704788006198-a4a230ce1235?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/women',
               gridSpan: 'md:col-span-1 lg:col-span-1',
          },
          {
               id: 3,
               name: 'Kids & Youth',
               subtitle: 'Built for future legends',
               itemCount: '95+ Items',
               image: 'https://images.unsplash.com/photo-1612723353484-df83bf7e1c6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/kids',
               gridSpan: 'md:col-span-1 lg:col-span-1',
          },
          {
               id: 4,
               name: 'Pro Equipment',
               subtitle: 'Football, Cricket & Training Gear',
               itemCount: '210+ Items',
               image: 'https://images.unsplash.com/photo-1602211844066-d3bb556e983b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/sale',
               gridSpan: 'md:col-span-2 lg:col-span-2',
          },
     ];

     return (
          <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
               <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                         <div>
                              <span className="text-[#CCFF00] text-xs font-bold uppercase tracking-[0.2em]">
                                   Explore Categories
                              </span>
                              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider mt-1">
                                   CHOOSE YOUR ARENA
                              </h2>
                         </div>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                         {categories.map((cat) => (
                              <Link
                                   key={cat.id}
                                   href={cat.link}
                                   className={`group relative h-72 sm:h-80 md:h-90 overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#CCFF00]/60 transition-all rounded-md duration-300 ${cat.gridSpan}`}
                              >
                                   {/* Background Image */}
                                   <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                                        style={{ backgroundImage: `url(${cat.image})` }}
                                   />

                                   {/* Gradient Overlay */}
                                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                                   {/* Card Content */}
                                   <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10">

                                        {/* Top Badge & Action Button */}
                                        <div className="flex justify-between items-start">
                                             <span className="bg-black/70 backdrop-blur-md text-[#CCFF00] border border-[#CCFF00]/30 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1">
                                                  {cat.itemCount}
                                             </span>

                                             <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black/80 border border-neutral-700 text-white flex items-center justify-center text-lg group-hover:bg-[#CCFF00] group-hover:text-[#111111] group-hover:border-[#CCFF00] transition-all duration-300 transform group-hover:rotate-45">
                                                  <FiArrowUpRight />
                                             </div>
                                        </div>

                                        {/* Bottom Content */}
                                        <div>
                                             <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-1 group-hover:text-[#CCFF00] transition-colors">
                                                  {cat.subtitle}
                                             </p>
                                             <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white tracking-wide leading-tight">
                                                  {cat.name}
                                             </h3>

                                             <div className="w-0 h-1 bg-[#CCFF00] mt-2 group-hover:w-16 transition-all duration-300 ease-in-out" />
                                        </div>

                                   </div>
                              </Link>
                         ))}
                    </div>

               </div>
          </section>
     );
}