import { useRoutes } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import Authrouter from "../../components/Authentication/Authrouter";

export const Routes = () => {
    let routes = useRoutes([
        {
            path: "*", element: <Layout />,
        },
        {
            path: "/auth/*", element: <Authrouter/> ,
            children: [

            ]
        },
       
    ]);
    return routes;
}

