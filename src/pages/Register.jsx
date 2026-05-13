import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
        <div className="flex gap-6 mb-12">
          <Link
            to="/login"
            className="text-2xl font-semibold text-left text-black cursor-pointer"
          >
            Se connecter
          </Link>
          <span className="text-2xl font-semibold text-[#9f9f9f]">
            Créer un compte
          </span>
        </div>
        {/* Input adresse email */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white border border-gray-100 rounded-xl shadow-sm p-8 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-black">
              Votre e-mail*
            </label>
            <input
              name="email"
              value={formData.email}
              type="email"
              onChange={handleChange}
              className="w-full h-[52px] rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none focus:border-[#b58275] transition-colors"
              placeholder="abc@exemple.com"
            />
          </div>
          {/* Input mdp */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-black">
              Mot de passe*
            </label>
            <input
              name="password"
              value={formData.password}
              type="password"
              onChange={handleChange}
              className="w-full h-[52px] rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none focus:border-[#b58275] transition-colors"
            />
          </div>

          {/* confirmation mdp */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-black">
              Confirmation du mot de passe*
            </label>

            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              type="password"
              onChange={handleChange}
              className="w-full h-[52px] rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none focus:border-[#b58275] transition-colors"
            />
          </div>
          {/* button pour s'inscrire' */}
          <button
            type="submit"
            className="w-full h-[55px] rounded-[5px] bg-[#b58275] text-white text-base font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Créer un compte
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
