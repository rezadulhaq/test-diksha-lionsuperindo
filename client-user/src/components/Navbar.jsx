import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100" style={{ backgroundColor: "#1d1d1f", height: 100 }}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="flex items-center">
          <img
            src=""
            width="60"
            alt=""
            className="mr-2"
          />
          <span className="text-xl text-white font-semibold">SuperIndo</span>
        </Link>

        <div className="lg:flex hidden">
          <h1 className="text-white text-2xl">
            Lebih Segar, Lebih Hemat, Lebih Dekat
          </h1>
        </div>

        <div className="lg:flex hidden items-center">
          {userRole === "customer" && (
            <>
              <Link to="/daftar-transaksi" className="text-white mx-4 hover:underline">
                Transactions
              </Link>
              <span
                onClick={handleLogout}
                className="text-white mx-4 hover:underline cursor-pointer"
              >
                Logout
              </span>
            </>
          )}

          {userRole === "administrator" && (
            <>
              <Link to="/data-products" className="text-white mx-4 hover:underline">
                Data Products
              </Link>
              <Link to="/data-categories" className="text-white mx-4 hover:underline">
                Data Categories
              </Link>
              <Link to="/data-transactions" className="text-white mx-4 hover:underline">
                Data Transactions
              </Link>
              <button onClick={handleLogout} className="btn mx-4 bg-red-600 hover:bg-red-500 text-white">
                Logout
              </button>
            </>
          )}

          {!userRole && (
            <Link to="/login" className="btn mx-4 bg-sky-600 hover:bg-sky-500 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
