import FeaturesItem from "../components/FeaturesItem";
import { ChefHat, Clock3, Leaf, Check } from "lucide-react";

export default function FeaturesBanner() {
  return (
    <>
      <section className="bg-[#F8F3F1] px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
          <FeaturesItem
            icon={<ChefHat className="h-10 w-10 stroke-[1.5]" />}
            title="Fait maison"
            subtitle="Recettes artisanales"
          />
          <FeaturesItem />
          <FeaturesItem />
          <FeaturesItem />
        </div>
      </section>
    </>
  );
}
