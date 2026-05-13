import { useState, Link } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((state) => ({ ...state, [name]: value }));

    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/sign-in",
        formData,
      );
      console.log(response.data);
    } catch {
      setFormData((state) => ({
        ...state,
        error: "Email ou mot de passe incorrects",
      }));
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
        <div className="flex gap-6 mb-12">
          <span className="text-2xl font-semibold text-[#9f9f9f]">
            Se connecter
          </span>
          <Link
            to="/register"
            className="text-2xl font-semibold text-black cursor-pointer"
          >
            Créer un compte
          </Link>
        </div>

        <div>{formData.error}</div>
        {/* Input adresse email */}
        <form className="w-full max-w-lg bg-white border border-gray-100 rounded-xl shadow-sm p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-black">
              Adresse e-mail*
            </label>

            <input
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              placeholder="abc@exemple.com"
              className="w-full h-[52px] rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none focus:border-[#b58275] transition-colors"
            />
          </div>
          {/* Input mdp */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-black">
              Mot de passe*
            </label>

            <input
              name="password"
              onChange={handleChange}
              value={formData.password}
              type="password"
              className="w-full h-[52px] rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none focus:border-[#b58275] transition-colors"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* button pour se connecter */}
          <button
            onClick={handleSubmit}
            type="button"
            className="w-full h-[55px] rounded-[5px] bg-[#b58275] text-white text-base font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Se connecter
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
