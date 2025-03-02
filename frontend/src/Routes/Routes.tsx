import { createBrowserRouter } from "react-router";


import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";
import Searchpage from "../Pages/Searchpage/Searchpage";
import Companypage from "../Pages/Companypage/Companypage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Homepage/>},
            {path: "search", element: <Searchpage/>},
            {path: "company/:ticker", element: <Companypage/>}
        ]
    }
])