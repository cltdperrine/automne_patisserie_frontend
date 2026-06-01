import { Link, useParams } from "react-router-dom";
import formatPrice from "../utils/prices";
import { useEffect, useState } from "react";
import { productsApi } from "../lib/api";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    productsApi
      .getProduct(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!product) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <section className="bg-[#F8F3F1] px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center gap-3 text-sm text-[#6B6B6B]">
          <Link to="/">Accueil</Link>

          <span>&gt;</span>

          <Link to="/products">Produits</Link>

          <span>&gt;</span>

          <span className="font-medium text-[#2B2B2B]">{product.name}</span>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          {/* IMAGE */}
          <div>
            <img
              src={
                product.image_url.startsWith("http")
                  ? product.image_url
                  : `${import.meta.env.VITE_API_URL}${product.image_url}`
              }
              alt={product.name}
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h1 className="text-5xl font-bold text-[#2B2B2B]">
              {product.name}
            </h1>

            <p className="mt-4 text-2xl text-[#B88E7D]">
              {formatPrice(product.price)}
            </p>

            <p className="mt-8 leading-relaxed text-[#6B6B6B]">
              {product.description}
            </p>

            <p className="mt-8 text-sm text-[#6B6B6B]">
              <span className="font-medium text-[#2B2B2B]">Allergènes :</span>{" "}
              {product.allergens}
            </p>

            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  image: product.image_url,
                  title: product.name,
                  subtitle: product.description,
                  price: formatPrice(product.price),
                });

                toast.success("Article ajouté au panier");
              }}
              className="mt-10 rounded-xl border border-[#b58275] px-10 py-4 transition hover:bg-[#b58275] hover:text-white cursor-pointer"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
