import { Link } from "react-router-dom";

export default function CategoryCard({ id, name, image }) {
  return (
    <div className="group flex flex-col">
      {/* Image with hover overlay */}
      <div className="relative aspect-square w-full overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            to={`/categories/${id}`}
            className="cursor-pointer bg-white px-6 py-3 text-xs font-semibold tracking-wide text-[#6B240F] transition hover:bg-[#F8F3F1] md:text-sm"
          >
            Voir
          </Link>
        </div>
      </div>

      <div className="bg-[#F8F3F1] px-4 py-4">
        <h3 className="text-center text-base font-semibold text-[#2B2B2B] md:text-lg">
          {name}
        </h3>
      </div>
    </div>
  );
}
