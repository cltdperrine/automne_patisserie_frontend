import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsApi, categoriesApi } from "../../lib/api";
import toast from "react-hot-toast";

export default function AdminEditProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    categoryId: "",
    allergens: "",
    description: "",
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

    if (!formData.name.trim()) {
      toast.error("Veuillez renseigner un nom de produit");
      return;
    }

    if (!formData.price || Number(formData.price) <= 0) {
      toast.error("Veuillez renseigner un prix valide");
      return;
    }

    if (!formData.categoryId) {
      toast.error("Veuillez choisir une catégorie");
      return;
    }

    if (!formData.description.trim()) {
      toast.error("Veuillez renseigner une description");
      return;
    }

    try {
      const { image, ...productData } = formData;
      await productsApi.updateProduct(id, productData);
      toast.success("Produit modifié avec succès");
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
    }
  }

  const { id } = useParams();
  const [categories, setCategories] = useState([]);

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

    categoriesApi
      .getCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
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

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
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
