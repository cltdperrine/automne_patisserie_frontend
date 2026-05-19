import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { productsApi } from "../lib/api";
import formatPrice from "../utils/prices";
import { Link } from "react-router-dom";

export default function BestSellersSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsApi
      .getBestSellers(4)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#2B2B2B] md:text-5xl">
              Les meilleures ventes
            </h2>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-4">
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
          {/* Button */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="border border-[#B88E7D] px-12 py-3 text-[#B88E7D] transition hover:bg-[#B88E7D] hover:text-white"
            >
              Afficher plus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
