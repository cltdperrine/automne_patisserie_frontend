import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProductCard({ id, image, title, subtitle, price }) {
  const { addToCart } = useContext(CartContext);
  console.log(price, typeof price);

  console.log(id);

  return (
    <div className="group flex flex-col">
      {/* IMAGE */}
      <Link to={`/products/${id}`}>
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
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="pt-4">
        <Link to={`/products/${id}`}>
          <h3 className="text-base font-semibold text-[#2B2B2B] transition hover:text-[#B88E7D] md:text-lg">
            {title}
          </h3>
        </Link>

        <p className="mt-1 line-clamp-2 text-xs text-[#9F9F9F] md:text-sm">
          {subtitle}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-bold text-[#2B2B2B] md:text-base">
            {price}
          </p>

          <button
            onClick={() => {
              addToCart({
                id,
                image,
                title,
                subtitle,
                price,
              });

              toast.success("Article ajouté au panier");
            }}
            className="cursor-pointer rounded-full border border-[#B88E7D] px-4 py-2 text-sm font-medium text-[#B88E7D] transition hover:bg-[#B88E7D] hover:text-white"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
