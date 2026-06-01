import { Link } from "react-router-dom";
import CheckoutInput from "../components/CheckoutInput";
import FeaturesBanner from "../sections/FeaturesBanner";

export default function Checkout() {
  return (
    <>
      {/* Banner */}
      <section className="relative">
        <img
          src="/hero-2.jpeg"
          alt="Checkout"
          className="h-[280px] w-full object-cover md:h-[340px]"
        />
        <div className="absolute inset-0 flex bg-white/20 backdrop-blur-[2px] flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#2B2B2B] md:text-5xl">
            Valdidation
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#2B2B2B] md:text-base">
            <Link to="/" className="transition hover:text-gray-500">
              Accueil
            </Link>
            <span className="text-[#2B2B2B]">&gt;</span>
            <span>Validation</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-[#2B2B2B]">
                Détails de facturation
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <CheckoutInput label="Prénom" />

                <CheckoutInput label="Nom" />
              </div>
              <div className="mt-6">
                <CheckoutInput
                  label="Nom de l’entreprise (facultatif)"
                  placeholder="Entreprise"
                />
              </div>

              <div className="mt-6">
                <CheckoutInput label="Téléphone" type="tel" />
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <label className="text-sm font-medium text-[#2B2B2B]">
                  Notes de commande (facultatif)
                </label>

                <textarea
                  placeholder="Notes concernant votre commande..."
                  className="min-h-[140px] rounded-[10px] border border-[#D9D9D9] p-4 outline-none resize-none"
                />
              </div>
            </div>

            {/* Right */}
            <div className="border border-[#F0F0F0] p-8">
              <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-4">
                <h3 className="text-xl font-semibold text-[#2B2B2B]">
                  Produit
                </h3>

                <h3 className="text-xl font-semibold text-[#2B2B2B]">
                  Sous-total
                </h3>
              </div>
              <div className="flex items-center justify-between py-6">
                <p className="text-[#9F9F9F]">
                  Coeur d’Automne
                  <span className="ml-2 text-black">x 1</span>
                </p>

                <span className="text-[#2B2B2B]">3.50 €</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-[#2B2B2B]">Sous-total</span>

                <span className="text-[#2B2B2B]">3.50 €</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4">
                <span className="font-medium text-[#2B2B2B]">Total</span>

                <span className="text-2xl font-bold text-[#B88E7D]">
                  3.50 €
                </span>
              </div>
              <div className="py-6">
                <h4 className="font-medium text-[#2B2B2B]">Lieu de collecte</h4>

                <p className="mt-2 text-sm leading-6 text-[#9F9F9F]">
                  Choisissez votre lieu de collecte pour finaliser votre
                  commande.
                </p>

                <select className="mt-4 h-[52px] w-full rounded-[10px] border border-[#D9D9D9] px-4 outline-none">
                  <option>Marché de Quintaou, 64600 Anglet</option>
                </select>
              </div>
              <div className="pb-6">
                <h4 className="font-medium text-[#2B2B2B]">Jour de collecte</h4>

                <p className="mt-2 text-sm leading-6 text-[#9F9F9F]">
                  Choisissez le jour de la collecte
                </p>

                <select className="mt-4 h-[52px] w-full rounded-[10px] border border-[#D9D9D9] px-4 outline-none">
                  <option>Samedi 24 juin 2026</option>
                </select>
              </div>
              <button className="mt-6 w-full rounded-lg bg-[#B88E7D] px-6 py-4 text-base font-medium text-white transition hover:opacity-90 cursor-pointer">
                Commander
              </button>
            </div>
          </div>
        </div>
      </section>
      <FeaturesBanner />
    </>
  );
}
