import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function formatPrice(price) {
  const value = typeof price === "string" ? parseFloat(price) : price;
  if (Number.isNaN(value)) return "";
  return `${value.toFixed(2).replace(".", ",")}€`;
}

export default function BestSellersSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/best-sellers",
        );
        setProducts(response.data);
      } catch {
        console.error("Impossible d'afficher les produits");
      }
    }
    getProducts();
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
        </div>
      </section>
    </>
  );
}
