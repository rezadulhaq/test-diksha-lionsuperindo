import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../stores/productsActions"; 
import { useNavigate, Link } from "react-router-dom";

const Register = () => { 
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => { 
        if (password !== confirmPassword) {
            console.error("Password dan konfirmasi password tidak sesuai");
            return;
        }

        dispatch(register({ username, password })) 
            .then(() => {
                navigate("/"); 
            })
            .catch((error) => {
                console.error("Registration error:", error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                        Username:
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleRegister}
                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
                >
                    Register
                </button>
                <div className="text-center mt-4">
                    <span className="text-gray-600">Sudah punya akun? </span>
                    <Link to="/login" className="text-blue-500 hover:text-blue-700">
                        Login disini
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register; 
