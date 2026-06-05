import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FeaturesBanner from "../sections/FeaturesBanner";
import ProductCard from "../components/ProductCard";
import { productsApi } from "../lib/api";
import formatPrice from "../utils/prices";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await productsApi.getProducts();
        setProducts(data);
      } catch {
        setError("Impossible d'afficher les produits");
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <section className="relative">
        <img
          src="/hero-2.jpeg"
          alt="Produits"
          className="h-[280px] w-full object-cover md:h-[340px]"
        />
        <div className="absolute inset-0 flex bg-white/20 backdrop-blur-[2px] flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#2B2B2B] md:text-5xl">
            Produits
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#2B2B2B] md:text-base">
            <Link to="/" className="transition hover:text-gray-500">
              Accueil
            </Link>
            <span className="text-[#2B2B2B]">&gt;</span>
            <span>Produits</span>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          {isLoading && (
            <p className="text-center text-sm text-[#9F9F9F]">
              Chargement des produits…
            </p>
          )}

          {error && !isLoading && (
            <p className="text-center text-sm text-red-500">{error}</p>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image_url}
                  title={product.name}
                  subtitle={product.description}
                  price={formatPrice(product.price)}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
        </div>
      </section>

      <FeaturesBanner />
    </>
  );
}
