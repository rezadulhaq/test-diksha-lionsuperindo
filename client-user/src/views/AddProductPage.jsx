// AddProductPage.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../stores/productsActions";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addProduct(productData));

    navigate("/");
  };

  return (
    <div className="container mx-auto px-16 pb-8 h-full">
      <h1 className="text-4xl font-semibold mb-4">Tambah Produk Baru</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-xl font-medium text-gray-600">
            Nama Produk
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-xl font-medium text-gray-600">
            Harga
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-xl font-medium text-gray-600">
            Deskripsi
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          />
        </div>

        {/* Tambahkan properti lain sesuai kebutuhan */}

        <div className="text-center py-4">
          <button type="submit" className="btn btn-accent">
            Tambah Produk
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
