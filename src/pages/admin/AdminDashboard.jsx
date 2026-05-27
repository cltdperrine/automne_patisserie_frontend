export default function AdminDashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#2B2B2B] text-center">
        Dashboard
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#9F9F9F]">Commandes</p>

          <h2 className="mt-4 text-3xl font-bold text-[#2B2B2B]">18</h2>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#9F9F9F]">Produits</p>

          <h2 className="mt-4 text-3xl font-bold text-[#2B2B2B]">24</h2>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#9F9F9F]">Catégories</p>

          <h2 className="mt-4 text-3xl font-bold text-[#2B2B2B]">6</h2>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#9F9F9F]">Chiffre d'affaires</p>

          <h2 className="mt-4 text-3xl font-bold text-[#2B2B2B]">420€</h2>
        </div>
      </div>
      <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-[#2B2B2B]">
          Commandes récentes
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="pb-4 font-medium text-[#9F9F9F]">Commande</th>

                <th className="pb-4 font-medium text-[#9F9F9F]">Client</th>

                <th className="pb-4 font-medium text-[#9F9F9F]">Total</th>

                <th className="pb-4 font-medium text-[#9F9F9F]">Statut</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-50">
                <td className="py-5 text-[#2B2B2B]">#1024</td>

                <td className="py-5 text-[#2B2B2B]">Julien Martin</td>

                <td className="py-5 text-[#2B2B2B]">24 €</td>

                <td className="py-5">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    En préparation
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-5 text-[#2B2B2B]">#1025</td>

                <td className="py-5 text-[#2B2B2B]">Victoria Dupré</td>

                <td className="py-5 text-[#2B2B2B]">18 €</td>

                <td className="py-5">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    En préparation
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-5 text-[#2B2B2B]">#1026</td>

                <td className="py-5 text-[#2B2B2B]">Johnny Bigoud</td>

                <td className="py-5 text-[#2B2B2B]">6 €</td>

                <td className="py-5">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                    Annulée
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-5 text-[#2B2B2B]">#1027</td>

                <td className="py-5 text-[#2B2B2B]">Céline Dion</td>

                <td className="py-5 text-[#2B2B2B]">14 €</td>

                <td className="py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Collectée
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-5 text-[#2B2B2B]">#1028</td>

                <td className="py-5 text-[#2B2B2B]">Sophie Pierrot</td>

                <td className="py-5 text-[#2B2B2B]">24 €</td>

                <td className="py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Collectée
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
