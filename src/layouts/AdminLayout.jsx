import { Menu, LogOut } from "lucide-react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      {/* HEADER */}
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
                    to="/admin"
                    className="cursor-pointer transition hover:text-gray-500"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="/admin/products"
                    className="cursor-pointer transition hover:text-gray-500"
                  >
                    Produits
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orders"
                    className="cursor-pointer transition hover:text-gray-500"
                  >
                    Commandes
                  </Link>
                </li>
                <li></li>
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
            {/* logout */}
            <button
              className="cursor-pointer"
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/auth/login");
              }}
            >
              <LogOut />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}

      {/* OUTLET */}
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
}
