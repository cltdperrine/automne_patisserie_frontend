import FeaturesBanner from "../sections/FeaturesBanner";

export default function Product() {
  return (
    <>
      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left */}
            <div className="flex gap-6">
              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <img
                    key={item}
                    src="/box.jpg"
                    alt="Miniature produit"
                    className="h-20 w-20 cursor-pointer rounded-lg object-cover bg-[#F9F1E7]"
                  />
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1">
                <div className="overflow-hidden rounded-lg bg-[#F9F1E7]">
                  <img
                    src="/box.jpg"
                    alt="Produit"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-[#2B2B2B]">
                Coeur d’Automne
              </h1>{" "}
              <p className="mt-4 text-2xl font-medium text-[#9F9F9F]">3.50 €</p>{" "}
              <p className="mt-6 max-w-xl leading-7 text-[#2B2B2B]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vulputate ut nulla vel gravida. Pellentesque consequat
                nibh eget urna pellentesque mattis.
              </p>{" "}
              <div className="mt-8">
                <h3 className="font-semibold text-[#2B2B2B]">Allergènes</h3>

                <p className="mt-2 text-[#9F9F9F]">Gluten - Lactose - Oeuf</p>
              </div>{" "}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex items-center gap-6 rounded-lg border border-gray-300 px-4 py-3">
                  <button className="cursor-pointer text-lg">-</button>

                  <span>1</span>

                  <button className="cursor-pointer text-lg">+</button>
                </div>

                <button className="rounded-lg border border-black px-8 py-4 text-base transition hover:bg-black hover:text-white cursor-pointer">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturesBanner />
    </>
  );
}
