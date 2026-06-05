import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { productsApi } from "../lib/api";
import FeaturesBanner from "../sections/FeaturesBanner";

import ProductCard from "../components/ProductCard";

function formatPrice(price) {
  const value = typeof price === "string" ? parseFloat(price) : price;
  if (Number.isNaN(value)) return "";
  return `${value.toFixed(2).replace(".", ",")}€`;
}

export default function Category() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCategoryProducts() {
      try {
        // TODO: use get all products endpoint with a category filter ( query param )
        const data = await productsApi.getProducts(id);
        setProducts(data);
      } catch {
        setError("Impossible d'afficher les produits");
      } finally {
        setIsLoading(false);
      }
    }
    getCategoryProducts();
  }, [id]);

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
          <div className="mt-12 flex items-center justify-center gap-3">
            <button className="h-10 w-10 cursor-pointer bg-[#A86658] text-sm font-medium text-white transition hover:bg-[#8d5046]">
              1
            </button>
            <button className="h-10 w-10 cursor-pointer bg-[#F1E0DA] text-sm font-medium text-[#2B2B2B] transition hover:bg-[#e8d2cb]">
              2
            </button>
            <button className="h-10 w-10 cursor-pointer bg-[#F1E0DA] text-sm font-medium text-[#2B2B2B] transition hover:bg-[#e8d2cb]">
              3
            </button>
            <button className="h-10 cursor-pointer bg-[#F1E0DA] px-4 text-sm font-medium text-[#2B2B2B] transition hover:bg-[#e8d2cb]">
              Suivant
            </button>
          </div>
        </div>
      </section>

      <FeaturesBanner />
    </>
  );
}
