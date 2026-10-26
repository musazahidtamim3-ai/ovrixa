'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroBanner() {
     const slides = [
          {
               id: 1,
               image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80', 
               badge: 'MEN & WOMEN COLLECTION',
               title: 'GEAR UP FOR GREATNESS',
               description: 'Premium activewear and performance apparel engineered for modern athletes.',
               btnText: 'SHOP APPAREL',
               btnLink: '/men',
          },
          {
               id: 2,
               image: 'https://plus.unsplash.com/premium_photo-1681842286315-16251849e9d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               badge: 'KIDS SPORTSWEAR',
               title: 'LITTLE CHAMPIONS',
               description: 'Durable, flexible, and stylish gear designed for the next generation of stars.',
               btnText: 'SHOP KIDS',
               btnLink: '/kids',
          },
          {
               id: 3,
               image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1920&q=80',
               title: 'FOOTBALL & CRICKET GEAR',
               description: 'Top-tier match balls, bats, cleats, and protection equipment.',
               btnText: 'EXPLORE EQUIPMENT',
               btnLink: '/sale',
          },
     ];

     return (
          <section className="relative w-full bg-[#111111] overflow-hidden">
               <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect={'fade'}
                    speed={1000}
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="w-full h-[80vh] sm:h-[70vh] min-h-125 max-h-162.5 ovrixa-swiper"
               >
                    {slides.map((slide) => (
                         <SwiperSlide key={slide.id} className="relative w-full h-full">
                              <div
                                   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                   style={{ backgroundImage: `url(${slide.image})` }}
                              />

                              <div className="absolute inset-0 bg-black/65" />

                              <div className="relative z-10 max-w-4xl mx-auto h-full px-4 flex flex-col items-center justify-center text-center">
                                   <div className="space-y-4">

                                        {/* Badge */}
                                        <span className="inline-block bg-[#CCFF00] text-[#111111] px-3.5 py-1 text-xs font-black uppercase tracking-widest">
                                             {slide.badge}
                                        </span>

                                        {/* Title */}
                                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-wide text-white drop-shadow-lg">
                                             {slide.title}
                                        </h1>

                                        {/* Description */}
                                        <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                                             {slide.description}
                                        </p>

                                        {/* CTA Button */}
                                        <div className="pt-2">
                                             <Link
                                                  href={slide.btnLink}
                                                  className="inline-block bg-[#CCFF00] text-[#111111] px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider hover:bg-white transition-all shadow-lg hover:scale-105"
                                             >
                                                  {slide.btnText}
                                             </Link>
                                        </div>

                                   </div>
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>

               {/* Centered Swiper Pagination Styling */}
               <style jsx global>{`
        .ovrixa-swiper .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          border-radius: 0px;
        }
        .ovrixa-swiper .swiper-pagination-bullet-active {
          background: #CCFF00 !important;
          opacity: 1;
          width: 25px;
          transition: all 0.3s ease;
        }
        .ovrixa-swiper .swiper-pagination {
          bottom: 20px !important;
          text-align: center !important;
        }
      `}</style>
          </section>
     );
}