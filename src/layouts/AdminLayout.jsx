import { Link } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
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
                    to="/"
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
            {/* user */}
            <Link to={"/auth/login"}>
              <LogOut className="h-5 w-5 cursor-pointer stroke-[1.8] transition hover:text-gray-500 md:h-6 md:w-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Panier"
          className="h-[280px] w-full object-cover md:h-[340px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#FFFFFF] md:text-5xl">
            Admin
          </h1>
        </div>
      </section>

      {/* OUTLET */}
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
}
