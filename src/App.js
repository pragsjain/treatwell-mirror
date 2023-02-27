import ReactDOM, { createRoot } from "react-dom/client";
import HomePage from "./components/HomePage.js";
import Search from "./components/Search";
import Error from "./components/Error.js";

import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";


function AppLayout () {
  return (
        <>
            <Outlet/>
        </>
  )
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/search",
            element: <Search/>,
        }
      ]
    }

  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)
