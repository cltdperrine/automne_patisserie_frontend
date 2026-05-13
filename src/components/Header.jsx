import { Menu, User, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="flex h-20 items-center px-4 md:px-8">
        {/* left */}
        <div className="flex items-center">
          <button className="md:hidden">
            <Menu className="h-7 w-7 cursor-pointer" />
          </button>

          {/* navigation desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-12 text-lg font-medium text-black">
              <li>
                <Link
                  to="/"
                  className="cursor-pointer transition hover:text-gray-500"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="cursor-pointer transition hover:text-gray-500"
                >
                  Produits
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="cursor-pointer transition hover:text-gray-500"
                >
                  Où me trouver?
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="cursor-pointer transition hover:text-gray-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <img
            src="/automne-logo.png"
            alt="Automne Pâtisserie"
            className="w-28 object-contain md:w-40"
          />
        </Link>

        {/* icons */}
        <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">
          {/* user */}
          <Link to={"/login"}>
            <User className="h-5 w-5 cursor-pointer stroke-[1.8] transition hover:text-gray-500 md:h-6 md:w-6" />
          </Link>
          {/* search */}
          <Link to={"/search"}>
            <Search className="h-5 w-5 cursor-pointer stroke-[1.8] transition hover:text-gray-500 md:h-6 md:w-6" />
          </Link>
          {/* shopping cart */}
          <Link to={"/cart"}>
            <ShoppingCart className="h-5 w-5 cursor-pointer stroke-[1.8] transition hover:text-gray-500 md:h-6 md:w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
