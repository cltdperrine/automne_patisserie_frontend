import CategoryCard from "../components/CategoryCard";
import { useState, useEffect } from "react";
import { categoriesApi } from "../lib/api";

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const categories = await categoriesApi.getCategories();
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    }
    getCategories();
  }, []);
  return (
    <>
      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#2B2B2B] md:text-5xl">
              Produits
            </h2>
            <p className="mt-2 text-base text-[#9F9F9F] md:text-lg">
              Des créations faites avec amour
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
