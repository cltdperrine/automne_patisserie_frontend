import { Link } from "react-router-dom";
import CheckoutInput from "../components/CheckoutInput";
import FeaturesBanner from "../sections/FeaturesBanner";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ordersApi } from "../lib/api";

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(
      item.price.replace("€", "").replace(",", "."),
    );

    return acc + numericPrice * item.quantity;
  }, 0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    notes: "",
    pickupLocation: "",
    pickupDate: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const navigate = useNavigate();

  async function handleOrder() {
    if (cartItems.length === 0) {
      toast.error("Votre panier est vide");
      return;
    }

    if (!formData.firstName.trim()) {
      toast.error("Veuillez renseigner votre prénom");
      return;
    }

    if (!formData.lastName.trim()) {
      toast.error("Veuillez renseigner votre nom");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      toast.error("Veuillez renseigner votre numéro de téléphone");
      return;
    }

    if (!formData.pickupLocation.trim()) {
      toast.error("Veuillez choisir un lieu de collecte");
      return;
    }

    if (!formData.pickupDate.trim()) {
      toast.error("Veuillez choisir une date de collecte");
      return;
    }

    try {
      const orderData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        pickup_location: formData.pickupLocation,
        pickup_date: formData.pickupDate,
        notes: formData.notes,
        status: "pending",

        items: cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
      };

      await ordersApi.postOrder(orderData);

      clearCart();

      toast.success("Votre commande a bien été enregistrée !");

      navigate("/");
    } catch (error) {
      toast.error("Une erreur a été détectée");
      console.error(error);
    }
  }

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
            Validation
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
                <CheckoutInput
                  label="Prénom"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <CheckoutInput
                  label="Nom"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <CheckoutInput
                  label="Nom de l’entreprise (facultatif)"
                  placeholder="Entreprise"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-6">
                <CheckoutInput
                  label="Téléphone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <label className="text-sm font-medium text-[#2B2B2B]">
                  Notes de commande (facultatif)
                </label>

                <textarea
                  placeholder="Notes concernant votre commande..."
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
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
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>

                  <span>
                    {(
                      parseFloat(
                        item.price.replace("€", "").replace(",", "."),
                      ) * item.quantity
                    ).toFixed(2)}{" "}
                    €
                  </span>
                </div>
              ))}
              <div className="mt-6 flex justify-between border-t pt-4">
                <span className="font-semibold">Total</span>

                <span className="font-bold text-[#B88E7D]">
                  {total.toFixed(2)} €
                </span>
              </div>

              <div className="py-6">
                <h4 className="font-medium text-[#2B2B2B]">Lieu de collecte</h4>

                <select
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="mt-4 h-[52px] w-full rounded-[10px] border border-[#D9D9D9] px-4 outline-none"
                >
                  <option value="">Choisissez un lieu</option>

                  <option value="quintaou">
                    Marché de Quintaou, 64600 Anglet
                  </option>

                  <option value="biarritz">
                    Marché des Halles, 64200 Biarritz
                  </option>
                </select>
              </div>
              <div className="pb-6">
                <h4 className="font-medium text-[#2B2B2B]">Jour de collecte</h4>

                <select
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="mt-4 h-[52px] w-full rounded-[10px] border border-[#D9D9D9] px-4 outline-none"
                >
                  <option value="">Choisissez une date</option>

                  <option value="2026-06-13">Samedi 13 juin 2026</option>

                  <option value="2026-06-20">Samedi 20 juin 2026</option>

                  <option value="2026-06-27">Samedi 27 juin 2026</option>
                </select>
              </div>
              <button
                onClick={handleOrder}
                className="mt-6 w-full rounded-lg bg-[#B88E7D] px-6 py-4 text-base font-medium text-white transition hover:opacity-90 cursor-pointer"
              >
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
