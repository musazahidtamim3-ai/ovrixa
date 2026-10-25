import HeroSlider from "./components/home/HeroSlider";
import BestSellerSection from "./components/home/FlashSale";
import CategorySection from "./components/home/Categories";
import TrendingSection from "./components/home/Trending";
import PromoBanner from "./components/home/Promobanner";
import TrustBadges from "./components/home/Trust";

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
