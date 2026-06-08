import { useEffect, useState } from "react";
import { ordersApi } from "../../lib/api";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await ordersApi.getOrders();
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchOrders();
  }, []);

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
    <section className="p-8">
      <h1 className="mb-10 text-center text-4xl font-bold text-[#2B2B2B]">
        Commandes
      </h1>

      <div className="space-y-6">
        {orders.map((order) => {
          const total = order.items.reduce(
            (acc, item) => acc + Number(item.unit_price) * item.quantity,
            0,
          );

          return (
            <div
              key={order.id}
              className="rounded-2xl border border-[#E8DDD7] b p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                <p>
                  <strong>Client :</strong> {order.first_name} {order.last_name}
                </p>

                <p>
                  <strong>Téléphone :</strong> {order.phone}
                </p>

                <p>
                  <strong>Retrait :</strong>{" "}
                  {order.pickup_location === "biarritz"
                    ? "Marché des Halles - Biarritz"
                    : "Marché de Quintaou - Anglet"}
                </p>

                <p>
                  <strong>Date :</strong>{" "}
                  {new Date(order.pickup_date).toLocaleDateString("fr-FR")}
                </p>

                <div className="mt-2">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${getStatusStyle(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="mt-4 border-t pt-4">
                <h3 className="mb-3 text-lg font-semibold text-[#B88E7D]">
                  Produits commandés
                </h3>

                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-gray-100 py-2 text-sm"
                  >
                    <span>{item.product_name}</span>

                    <span>x {item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between border-t border-[#E8DDD7] pt-4">
                <span>Total</span>

                <span className="text-xl font-bold text-[#B88E7D]">
                  {total.toFixed(2)} €
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
