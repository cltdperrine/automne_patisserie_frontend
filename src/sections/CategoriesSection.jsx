import CategoryCard from "../components/CategoryCard";

export default function CategoriesSection() {
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
          <div className="grid gap-8 md:grid-cols-3">
            <CategoryCard image="" title="" />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </section>
    </>
  );
}
