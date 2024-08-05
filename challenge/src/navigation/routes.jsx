import { Detail } from "../screens/detail";
import { Home } from "../screens/home";

export const routes =[
    
    {
        path: '/home',
        component: <Home />,
        name: "home"
    },
    {
        path: '/detail/:id',
        component: <Detail />,
        name: "detail"
    },
    {
        path: '*',
        component: <Home />,
        name: "home"
    },
]