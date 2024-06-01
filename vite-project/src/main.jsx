import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./services/state/store.js";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { HomePage } from "./pages/HomePage/homePage.jsx";
import { ShopPage } from "./pages/ShopPage/shopPage.jsx";

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/shop",
    element:<ShopPage/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router}>

  </RouterProvider>
  </Provider>
);
