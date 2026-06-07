import { Menu, User, ShoppingCart, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
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
              onClick={() => {
                localStorage.removeItem("user");
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
    </header>
  );
}
