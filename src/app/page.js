"use client";
import dynamic from 'next/dynamic';

const HeroSlider = dynamic(() => import('./components/home/HeroSlider'), {
  ssr: false,
  loading: () => <div className="w-full h-[80vh] bg-[#111111]" />,
});
const BestSellerSection = dynamic(() => import('./components/home/FlashSale'), {
  ssr: false,
  loading: () => <div className="w-full h-40 bg-[#111111]" />,
});
const TrustBadges = dynamic(() => import('./components/home/Trust'), {
  ssr: false,
  loading: () => <div className="w-full h-40 bg-[#111111]" />,
});
import CategorySection from "./components/home/Categories";
import TrendingSection from "./components/home/Trending";
import PromoBanner from "./components/home/Promobanner";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <TrustBadges />
      <CategorySection />
      <TrendingSection />
      <BestSellerSection />
      <PromoBanner />
    </div>
  );
}
