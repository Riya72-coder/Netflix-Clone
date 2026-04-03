import { Applayout } from "./Applayout/Applayout"
import { About } from "./components/About"
import { Blog } from "./components/Blog"
import { Home } from "./components/Home"
import { Login } from "./components/login"
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"

function App() {

  const PrivateRoutes=()=>{
    const isLogin=localStorage.getItem("isLogin") == "true"
    return isLogin ? <Outlet /> : <Navigate to="/login" />
  }

  const router=createBrowserRouter([

    {
      path:"/login", element:<Login></Login>
    },

    {
      element:<PrivateRoutes />,
      children:[
      {
        path:"/",
        element:<Applayout></Applayout>,
        children:[
          {path:"/",element:<Home></Home>},
          {path:"/about",element:<About></About>},
          {path:"/blog",element:<Blog></Blog>},
        ]
      },
      ]
    }
  ])
  
  return(
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App