import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import { HomePage, ProductDetailsPage, ProductsPage, ProfilePage } from "./pages"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="products" element={<ProductsPage/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="products/:id" element={<ProductDetailsPage/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App