import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BaseLayout = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Navbar style={{ flex: "0 0 auto" }} />
            <Outlet style={{ flex: "1 0 auto" }} />
            <Footer style={{ flex: "0 0 auto" }} />
        </div>
    );
};

export default BaseLayout;
