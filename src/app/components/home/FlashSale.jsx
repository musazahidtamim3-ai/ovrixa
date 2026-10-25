'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { FiHeart, FiShoppingBag, FiStar, FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';

export default function BestSellerSection() {
     const products = [
          {
               id: 1,
               name: 'Ovrixa Strike Pro Match Football',
               category: 'Equipment',
               price: '৳1,000',
               originalPrice: '৳2,500',
               rating: 4.9,
               reviews: 48,
               badge: 'MATCH BALL',
               image: 'ball.png',
               link: '/products/strike-pro-football',
          },
          {
               id: 2,
               name: 'Ovrixa Pro Performance Hoodie',
               category: 'Men',
               price: '৳1,800',
               originalPrice: '৳3,200',
               rating: 5.0,
               reviews: 32,
               badge: 'BESTSELLER',
               image: 'https://images.unsplash.com/photo-1758223596760-cc6b2c0c20e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/products/pro-hoodie',
          },
          {
               id: 3,
               name: 'Ovrixa full sleeve training suit',
               category: 'Women',
               price: '৳700',
               originalPrice: '৳1,200',
               rating: 4.8,
               reviews: 74,
               badge: 'HOT DROP',
               image: 'https://images.unsplash.com/photo-1646135171430-434459770ad2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/products/training-suit',
          },
          {
               id: 4,
               name: 'Ovrixa Velocity Turf Cleats',
               category: 'Footwear',
               price: '৳2,200',
               originalPrice: '৳3,5000',
               rating: 4.9,
               reviews: 29,
               badge: 'TURF READY',
               image: 'shoe.png',
               link: '/products/velocity-cleats',
          },
          {
               id: 5,
               name: 'Ovrixa Speed Flex Training Shorts',
               category: 'Men',
               price: '৳400',
               originalPrice: '৳900',
               rating: 4.7,
               reviews: 19,
               badge: 'NEW',
               image: 'https://plus.unsplash.com/premium_photo-1727443876808-6bbe535e3422?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/products/training-shorts',
          },
     ];

     return (
          <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
               <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 ">
                         <div>
                              <span className="text-[#CCFF00] text-xs font-black uppercase tracking-[0.2em]">
                                   Top Performance
                              </span>
                              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider mt-1">
                                   BESTSELLERS
                              </h2>
                         </div>

                         {/* Navigation Controls */}
                         <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                              <button
                                   id="bestseller-prev"
                                   className="w-10 h-10 bg-white/5 border border-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#111111] hover:border-[#CCFF00] transition-all"
                                   aria-label="Previous Slide"
                              >
                                   <FiChevronLeft className="text-xl" />
                              </button>
                              <button
                                   id="bestseller-next"
                                   className="w-10 h-10 bg-white/5 border border-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#111111] hover:border-[#CCFF00] transition-all"
                                   aria-label="Next Slide"
                              >
                                   <FiChevronRight className="text-xl" />
                              </button>
                         </div>
                    </div>

                    {/* Carousel Slider */}
                    <Swiper
                         modules={[Navigation, Autoplay]}
                         navigation={{
                              prevEl: '#bestseller-prev',
                              nextEl: '#bestseller-next',
                         }}
                         autoplay={{ delay: 4000, disableOnInteraction: false }}
                         spaceBetween={20}
                         slidesPerView={1}
                         breakpoints={{
                              640: { slidesPerView: 2 },
                              1024: { slidesPerView: 4 },
                         }}
                         className="pb-4"
                    >
                         {products.map((product) => (
                              <SwiperSlide key={product.id}>
                                   {/* Glassmorphism Card */}
                                   <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 rounded-md overflow-hidden flex flex-col h-full shadow-xl">

                                        {/* Product Image Container */}
                                        <div className="relative h-50 overflow-hidden bg-black/40">

                                             {/* Badge */}
                                             <span className="absolute top-3 left-3 z-10 bg-[#CCFF00] text-[#111111] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 backdrop-blur-md">
                                                  {product.badge}
                                             </span>

                                             {/* Wishlist Button */}
                                             <button
                                                  aria-label="Add to Wishlist"
                                                  className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 border border-white/10 text-white backdrop-blur-md flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#111111] transition-all"
                                             >
                                                  <FiHeart className="text-xs" />
                                             </button>

                                             {/* Corner Quick Add Plus Icon */}
                                             <button
                                                  aria-label="Quick Add"
                                                  className="absolute bottom-3 right-3 z-10 w-9 h-9 bg-black/60 border border-white/20 text-white backdrop-blur-md flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#111111] hover:border-[#CCFF00] transition-all"
                                             >
                                                  <FiPlus className="text-lg" />
                                             </button>

                                             {/* Image */}
                                             <img
                                                  src={product.image}
                                                  alt={product.name}
                                                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                             />
                                        </div>

                                        {/* Product Info & Details */}
                                        <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                                             <div>
                                                  <span className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest">
                                                       {product.category}
                                                  </span>

                                                  <Link href={product.link}>
                                                       <h3 className="text-white font-bold text-sm line-clamp-1 group-hover:text-[#CCFF00] transition-colors mt-0.5">
                                                            {product.name}
                                                       </h3>
                                                  </Link>

                                                  {/* Rating */}
                                                  <div className="flex items-center space-x-1.5 mt-1.5">
                                                       <FiStar className="fill-[#CCFF00] text-[#CCFF00] text-xs" />
                                                       <span className="text-white text-xs font-bold">{product.rating}</span>
                                                       <span className="text-neutral-500 text-xs">({product.reviews})</span>
                                                  </div>
                                             </div>

                                             {/* Pricing & Add to Cart Action */}
                                             <div className="pt-3 border-t border-white/10 flex flex-col space-y-3">
                                                  <div className="flex items-baseline space-x-2">
                                                       <span className="text-[#CCFF00] font-black text-base sm:text-lg">
                                                            {product.price}
                                                       </span>
                                                       {product.originalPrice && (
                                                            <span className="text-neutral-500 line-through text-xs">
                                                                 {product.originalPrice}
                                                            </span>
                                                       )}
                                                  </div>
                                             </div>
                                        </div>

                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>

               </div>
          </section>
     );
}