'use client';

import { FiTruck, FiShield, FiRotateCcw, FiCreditCard } from 'react-icons/fi';

export default function TrustMarquee() {
     const items = [
          {
               id: 1,
               icon: <FiTruck className="text-lg text-[#CCFF00]" />,
               title: 'FAST NATIONWIDE DELIVERY',
          },
          {
               id: 2,
               icon: <FiShield className="text-lg text-[#CCFF00]" />,
               title: '100% AUTHENTIC ENGINEERED GEAR',
          },
          {
               id: 3,
               icon: <FiRotateCcw className="text-lg text-[#CCFF00]" />,
               title: '7-DAY EASY SIZE REPLACEMENT',
          },
          {
               id: 4,
               icon: <FiCreditCard className="text-lg text-[#CCFF00]" />,
               title: 'CASH ON DELIVERY AVAILABLE',
          },
     ];

     const marqueeList = [...items, ...items, ...items];

     return (
          <div className="w-full bg-[#161616] border-y border-neutral-800 py-3 overflow-hidden select-none">
               <div className="flex w-max animate-marquee space-x-12">
                    {marqueeList.map((item, index) => (
                         <div key={index} className="flex items-center space-x-3 shrink-0">
                              {item.icon}
                              <span className="text-xs font-extrabold uppercase text-neutral-300 tracking-wider">
                                   {item.title}
                              </span>
                              <span className="text-[#CCFF00] text-xs font-bold pl-8">•</span>
                         </div>
                    ))}
               </div>

               <style jsx global>{`
                    @keyframes marquee {
                         0% {
                              transform: translateX(0%);
                         }
                         100% {
                              transform: translateX(-33.33%);
                         }
                    }
                    .animate-marquee {
                         animation: marquee 25s linear infinite;
                    }
                    .animate-marquee:hover {
                         animation-play-state: paused;
                    }
               `}</style>
          </div>
     );
}