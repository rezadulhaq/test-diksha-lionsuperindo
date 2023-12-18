import { useState } from "react";
import { Link } from "react-router-dom";
function formatPrice(price) {
    return price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
}
const ProductItem = ({ el, idx }) => {
    return (
        <div className="card p-2 h-[85%] bg-base-100" key={idx}>
            <figure>
                <img
                    src={el.image_location}
                    className="h-48 w-92"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body flex-grow">
                <h2 className="card-title w-30 whitespace-normal">{el.name}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-primary">{formatPrice(el.price)} </p>
                    <Link
                        to={{
                            pathname: `/product/${el.id}`,
                        }}
                        state={{ id: el.id }}
                        className="btn btn-primary"
                        style={{ marginLeft: "8px" }}
                    >
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
