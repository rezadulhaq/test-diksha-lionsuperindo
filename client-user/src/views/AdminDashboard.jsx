// AdminHomePage.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTransactions } from "../stores/productsActions";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTransactions())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4">Data Transaksi</h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 py-2 px-4">ID Transaksi</th>
              <th className="border border-gray-300 py-2 px-4">Tanggal</th>
              <th className="border border-gray-300 py-2 px-4">Total</th>
            </tr>
          </thead>
          
        </table>
      </div>
    </div>
  );
};

export default AdminHomePage;
