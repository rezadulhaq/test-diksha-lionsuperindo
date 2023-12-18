import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../stores/productsActions";
function formatPrice(price) {
    if (typeof price !== "number" || isNaN(price)) {
        return "Harga tidak tersedia";
    }

    return price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
}
function TransactionPage() {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.product.transactions);

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    return (
        <div className="container mx-auto px-16 pb-8 h-full">
            <h1 className="text-4xl font-bold mb-8">Daftar Transaksi</h1>
            {transactions.length === 0 ? (
                <p>Tidak ada transaksi.</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID Transaksi</th>
                            <th className="py-2 px-4 border-b">Harga</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td className="py-2 px-4 border-b">
                                    trnsct-{transaction.transaction_no}
                                </td>
                                
                                <td className="py-2 px-4 border-b">
                                    {formatPrice(transaction.total_amount)}
                                </td>
                                
                                <td className="py-2 px-4 border-b">
                                    <button
                                        // onClick={() => handleDetailClick(transaction.id)}
                                        className="bg-green-500 text-white rounded px-2 py-1 hover:bg-blue-600 transition duration-300"
                                    >
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TransactionPage;
