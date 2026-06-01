import { MapPin, CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhereToFind() {
  return (
    <>
      <section className="relative">
        <img
          src="/hero-2.jpeg"
          alt="Où me trouver"
          className="h-[280px] w-full object-cover md:h-[340px]"
        />
        <div className="absolute inset-0 flex bg-white/20 backdrop-blur-[2px] flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#2B2B2B] md:text-5xl">
            Localisation
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#2B2B2B] md:text-base">
            <Link to="/" className="transition hover:text-gray-500">
              Accueil
            </Link>
            <span className="text-[#2B2B2B]">&gt;</span>
            <span>Où me trouver?</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#2B2B2B] md:text-5xl">
              Où me trouver?
            </h2>
            <p className="mt-2 text-base text-[#9F9F9F] md:text-lg">
              Retrouvez Automne Pâtisserie sur les marchés locaux du Pays Basque{" "}
              <br />
              et lors d’événements gourmands tout au long de l’année.
            </p>
          </div>
          {/* Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-2xl border border-[#EFEAE7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <img
                src="/market-1.jpg"
                alt="Marché des Halles"
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#2B2B2B]">
                  Marché des Halles
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <MapPin className="h-5 w-5 text-[#B88E7D]" />
                    <span>Biarritz</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <CalendarDays className="h-5 w-5 text-[#B88E7D]" />
                    <span>Tous les samedis</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <Clock3 className="h-5 w-5 text-[#B88E7D]" />
                    <span>8h - 13h</span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="mt-8 inline-block rounded-lg border border-[#B88E7D] px-5 py-3 text-[#B88E7D] transition hover:bg-[#B88E7D] hover:text-white"
                >
                  Voir l’itinéraire
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="overflow-hidden rounded-2xl border border-[#EFEAE7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <img
                src="/market-2.jpg"
                alt="Marché Quintaou"
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#2B2B2B]">
                  Marché de Quintaou
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <MapPin className="h-5 w-5 text-[#B88E7D]" />
                    <span>Anglet</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <CalendarDays className="h-5 w-5 text-[#B88E7D]" />
                    <span>Tous les dimanches</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <Clock3 className="h-5 w-5 text-[#B88E7D]" />
                    <span>9h - 14h</span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="mt-8 inline-block rounded-lg border border-[#B88E7D] px-5 py-3 text-[#B88E7D] transition hover:bg-[#B88E7D] hover:text-white"
                >
                  Voir l’itinéraire
                </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="overflow-hidden rounded-2xl border border-[#EFEAE7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <img
                src="/market-3.jpeg"
                alt="Retrait de commandes"
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#2B2B2B]">
                  Retrait de commandes
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <MapPin className="h-5 w-5 text-[#B88E7D]" />
                    <span>Biarritz & alentours</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <CalendarDays className="h-5 w-5 text-[#B88E7D]" />
                    <span>Sur rendez-vous</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#6B6B6B]">
                    <Clock3 className="h-5 w-5 text-[#B88E7D]" />
                    <span>Commande via Instagram</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-block rounded-lg border border-[#B88E7D] px-5 py-3 text-[#B88E7D] transition hover:bg-[#B88E7D] hover:text-white"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
