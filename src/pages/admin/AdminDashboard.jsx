import { useEffect, useState } from "react";
import { ordersApi, productsApi, categoriesApi } from "../../lib/api";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const ordersData = await ordersApi.getOrders();
        const productsData = await productsApi.getProducts();
        const categoriesData = await categoriesApi.getCategories();

        setOrders(ordersData);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const revenue = orders.reduce((total, order) => {
    const orderTotal = order.items.reduce(
      (sum, item) => sum + Number(item.unit_price) * item.quantity,
      0,
    );

    return total + orderTotal;
  }, 0);

  const recentOrders = orders.slice(0, 5);

  function getStatusStyle(status) {
    switch (status) {
      case "fulfilled":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-orange-100 text-orange-700";
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-[#2B2B2B] text-center">
        Dashboard
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#9F9F9F]">Commandes</p>

          <h2 className="mt-4 text-3xl font-bold text-[#2B2B2B]">
            {orders.length}
          </h2>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#9F9F9F]">Produits</p>

          <h2 className="mt-4 text-3xl font-bold text-[#2B2B2B]">
            {products.length}
          </h2>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#9F9F9F]">Catégories</p>

          <h2 className="mt-4 text-3xl font-bold text-[#2B2B2B]">
            {categories.length}
          </h2>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-[#9F9F9F]">Chiffre d'affaires</p>

          <h2 className="mt-4 text-3xl font-bold text-[#2B2B2B]">
            {revenue.toFixed(2)} €
          </h2>
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
              {recentOrders.map((order) => {
                const total = order.items.reduce(
                  (sum, item) => sum + Number(item.unit_price) * item.quantity,
                  0,
                );

                return (
                  <tr key={order.id} className="border-b border-gray-50">
                    <td className="py-5 text-[#2B2B2B]">
                      #{order.id.slice(0, 6)}
                    </td>

                    <td className="py-5 text-[#2B2B2B]">
                      {order.first_name} {order.last_name}
                    </td>

                    <td className="py-5 text-[#2B2B2B]">
                      {total.toFixed(2)} €
                    </td>

                    <td className="py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${getStatusStyle(
                          order.status,
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
