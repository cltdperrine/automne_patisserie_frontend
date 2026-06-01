import Hero from "../components/Hero";
import CategoriesSection from "../sections/CategoriesSection";
import FeaturesBanner from "../sections/FeaturesBanner";
import BestSellersSection from "../sections/BestSellersSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <BestSellersSection />
      <FeaturesBanner />
    </>
  );
}
