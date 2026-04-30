export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <div className="flex gap-6 mb-12">
        <span className="text-2xl font-semibold text-[#9f9f9f]">
          Se connecter
        </span>
        <span className="text-2xl font-semibold text-black cursor-pointer">
          Créer un compte
        </span>
      </div>

      <div className="w-full max-w-lg bg-white border border-gray-100 rounded-xl shadow-sm p-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-black">
            Nom d'utilisateur ou adresse e-mail*
          </label>
        </div>{" "}
        <input
          type="text"
          className="w-full h-[52px] rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none focus:border-[#b58275] transition-colors"
          placeholder="abc@exemple.com"
        />
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-black">
            Mot de passe*
          </label>
        </div>{" "}
        <input
          type="text"
          className="w-full h-[52px] rounded-[10px] border border-[#9f9f9f] px-4 text-base outline-none focus:border-[#b58275] transition-colors"
        />
        <button className="w-full h-[55px] rounded-[5px] bg-[#b58275] text-white text-base font-medium hover:opacity-90 transition-opacity cursor-pointer">
          Se connecter
        </button>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 accent-[#b58275] cursor-pointer"
            />
            <label htmlFor="rembember" className="text-sm text-black ">
              Se souvenir de moi
            </label>
          </div>
          <span className="text-sm text-black cursor-pointer hover:underline">
            Mot de passe oublié
          </span>
        </div>
      </div>
    </div>
  );
}
