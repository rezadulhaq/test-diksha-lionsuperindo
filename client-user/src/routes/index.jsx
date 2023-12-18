import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../views/HomePage";
import DetailPage from "../views/DetailPage";
import TransactionListPage from "../views/TransactionListPage";
import AddProductPage from "../views/AddProductPage";
import Login from "../views/LoginPage";
import { createBrowserHistory } from "history";
import Register from "../views/RegisterPage";
import AdminProductList from "../views/AdminProductList";
import AdminCategoryList from "../views/AdminCategoryList";
import AdminTransactionList from "../views/AdminTransactionList";
const history = createBrowserHistory();

const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.getItem("access_token")) {
                return redirect("/login");
            }
            return null;
        },
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "product/:id",
                element: <DetailPage />,
                loader: () => {
                    const userRole = localStorage.getItem("role");
                    if (userRole !== "customer") {
                        return redirect("/");
                    }
                    return null;
                },
            },
            {
                path: "daftar-transaksi",
                element: <TransactionListPage />,
                loader: () => {
                    const userRole = localStorage.getItem("role");
                    if (userRole !== "customer") {
                        return redirect("/");
                    }
                    return null;
                },
            },
            {
                path: "add-product",
                element: <AddProductPage />,
                loader: () => {
                    const userRole = localStorage.getItem("role");
                    if (userRole !== "administrator") {
                        return redirect("/");
                    }
                    return null;
                },
            },
            {
                path: "data-products",
                element: <AdminProductList />,
                loader: () => {
                    const userRole = localStorage.getItem("role");
                    if (userRole !== "administrator") {
                        return redirect("/");
                    }
                    return null;
                },
            },
            {
                path: "data-categories",
                element: <AdminCategoryList />,
                loader: () => {
                    const userRole = localStorage.getItem("role");
                    if (userRole !== "administrator") {
                        return redirect("/");
                    }
                    return null;
                },
            },
            {
                path: "data-transactions",
                element: <AdminTransactionList />,
                loader: () => {
                    const userRole = localStorage.getItem("role");
                    if (userRole !== "administrator") {
                        return redirect("/");
                    }
                    return null;
                },
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
        loader: () => {
            if (localStorage.getItem("access_token")) {
                return history.push("/");
            }
            return null;
        },
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router;
