import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";


const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "",
                element:<Home/>
            },
            {
                path: "*",
                element:<NotFound/>
            },
                       {
                path: "/resume",
                element:<Resume/>
            }
         

        ]
    }
])
export default myRouter