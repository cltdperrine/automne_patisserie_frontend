import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { useState } from "react";
import FeaturesBanner from "../sections/FeaturesBanner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((state) => ({ ...state, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    alert("Message envoyé!");
  }

  return (
    <>
      {/* Banner */}
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Contact"
          className="h-[280px] w-full object-cover md:h-[340px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#FFFFFF] md:text-5xl">
            Contact
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#FFFFFF] md:text-base">
            <Link to="/" className="transition hover:text-gray-500">
              Accueil
            </Link>
            <span className="text-[#FFFFFF]">&gt;</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#2B2B2B] md:text-5xl">
              Restons en contact
            </h2>
            <p className="mt-2 text-base text-[#9F9F9F] md:text-lg">
              Une demande particulière? Un évènement? Une question?
              <br /> Vous êtes au bon endroit
            </p>
          </div>
          {/* Grid */}
          <div className="grid md:grid-cols-2 ">
            {/* Left */}
            <div className="flex flex-col gap-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-[#6B240F]" />

                <div>
                  <h3 className="text-lg font-semibold text-[#2B2B2B]">
                    Adresse
                  </h3>

                  <p className="mt-1 text-[#9F9F9F]">
                    12 rue des Lilas <br />
                    64100 Bayonne
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-[#6B240F]" />

                <div>
                  <h3 className="text-lg font-semibold text-[#2B2B2B]">
                    Horaires
                  </h3>

                  <p className="mt-1 text-[#9F9F9F]">
                    Lundi–Vendredi : 11:00 - 18:00 <br />
                    Samedi–Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <form
              className="flex w-full max-w-lg flex-col gap-6"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium text-black">
                  Votre nom
                </label>

                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Abc"
                  className="h-[52px] w-full rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none transition-colors focus:border-[#b58275]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium text-black">
                  Votre e-mail
                </label>

                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="abc@exemple.com"
                  className="h-[52px] w-full rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none transition-colors focus:border-[#b58275]"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium text-black">
                  Sujet de votre message
                </label>

                <input
                  name="subject"
                  onChange={handleChange}
                  type="text"
                  placeholder="Ceci est optionnel"
                  className="h-[52px] w-full rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none transition-colors focus:border-[#b58275]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium text-black">
                  Message
                </label>

                <textarea
                  name="message"
                  onChange={handleChange}
                  className="min-h-[180px] w-full rounded-[10px] border border-[#9f9f9f] px-4 py-3 text-base outline-none transition-colors focus:border-[#b58275]"
                />
              </div>
              {/* Button */}
              <button
                type="submit"
                className="w-fit cursor-pointer rounded-[5px] bg-[#b58275] px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
      <FeaturesBanner />
    </>
  );
}
