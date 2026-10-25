'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

export default function RegisterPage() {
     const [showPassword, setShowPassword] = useState(false);

     return (
          <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#111111] text-white">

               {/* Left Side: Visual / Branding */}
               <div className="hidden lg:relative lg:flex items-end p-12 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80')` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="relative z-10 space-y-3">
                         <span className="bg-[#CCFF00] text-[#111111] text-xs font-black px-3 py-1 uppercase tracking-widest">
                              Join The Elite
                         </span>
                         <h1 className="text-4xl font-black italic uppercase tracking-wider">
                              UNLEASH YOUR TRUE POTENTIAL<span className="text-[#CCFF00]">.</span>
                         </h1>
                         <p className="text-neutral-300 text-sm max-w-md">
                              Create an account to track orders, save wishlist items, and get early access to exclusive drops.
                         </p>
                    </div>
               </div>

               {/* Right Side: Registration Form */}
               <div className="flex items-center justify-center px-6 py-12 lg:px-16">
                    <div className="w-full max-w-md space-y-6">

                         {/* Header */}
                         <div>
                              <h2 className="text-3xl font-black uppercase tracking-wider italic">
                                   CREATE ACCOUNT<span className="text-[#CCFF00]">.</span>
                              </h2>
                              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                                   Already have an account?{' '}
                                   <Link href="/login" className="text-[#CCFF00] font-bold hover:underline">
                                        Sign In
                                   </Link>
                              </p>
                         </div>

                         {/* Social Signup Button */}
                         <button className="w-full flex items-center justify-center space-x-3 bg-white/5 border border-neutral-800 py-3 px-4 text-sm font-bold uppercase tracking-wider hover:border-[#CCFF00] transition-all">
                              <FcGoogle className="text-xl" />
                              <span>Continue with Google</span>
                         </button>

                         <div className="flex items-center my-4">
                              <div className="flex-grow border-t border-neutral-800" />
                              <span className="px-3 text-xs text-neutral-500 uppercase">Or with email</span>
                              <div className="flex-grow border-t border-neutral-800" />
                         </div>

                         {/* Form */}
                         <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                              {/* Full Name */}
                              <div>
                                   <label className="block text-xs font-bold uppercase text-neutral-400 mb-1">Full Name</label>
                                   <div className="relative">
                                        <FiUser className="absolute left-3.5 top-3.5 text-neutral-500" />
                                        <input
                                             type="text"
                                             placeholder="John Doe"
                                             className="w-full bg-neutral-900 border border-neutral-800 text-white pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#CCFF00] transition-colors"
                                        />
                                   </div>
                              </div>

                              {/* Email */}
                              <div>
                                   <label className="block text-xs font-bold uppercase text-neutral-400 mb-1">Email Address</label>
                                   <div className="relative">
                                        <FiMail className="absolute left-3.5 top-3.5 text-neutral-500" />
                                        <input
                                             type="email"
                                             placeholder="name@example.com"
                                             className="w-full bg-neutral-900 border border-neutral-800 text-white pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#CCFF00] transition-colors"
                                        />
                                   </div>
                              </div>

                              {/* Password */}
                              <div>
                                   <label className="block text-xs font-bold uppercase text-neutral-400 mb-1">Password</label>
                                   <div className="relative">
                                        <FiLock className="absolute left-3.5 top-3.5 text-neutral-500" />
                                        <input
                                             type={showPassword ? 'text' : 'password'}
                                             placeholder="••••••••"
                                             className="w-full bg-neutral-900 border border-neutral-800 text-white pl-10 pr-12 py-3 text-sm focus:outline-none focus:border-[#CCFF00] transition-colors"
                                        />
                                        <button
                                             type="button"
                                             onClick={() => setShowPassword(!showPassword)}
                                             className="absolute right-3.5 top-3.5 text-neutral-500 hover:text-white"
                                        >
                                             {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </button>
                                   </div>
                              </div>

                              {/* Terms checkbox */}
                              <div className="flex items-center space-x-2 text-xs text-neutral-400">
                                   <input type="checkbox" className="accent-[#CCFF00]" id="terms" />
                                   <label htmlFor="terms">I agree to the <a href="/terms" className="text-white underline">Terms & Conditions</a></label>
                              </div>

                              {/* Submit Button */}
                              <button className="w-full bg-[#CCFF00] text-[#111111] py-3.5 font-black uppercase text-sm tracking-wider hover:bg-white transition-all shadow-lg">
                                   Create Account
                              </button>

                         </form>

                    </div>
               </div>

          </div>
     );
}