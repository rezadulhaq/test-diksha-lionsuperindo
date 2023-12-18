// AdminProductList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, deleteProduct } from "../stores/productsActions";
import { Link } from "react-router-dom";

const AdminProductList = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

//   const handleDelete = (productId) => {
//     dispatch(deleteProduct(productId));
//   };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Daftar Produk</h2>

      {/* Tombol Tambah Produk */}
      <Link to="/admin/add" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Tambah Produk
      </Link>

      {/* Tabel Daftar Produk */}
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 py-2 px-4">ID</th>
            <th className="border border-gray-300 py-2 px-4">Nama Produk</th>
            <th className="border border-gray-300 py-2 px-4">Harga</th>
            <th className="border border-gray-300 py-2 px-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 py-2 px-4">{product.id}</td>
              <td className="border border-gray-300 py-2 px-4">{product.name}</td>
              <td className="border border-gray-300 py-2 px-4">{product.price}</td>
              <td className="border border-gray-300 py-2 px-4 space-x-2">
                {/* Tombol Edit Produk */}
                <Link
                  to={`/admin/edit/${product.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                {/* Tombol Hapus Produk */}
                <button
                //   onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
