import Add from "../pages/add"
import Home from "../pages/home"
import People from "../pages/people"
import UserRoot from "../pages/UserRoot"



const Routes = [
    {
        path: "/",
        element: <UserRoot/>,
        children: [
            {
                path: "/home",
                element: <Home/>,

            },
            {
                path: "/people",
                element: <People/>,

            },
            {
                path: "/add",
                element: <Add />,
            }
        ]
    }
]
export default Routes