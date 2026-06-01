import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#FFFFFF] px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/automne-logo.png"
              alt="Automne Pâtisserie"
              className="w-48 object-contain"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-8 text-sm font-medium text-[#9F9F9F] ">Liens</h3>
            <ul className="space-y-6 text-sm font-medium">
              <li>
                <Link to="/" className="transition hover:text-gray-500">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition hover:text-gray-500">
                  Produits
                </Link>
              </li>
              <li>
                <Link
                  to="/where-to-find"
                  className="transition hover:text-gray-500"
                >
                  Collecte
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-gray-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-8 text-sm font-medium text-[#9F9F9F]">Aide</h3>

            <ul className="space-y-6 text-sm font-medium">
              <li className="cursor-not-allowed text-gray-400">Paiement</li>

              <li className="cursor-not-allowed text-gray-400">
                Commande & retrait
              </li>

              <li className="cursor-not-allowed text-gray-400">
                Produits & informations
              </li>
            </ul>

            <p className="mt-6 text-xs text-[#9F9F9F]">
              Rubriques bientôt disponibles
            </p>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="mb-8 text-sm font-medium text-[#9F9F9F]">
              Newsletter
            </h3>

            <form className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Entrez votre e-mail"
                disabled
                className="cursor-not-allowed border-b border-black bg-transparent pb-2 opacity-50 outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                disabled
                className="cursor-not-allowed border-b border-black pb-2 text-xs font-semibold uppercase tracking-wide opacity-50"
              >
                S'inscrire
              </button>
            </form>

            <p className="mt-3 text-xs text-[#9F9F9F]">Bientôt disponible</p>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500">&copy; 2026 | Made by Perrine</p>
        </div>
      </div>
    </footer>
  );
}
