import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsApi } from "../../lib/api";
import toast from "react-hot-toast";

export default function AdminEditProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await productsApi.updateProduct(id, formData);
      toast.success("Produit modifié avec succès");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  }

  const { id } = useParams();

  useEffect(() => {
    productsApi
      .getProduct(id)
      .then((product) => {
        setFormData({
          name: product.name || "",
          price: product.price || "",
          categoryId: product.category_id || "",
          allergens: product.allergens || "",
          description: product.description || "",
          image: null,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-[#2B2B2B]">
        Modifier un produit
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
      >
        {" "}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#2B2B2B]">Nom</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-[52px] rounded-lg border border-[#D9D9D9] px-4 outline-none"
            />
          </div>{" "}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#2B2B2B]">Prix </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="h-[52px] rounded-lg border border-[#D9D9D9] px-4 outline-none"
            />
          </div>{" "}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#2B2B2B]">Catégorie </label>

            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="h-[52px] rounded-lg border border-[#D9D9D9] px-4 outline-none"
            >
              <option value="">Choisir une catégorie</option>

              <option value="2e7c26ce-3f8c-4a5f-84a7-27cac91c80b7">
                Tartes
              </option>

              <option value="ca3dc5dc-98ac-42b3-be31-2f5d821d8a60">
                Macarons
              </option>

              <option value="dd79cebd-385d-497d-b672-c3664ed3200a">
                Gâteaux
              </option>

              <option value="bff6393b-9d8d-452d-812e-cddc6ce8660f">
                Viennoiserie
              </option>
            </select>
          </div>{" "}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#2B2B2B]">Allergènes </label>

            <input
              type="text"
              name="allergens"
              value={formData.allergens}
              onChange={handleChange}
              className="h-[52px] rounded-lg border border-[#D9D9D9] px-4 outline-none"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <label className="font-medium text-[#2B2B2B]">Description</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description du produit..."
            className="min-h-[160px] rounded-lg border border-[#D9D9D9] p-4 outline-none resize-none"
          />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <label className="font-medium text-[#2B2B2B]">Image du produit</label>

          <input
            type="file"
            name="image"
            onChange={(event) =>
              setFormData({
                ...formData,
                image: event.target.files[0],
              })
            }
            className="rounded-lg border border-[#D9D9D9] p-3"
          />
        </div>
        <button
          type="submit"
          className="mt-8 w-full rounded-lg bg-[#B88E7D] px-6 py-4 text-white transition hover:opacity-90 cursor-pointer"
        >
          Modifier le produit
        </button>
      </form>
    </>
  );
}
