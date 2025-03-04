import { createBrowserRouter } from "react-router";


import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";
import Searchpage from "../Pages/Searchpage/Searchpage";
import Companypage from "../Pages/Companypage/Companypage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import Designpage from "../Pages/Designpage/Designpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Homepage/>},
            {path: "search", element: <Searchpage/>},
            {path: "design-guide", element: <Designpage/    >},
            {path: "company/:ticker", 
            element: <Companypage/>,
        children: [
            {path: "company-profile", element: <CompanyProfile/>},
            {path: "income-statement", element: <IncomeStatement/>}
        ]}
        ]
    }
])