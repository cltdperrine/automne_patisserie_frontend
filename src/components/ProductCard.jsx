import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ id, image, title, subtitle, price }) {
  const { addToCart } = useContext(CartContext);
  console.log(price, typeof price);

  console.log(id);

  return (
    <div className="group flex flex-col">
      <Link to={`/products/${id}`}>
        {/* Image with hover overlay */}
        <div className="relative aspect-square w-full overflow-hidden">
          <img
            src={
              image
                ? image.startsWith("http")
                  ? image
                  : `${import.meta.env.VITE_API_URL}${image}`
                : "/placeholder.jpg"
            }
            alt={title}
            className="h-full w-full object-cover"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              onClick={(event) => {
                event.preventDefault();

                addToCart({
                  image,
                  title,
                  subtitle,
                  price,
                });
              }}
              className="cursor-pointer bg-white px-6 py-3 text-xs font-semibold tracking-wide text-[#6B240F] transition hover:bg-[#F8F3F1] md:text-sm cursor pointer"
            >
              Ajouter au panier
            </button>
          </div>
        </div>

        {/* Card body */}
        <div className="bg-[#F8F3F1] px-4 py-4">
          <h3 className="text-base font-semibold text-[#2B2B2B] md:text-lg">
            {title}
          </h3>

          <p className="mt-1 text-xs text-[#9F9F9F] md:text-sm">{subtitle}</p>

          <p className="mt-3 text-sm font-bold text-[#2B2B2B] md:text-base">
            {price}
          </p>
        </div>
      </Link>
    </div>
  );
}
