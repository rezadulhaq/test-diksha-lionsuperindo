// import logo from "./logo.svg";
// import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./stores";
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}

export default App;
