import { Menu, User, ShoppingCart, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { authApi } from "../lib/api";

export default function Header() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const user = JSON.parse(localStorage.getItem("user"));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="flex h-20 items-center px-4 md:px-8">
        {/* left */}
        <div className="flex items-center">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
                  to="/where-to-find"
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
          {user ? (
            <button
              onClick={async () => {
                await authApi.signOut();
                localStorage.removeItem("user");
                clearCart();
                navigate("/auth/login");
              }}
              className="cursor-pointer"
            >
              <LogOut />
            </button>
          ) : (
            <Link to="/auth/login">
              <User />
            </Link>
          )}

          {/* shopping cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#B88E7D] text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="
      absolute
      left-0
      top-20
      w-full
      bg-white/90
      backdrop-blur-md
      shadow-lg
      border-b
      border-gray-100
      animate-in
      slide-in-from-top
      duration-200
      md:hidden
    "
        >
          <ul className="flex flex-col p-6">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-lg hover:text-[#B88E7D] transition"
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-lg hover:text-[#B88E7D] transition"
              >
                Produits
              </Link>
            </li>

            <li>
              <Link
                to="/where-to-find"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-lg hover:text-[#B88E7D] transition"
              >
                Où me trouver ?
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-lg hover:text-[#B88E7D] transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
