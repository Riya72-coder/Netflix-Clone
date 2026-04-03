import { Applayout } from "./Applayout/Applayout"
import { About } from "./components/About"
import { Blog } from "./components/Blog"
import { Home } from "./components/Home"
import{createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Applayout></Applayout>,
      children:[
        {path:"/",element:<Home></Home>},
        {path:"/about",element:<About></About>},
        {path:"/blog",element:<Blog></Blog>},
      ]
    },
  ])
  
  return(
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App