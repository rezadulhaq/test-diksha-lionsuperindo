// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchDetailCategory } from "../stores/productsActions";
// import { Link } from "react-router-dom";
// function CategoriesPage() {
//     const { id } = useParams();
//     let products = useSelector((state) => state.product.products);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         setTimeout(() => {
//             dispatch(fetchDetailCategory(id));
//         }, 500);
//     }, []);

//     if (!products.length) {
//         return <p> loading... </p>;
//     }
//     return (
//         <div className="container mx-auto px-16 py-2 h-full">
//             <div className="grid grid-cols-5 gap-4 py-4">
//                 <div className="col-start-1 col-end-6 pb-4">
//                     <h1 className="text-3xl">{products[0].category.name}</h1>
//                 </div>
//                 <div className="col-start-1 col-end-2">
//                     {products.length} PRODUK
//                 </div>
//                 <div className="col-end-6 col-span-1 text-right">
//                     <div className="flex gap-2">
//                         <div className="flex-none">Urutkan dari:</div>
//                         <div className="flex-none">
//                             <select
//                                 className="select select-xs w-full max-w-xs"
//                                 name="sort"
//                                 id="sort"
//                             >
//                                 <option value="1">Most popular</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//                 {products.map((el, idx) => {
//                     return (
//                         <Link
//                             to={`/${el.slug}`}
//                             state={{ id: el.id }}
//                             key={idx}
//                         >
//                             <div className="card w06 bg-base-100 shadow-xl">
//                                 <figure>
//                                     <img src={el.mainImg} alt="Jacket" />
//                                 </figure>
//                                 <div className="card-body p-3">
//                                     <p className="uppercase">{el.name}</p>
//                                     <h2 className="card-title">
//                                         Rp {el.price}
//                                     </h2>
//                                 </div>
//                             </div>
//                         </Link>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default CategoriesPage;
