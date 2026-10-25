"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

export default function LoginPage() {
     const [formData, setFormData] = useState({
          email: "",
          password: "",
     });

     const [showPassword, setShowPassword] = useState(false);
     const [isSubmitting, setIsSubmitting] = useState(false);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          setIsSubmitting(true);

          // TODO: Add your Auth/Backend API call here
          console.log("Submitted Login Data:", formData);

          setTimeout(() => {
               setIsSubmitting(false);
               alert(`Logged in with Email: ${formData.email}`);
          }, 1000);
     };

     return (
          <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">

               {/* 1. LEFT SIDE: Visual Banner & Content */}
               <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-gray-900 text-white">
                    {/* Background Image with Gradient Overlay */}
                    <Image
                         src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
                         alt="Interior Design"
                         fill
                         priority
                         className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />


                    {/* Bottom Hero Content & Review */}
                    <div className="relative z-10 max-w-lg space-y-6 pt-40">
                         <div className="flex items-center gap-1 text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                   <FaStar key={i} size={18} />
                              ))}
                              <span className="ml-2 text-sm font-bold text-white">4.9 / 5.0 rating</span>
                         </div>

                         <h1 className="text-4xl font-black leading-tight tracking-tight text-white">
                              Elevate your living space with curated essentials.
                         </h1>

                         <blockquote className="text-sm leading-relaxed text-gray-300 italic border-l-2 border-orange-500 pl-4">
                              "Lifely completely transformed my home shopping experience. The quality and fast delivery are unmatched!"
                         </blockquote>

                         <div className="pt-2 flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white shadow-md">
                                   SR
                              </div>
                              <div>
                                   <p className="text-sm font-bold text-white">Sophia Reynolds</p>
                                   <p className="text-xs text-gray-400">Verified Buyer</p>
                              </div>
                         </div>
                    </div>
               </div>

               {/* 2. RIGHT SIDE: Form Section */}
               <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-white">
                    <div className="w-full max-w-md space-y-8">

                         {/* Mobile Logo & Header */}
                         <div>
                              <Link href="/" className="lg:hidden text-3xl font-black tracking-tight text-gray-900 block mb-6">
                                   lifely<span className="text-orange-500">.</span>
                              </Link>
                              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                                   Welcome back
                              </h2>
                              <p className="mt-2 text-sm text-gray-500">
                                   Please enter your details to access your account.
                              </p>
                         </div>

                         {/* Form */}
                         <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                              {/* Email Input */}
                              <div>
                                   <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        Email Address
                                   </label>
                                   <div className="relative flex items-center">
                                        <FiMail className="absolute left-4 text-gray-400" size={18} />
                                        <input
                                             type="email"
                                             name="email"
                                             required
                                             value={formData.email}
                                             onChange={handleChange}
                                             placeholder="name@example.com"
                                             className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-11 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                        />
                                   </div>
                              </div>

                              {/* Password Input */}
                              <div>
                                   <div className="flex items-center justify-between mb-2">
                                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                                             Password
                                        </label>
                                        <Link
                                             href="/forgot-password"
                                             className="text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors"
                                        >
                                             Forgot password?
                                        </Link>
                                   </div>
                                   <div className="relative flex items-center">
                                        <FiLock className="absolute left-4 text-gray-400" size={18} />
                                        <input
                                             type={showPassword ? "text" : "password"}
                                             name="password"
                                             required
                                             value={formData.password}
                                             onChange={handleChange}
                                             placeholder="••••••••"
                                             className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-11 pr-11 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                        />
                                        <button
                                             type="button"
                                             onClick={() => setShowPassword(!showPassword)}
                                             className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                                        >
                                             {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                        </button>
                                   </div>
                              </div>

                              {/* Remember Me Checkbox */}
                              <div className="flex items-center">
                                   <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                                   />
                                   <label htmlFor="remember-me" className="ml-2 block text-xs font-semibold text-gray-600 cursor-pointer">
                                        Keep me signed in
                                   </label>
                              </div>

                              {/* Submit Button */}
                              <button
                                   type="submit"
                                   disabled={isSubmitting}
                                   className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-[0.98] disabled:opacity-70"
                              >
                                   {isSubmitting ? (
                                        <span>Signing in...</span>
                                   ) : (
                                        <>
                                             Sign In <FiArrowRight size={18} />
                                        </>
                                   )}
                              </button>
                         </form>

                         {/* Divider */}
                         <div className="relative my-6">
                              <div className="absolute inset-0 flex items-center">
                                   <div className="w-full border-t border-gray-200" />
                              </div>
                              <div className="relative flex justify-center text-xs uppercase">
                                   <span className="bg-white px-3 text-gray-400 font-semibold">Or continue with</span>
                              </div>
                         </div>

                         {/* Google Login Button */}
                         <button
                              type="button"
                              onClick={() => alert("Google Login clicked")}
                              className="w-full flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:scale-[0.98]"
                         >
                              <FcGoogle size={20} />
                              Sign in with Google
                         </button>

                         {/* Sign Up Link */}
                         <p className="text-center text-xs font-medium text-gray-600">
                              Don't have an account?{" "}
                              <Link href="/auth/signup" className="font-bold text-orange-500 hover:text-orange-600 transition-colors">
                                   Create an account
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
}