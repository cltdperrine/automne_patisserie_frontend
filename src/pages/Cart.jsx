import FeaturesBanner from "../sections/FeaturesBanner";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function Cart() {
  return (
    <>
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Panier"
          className="h-[280px] w-full object-cover md:h-[340px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#FFFFFF] md:text-5xl">
            Panier
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#FFFFFF] md:text-base">
            <Link to="/" className="transition hover:text-gray-500">
              Accueil
            </Link>
            <span className="text-[#FFFFFF]">&gt;</span>
            <span>Panier</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="w-full">
                <div className="grid grid-cols-4 bg-[#F8F3F1] px-6 py-4 text-sm font-medium text-[#2B2B2B]">
                  <span>Produit</span>
                  <span>Prix</span>
                  <span>Quantité</span>
                  <span>Sous-total</span>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4 border-b border-gray-100 px-6 py-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/hero.jpg"
                    alt="Produit"
                    className="h-20 w-20 rounded-lg object-cover"
                  />

                  <p className="text-sm text-[#2B2B2B]">Coeur d’Automne</p>
                </div>

                <div className="flex items-center justify-between">
                  <span>3.50 €</span>

                  <button className="cursor-pointer text-[#B88E7D] transition hover:opacity-70">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm">
                  1
                </div>

                <span>3.50 €</span>
              </div>
            </div>

            {/* Right */}
            <div className="bg-[#F8F3F1] p-8">
              <h2 className="mb-8 text-2xl font-bold text-[#2B2B2B]">Panier</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#2B2B2B]">Sous-total</span>

                  <span className="text-[#9F9F9F]">3.50 €</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#2B2B2B]">Total</span>

                  <span className="text-xl font-bold text-[#B88E7D]">
                    3.50 €
                  </span>
                </div>
              </div>
              <button className="mt-8 w-full rounded-full border border-black px-6 py-4 text-base font-medium transition hover:bg-black hover:text-white cursor-pointer">
                Valider la commande
              </button>
            </div>
          </div>
        </div>
      </section>
      <FeaturesBanner />
    </>
  );
}
