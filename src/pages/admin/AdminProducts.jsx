import { useEffect, useState } from "react";
import { productsApi } from "../../lib/api";
import formatPrice from "../../utils/prices";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsApi
      .getProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleDelete(productId) {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-[#2B2B2B]">
            Supprimer ce produit ?
          </p>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                try {
                  await productsApi.deleteProduct(productId);
                  setProducts((prev) =>
                    prev.filter((product) => product.id !== productId),
                  );
                  toast.success("Produit supprimé avec succès");
                } catch (error) {
                  console.error(error);
                  toast.error("Erreur lors de la suppression");
                }
              }}
              className="rounded bg-[#B88E7D] px-3 py-1 text-sm text-white cursor-pointer"
            >
              Confirmer
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="rounded border border-gray-200 px-3 py-1 text-sm text-[#2B2B2B] cursor-pointer"
            >
              Annuler
            </button>
          </div>
        </div>
      ),
      { duration: Infinity },
    );
  }

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-3xl font-bold text-[#2B2B2B]">
          Gestion des produits
        </h1>

        <div className="mt-8 flex justify-end">
          <Link
            to="/admin/products/add"
            className="rounded-lg bg-[#B88E7D] px-5 py-3 text-white transition hover:opacity-90"
          >
            Ajouter un produit
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="px-6 py-4 text-sm font-medium text-[#9F9F9F]">
                  Produit
                </th>

                <th className="px-6 py-4 text-sm font-medium text-[#9F9F9F]">
                  Prix
                </th>

                <th className="px-6 py-4 text-sm font-medium text-[#9F9F9F]">
                  Catégorie
                </th>

                <th className="px-6 py-4 text-sm font-medium text-[#9F9F9F]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-50">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          product.image_url
                            ? product.image_url.startsWith("http")
                              ? product.image_url
                              : `${import.meta.env.VITE_API_URL.replace("/api", "")}${product.image_url}`
                            : "/placeholder.jpg"
                        }
                        alt={product.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />

                      <span className="font-medium text-[#2B2B2B]">
                        {product.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-[#2B2B2B]">
                    {formatPrice(product.price)}
                  </td>

                  <td className="px-6 py-5 text-[#2B2B2B]">
                    {product.category_name}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/admin/products/edit/${product.id}`}
                        className="flex items-center gap-2 rounded-lg border border-[#B88E7D] bg-white px-3 py-2 text-sm font-medium text-[#B88E7D] cursor-pointer"
                      >
                        <Pencil className="h-4 w-4" />
                        Modifier
                      </Link>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="flex items-center gap-2 rounded-lg bg-[#B88E7D] px-3 py-2 text-sm font-medium text-white transition hover:opacity-90 cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
