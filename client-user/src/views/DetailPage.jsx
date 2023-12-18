import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct, postTransaction } from "../stores/productsActions";
import { useNavigate, useParams } from "react-router-dom";

function formatPrice(price) {
  if (typeof price !== "number" || isNaN(price)) {
    return "Harga tidak tersedia";
  }

  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}

function DetailPage() {
  const { id } = useParams();
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [dispatch, id]);

  const handleBeliClick = () => {
    dispatch(postTransaction(product.id, product.product_id, quantity));
    navigate("/daftar-transaksi");
  };

  if (!product) {
    return <p>loading...</p>;
  }

  return (
    <div className="container mx-auto px-16 pb-8 h-full" style={{minHeight:"75vh"}}>
      <div className="grid grid-cols-9 gap-4 py-6">
        <div className="col-span-5">
          <img
            src={product.image_location}
            className="w-full"
            alt="Placeholder"
          />
        </div>
        <div className="col-span-4 text-xl flex flex-col">
          <div>
            <h1 className="text-4xl leading-tight pb-3">{product.name}</h1>
            <p>{formatPrice(product.price)}</p>
            <p>Code: {product.code}</p>
            <p>Stock: {product.qty}</p>
          </div>
          <div className="text-center py-4">
            <div className="flex items-center justify-center space-x-4">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="input input-bordered w-16"
              />
              <button
                className="btn btn-primary"
                onClick={handleBeliClick}
              >
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
