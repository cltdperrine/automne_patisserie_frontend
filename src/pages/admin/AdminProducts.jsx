import { useEffect, useState } from "react";
import { productsApi } from "../../lib/api";
import formatPrice from "../../utils/prices";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

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

  async function handleDelete(productId) {
    const confirmed = window.confirm(
      "Êtes-vous sûr de vouloir supprimer ce produit?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await productsApi.deleteProduct(productId);

      setProducts(products.filter((product) => product.id !== productId));
      alert("Produit supprimé avec succès");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="relative flex items-center justify-end">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-[#2B2B2B]">
          Gestion des produits
        </h1>

        <Link
          to="/admin/products/add"
          className="rounded-lg bg-[#B88E7D] px-5 py-3 text-white transition hover:opacity-90"
        >
          Ajouter un produit
        </Link>
      </div>
      <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
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
                Stock
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
                            : `${import.meta.env.VITE_API_URL}${product.image_url}`
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
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    En stock
                  </span>
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
    </>
  );
}
