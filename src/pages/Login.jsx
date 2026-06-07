import { useState } from "react";
import { Link } from "react-router-dom";
import { authApi } from "../lib/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await authApi.signIn(formData);

      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success("Connexion réussie !");

      if (!formData.email.trim()) {
        toast.error("Veuillez renseigner votre adresse email");
        return;
      }

      if (!formData.password.trim()) {
        toast.error("Veuillez renseigner votre mot de passe");
        return;
      }

      if (response.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Email ou mot de passe incorrect",
      );
    }
  }

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
        <div className="flex gap-6 mb-12">
          <span className="text-2xl font-semibold text-[#9f9f9f]">
            Se connecter
          </span>
          <Link
            to="/auth/register"
            className="text-2xl font-semibold text-black cursor-pointer"
          >
            Créer un compte
          </Link>
        </div>

        {/* Input adresse email */}
        <form
          className="w-full max-w-lg bg-white border border-gray-100 rounded-xl shadow-sm p-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
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
          {/* button pour se connecter */}
          <button
            type="submit"
            className="w-full h-[55px] rounded-[5px] bg-[#b58275] text-white text-base font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Se connecter
          </button>
        </form>
      </div>
    </>
  );
}
