import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import CategoriesSection from "../sections/CategoriesSection";
import FeaturesBanner from "../sections/FeaturesBanner";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CategoriesSection />
      <FeaturesBanner />
      <Footer />
    </>
  );
}
