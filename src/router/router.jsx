import { createBrowserRouter } from "react-router-dom";
import Root from "../leout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        children:[
          {
            path:"/",
            element:<Home></Home>,
            loader:() => fetch('news.json')
          },
          {
            path:'/news/:id',
            element:<News></News>

          },
          {
            path:'/Login',
            element:<Login></Login>
          },
          {
            path:'/Register',
            element:<Register></Register>
          }
        ]
      },
    ]);
    export default router;