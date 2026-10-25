'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX, FiUser } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar() {
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

     const cartItemCount = 3;
     const isLoggedIn = false; 

     const navLinks = [
          { name: 'Men', href: '/men' },
          { name: 'Women', href: '/women' },
          { name: 'Kids', href: '/kids' },
          { name: 'New & Featured', href: '/new-featured' },
          { name: 'Sale', href: '/sale' },
     ];

     return (
          <header className="sticky top-0 z-50 bg-[#111111] text-white border-b border-neutral-800">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                         <Link href="/">
                              <Image src="/logo-01.png" alt="Ovrixa Logo" width={140} height={50} priority />
                         </Link>

                         <nav className="hidden md:flex items-center space-x-8">
                              {navLinks.map((link) => (
                                   <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-semibold uppercase tracking-wider hover:text-[#CCFF00] transition-colors"
                                   >
                                        {link.name}
                                   </Link>
                              ))}
                         </nav>

                         <div className="hidden md:flex items-center space-x-6 text-xl">

                              <button aria-label="Search" className="hover:text-[#CCFF00] transition-colors">
                                   <FiSearch />
                              </button>

                              <div className="relative">
                                   <button
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        aria-label="User Account"
                                        className="hover:text-[#CCFF00] transition-colors flex items-center"
                                   >
                                        <FiUser />
                                   </button>

                                   {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-3 w-44 bg-[#1a1a1a] border border-neutral-800 rounded shadow-lg py-2">
                                             {isLoggedIn ? (
                                                  <>
                                                       <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-neutral-800 hover:text-[#CCFF00]" onClick={() => setIsUserMenuOpen(false)}>My Account</Link>
                                                       <Link href="/orders" className="block px-4 py-2 text-sm hover:bg-neutral-800 hover:text-[#CCFF00]" onClick={() => setIsUserMenuOpen(false)}>Orders</Link>
                                                       <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-neutral-800" onClick={() => setIsUserMenuOpen(false)}>Logout</button>
                                                  </>
                                             ) : (
                                                  <>
                                                       <Link href="/auth/login" className="block px-4 py-2 text-sm font-bold text-[#CCFF00] hover:bg-neutral-800" onClick={() => setIsUserMenuOpen(false)}>Sign In</Link>
                                                       <Link href="/auth/signup" className="block px-4 py-2 text-sm hover:bg-neutral-800" onClick={() => setIsUserMenuOpen(false)}>Register</Link>
                                                  </>
                                             )}
                                        </div>
                                   )}
                              </div>

                              <Link href="/wishlist" aria-label="Wishlist" className="hover:text-[#CCFF00] transition-colors">
                                   <FiHeart />
                              </Link>

                              <Link href="/cart" aria-label="Cart" className="relative hover:text-[#CCFF00] transition-colors">
                                   <FiShoppingBag />
                                   {cartItemCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-[#CCFF00] text-[#111111] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                             {cartItemCount}
                                        </span>
                                   )}
                              </Link>
                         </div>

                         {/* menue btn */}
                         <div className="flex md:hidden items-center space-x-4 text-xl">
                              <Link href="/cart" className="relative hover:text-[#CCFF00]">
                                   <FiShoppingBag />
                                   {cartItemCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-[#CCFF00] text-[#111111] text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                                             {cartItemCount}
                                        </span>
                                   )}
                              </Link>
                              <button
                                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                   className="text-2xl hover:text-[#CCFF00]"
                                   aria-label="Toggle menu"
                              >
                                   {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                              </button>
                         </div>

                    </div>
               </div>

               {/* drawer menue */}
               {isMobileMenuOpen && (
                    <div className="md:hidden bg-[#111111] border-b border-neutral-800 px-4 py-6 space-y-4">
                         <div className="flex flex-col space-y-3">
                              {navLinks.map((link) => (
                                   <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-base font-bold uppercase tracking-wider hover:text-[#CCFF00]"
                                   >
                                        {link.name}
                                   </Link>
                              ))}
                         </div>

                         <hr className="border-neutral-800 my-3" />

                         {/* mobile menue */}
                         <div className="flex flex-col space-y-3 text-sm">
                              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-[#CCFF00]">
                                   Sign In / Register
                              </Link>
                              <Link href="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#CCFF00]">
                                   Wishlist
                              </Link>
                         </div>
                    </div>
               )}
          </header>
     );
}