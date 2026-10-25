'use client';

import Link from 'next/link';
import { FiHeart, FiStar, FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';

export default function TrendingSection() {
     const trendingProducts = [
          {
               id: 1,
               name: 'Ovrixa Pulse Fit Smart Compression Suit',
               category: 'Men',
               badge: 'TRENDING #1',
               rating: 4.9,
               price: '৳1,200',
               image: 'https://images.unsplash.com/photo-1610360373636-08dd2b883ea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/products/pulse-fit-compression-suit',
          },
          {
               id: 2,
               name: 'Ovrixa Aero Shield Polarized Sport Visor',
               category: 'Women',
               badge: 'HOT DROP',
               rating: 5.0,
               price: '৳750',
               image: 'https://images.unsplash.com/photo-1748595998804-420b4dfd9eb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/products/aero-shield-visor',
          },
          {
               id: 3,
               name: 'Ovrixa Reflex Pro Goalkeeper Gloves',
               category: 'Pro Equipment',
               badge: 'LIMITED EDITION',
               rating: 4.8,
               price: '৳850',
               image: 'https://images.unsplash.com/photo-1760177379284-b68471fdd217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
               link: '/products/reflex-pro-gloves',
          },
     ];

  return (
    <section className="bg-[#111111] py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8  border-[#CCFF00]">
          <div>
            <span className="text-[#CCFF00] text-xs font-black uppercase ">
              Most Popular
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider mt-0.5">
              TRENDING NOW
            </h2>
          </div>
          <p className="text-neutral-400 text-xs max-w-xs mt-2 sm:mt-0">
            Top-rated gear making waves on pitch and field this week.
          </p>
        </div>

        {/* Compact Full-Image Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="group relative h-80 sm:h-84 overflow-hidden rounded-md border border-white/10 hover:border-[#CCFF00]/70 transition-all duration-300 shadow-xl"
            >
              {/* Full Card Background Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Gradient Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 opacity-90 group-hover:opacity-85 transition-opacity" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between z-10">

                {/* Bottom Product Info & Action */}
                <div className="space-y-3 flex flex-col justify-end h-full">
                  <div>
                    

                    <Link href={product.link}>
                      <h3 className="text-white font-black text-base line-clamp-1 group-hover:text-[#CCFF00] transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-[#CCFF00] font-black text-lg mt-0.5">
                      {product.price}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}