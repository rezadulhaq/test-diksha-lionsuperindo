import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../views/HomePage";
import DetailPage from "../views/DetailPage";
import TransactionListPage from "../views/TransactionListPage";
import AddProductPage from "../views/AddProductPage";
import Login from "../views/LoginPage";
import { createBrowserHistory } from "history";
import Register from "../views/RegisterPage";
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
                // Loader untuk "product/:id" hanya dijalankan jika role adalah "customer"
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
                // Loader untuk "daftar-transaksi" hanya dijalankan jika role adalah "customer"
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
                // Loader untuk "add-product" hanya dijalankan jika role adalah "admin"
                loader: () => {
                    const userRole = localStorage.getItem("role");
                    if (userRole !== "admin") {
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
