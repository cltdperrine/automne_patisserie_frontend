import FeaturesBanner from "../sections/FeaturesBanner";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const total = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(
      item.price.replace("€", "").replace(",", "."),
    );

    return acc + numericPrice * item.quantity;
  }, 0);

  const getNumericPrice = (price) =>
    parseFloat(price.replace("€", "").replace(",", "."));
  return (
    <>
      <section className="relative">
        <img
          src="/hero-2.jpeg"
          alt="Panier"
          className="h-[280px] w-full object-cover md:h-[340px]"
        />
        <div className="absolute inset-0 flex bg-white/20 backdrop-blur-[2px] flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#2B2B2B] md:text-5xl">
            Panier
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#2B2B2B] md:text-base">
            <Link to="/" className="transition hover:text-gray-500">
              Accueil
            </Link>
            <span className="text-[#2B2B2B]">&gt;</span>
            <span>Panier</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="hidden md:block w-full">
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-[#F8F3F1] px-6 py-4 text-sm font-medium text-[#2B2B2B]">
                  <span>Produit</span>
                  <span>Prix</span>
                  <span>Quantité</span>
                  <span>Sous-total</span>
                </div>
              </div>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-6 border-b border-gray-100 px-6 py-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-24 w-24 overflow-hidden rounded-xl bg-[#F8F3F1] flex-shrink-0">
                      <img
                        src={
                          item.image?.startsWith("http")
                            ? item.image
                            : `${import.meta.env.VITE_API_URL}${item.image}`
                        }
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="max-w-[180px] font-medium text-[#2B2B2B] leading-relaxed">
                      {item.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>{item.price}</span>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="cursor-pointer text-[#B88E7D] transition hover:opacity-70"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 transition hover:bg-gray-100 cursor-pointer"
                    >
                      -
                    </button>

                    <span className="min-w-[20px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(index)}
                      className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 transition hover:bg-gray-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <span>
                    {(getNumericPrice(item.price) * item.quantity).toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="bg-[#F8F3F1] p-8 self-start">
              <h2 className="mb-8 text-2xl font-bold text-[#2B2B2B]">
                Total de la commande
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-t border-[#E5DDD8] pt-6">
                  <span className="text-lg font-medium text-[#2B2B2B]">
                    Total
                  </span>

                  <span className="text-3xl font-bold text-[#B88E7D]">
                    {total.toFixed(2)} €
                  </span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-8 flex w-full items-center justify-center rounded-full bg-[#B88E7D] px-6 py-4 text-base font-medium text-white transition hover:opacity-90 cursor-pointer"
              >
                Valider la commande
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FeaturesBanner />
    </>
  );
}
