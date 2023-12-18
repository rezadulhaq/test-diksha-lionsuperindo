import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { fetchCategories, fetchProduct } from "../stores/productsActions";

function formatPrice(price) {
    return price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
}

function HomePage() {
    let products = useSelector((state) => state.product.products);
    let categories = useSelector((state) => state.product.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        // setTimeout(() => {
        dispatch(fetchProduct());
        dispatch(fetchCategories());
        // }, 500);
    }, []);

    if (!categories) {
        return <p> loading... </p>;
    }

    return (
        <div style={{ backgroundColor: "#252525", height: "100%" }}>
            <div className="container mx-auto flex flex-col gap-3">
                {/* top section */}
                <div className="container mx-auto flex flex-row gap-3">
                    <div className="basis-2/3 bg-sky-200">
                        <img
                            src="https://apps.superindo.co.id/web/image/37625/Screenshot%20%28458%29.png"
                            alt="Aiger"
                            style={{ height: 600 }}
                        />
                    </div>
                    <div className="basis-1/3">
                        <div className="flex flex-col ... gap-3">
                            <div
                                className="bg-sky-500"
                                style={{
                                    height: 200,
                                }}
                            >
                                <img
                                    src="https://pbs.twimg.com/media/FR9aaBjXMAAOQQS.jpg"
                                    alt="Aiger"
                                />
                            </div>
                            <div className="bg-sky-700">
                                <img
                                    src="https://www.superindo.co.id/korporasi-keberlanjutan/images/photo/Super_Indo_Cimahi_2.jpg"
                                    alt="Aiger"
                                    style={{
                                        height: 380,
                                        width: 500,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* category section */}
                <div className="flex flex-col ... gap-3">
                    <div
                        style={{
                            height: 50,
                        }}
                    >
                        <h1 className="text-white text-4xl font-bold">
                            Category
                        </h1>
                    </div>
                    <div
                        className="bg-primary-content flex flex-row justify-around items-center gap-2"
                        style={{
                            height: 200,
                        }}
                    >
                        {categories.map(function (el, idx) {
                            return (
                                <div
                                    className="card w-40 h-40 bg-base-80 shadow-xl image-full"
                                    key={idx}
                                >
                                    <figure>
                                        <img
                                            src="https://www.superindo.co.id/korporasi-keberlanjutan/upload/images/LOGO%20SUPER%20INDO%20PNG.PNG"
                                            alt={el.name}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-center">
                                            <Link
                                                to={`/categories/${el.id}`}
                                                className="btn glass"
                                            >
                                                {el.name}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* product section */}
                <div className="flex flex-col ... gap-3">
                    <div
                        style={{
                            height: 50,
                        }}
                    >
                        <h3 className="text-white text-4xl font-bold">
                            Product
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {products?.map((el, idx) => (
                            // <ProductItem data={el} key={idx} />
                            <div
                                className="card p-2 h-[85%] bg-base-100"
                                key={idx}
                            >
                                <figure>
                                    <img
                                        src={el.image_location}
                                        className="h-48 w-92"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body flex-grow">
                                    <h2 className="card-title w-30 whitespace-normal">
                                        {el.name}
                                    </h2>
                                    <div className="flex justify-between items-center">
                                        <p className="text-primary">
                                            {formatPrice(el.price)}{" "}
                                        </p>
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
