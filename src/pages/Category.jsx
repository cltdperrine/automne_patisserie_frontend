import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { productsApi } from "../lib/api";
import FeaturesBanner from "../sections/FeaturesBanner";
import {
  SlidersHorizontal,
  LayoutGrid,
  Rows3,
  ChevronDown,
} from "lucide-react";
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

  console.log(id);
  return (
    <>
      {/* Banner */}
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Catégories"
          className="h-[280px] w-full object-cover md:h-[340px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#FFFFFF] md:text-5xl">
            Catégories
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#FFFFFF] md:text-base">
            <Link to="/" className="transition hover:text-gray-500">
              Accueil
            </Link>
            <span className="text-[#FFFFFF]">&gt;</span>
            <span>Catégories</span>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-[#F1E0DA] px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-6">
            <button className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#2B2B2B] transition hover:text-gray-600">
              <SlidersHorizontal className="h-4 w-4" />
              Filtres
            </button>
            <div className="flex items-center gap-2 text-[#2B2B2B]">
              <button className="cursor-pointer transition hover:text-gray-600">
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button className="cursor-pointer transition hover:text-gray-600">
                <Rows3 className="h-4 w-4" />
              </button>
            </div>
            <span className="hidden text-sm text-[#2B2B2B] md:inline">
              Affichage de 1–{products.length} sur {products.length} resultats
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-[#2B2B2B]">Tri par</span>
            <button className="flex min-w-[180px] cursor-pointer items-center justify-between gap-3 bg-white px-4 py-2 text-sm text-[#9F9F9F]">
              <span>Popularité</span>
              <ChevronDown className="h-4 w-4" />
            </button>
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
