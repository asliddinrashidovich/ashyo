import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import { HomePage, NotFoundPage, ProductDetailsPage, ProductsPage, ProfilePage, ResetPassword, VerifyOtp } from "./pages"
import { AccountDetails, Address, MyProducts, TrackOrder, Wishlist } from "./components"
import { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

function App() {
  const isAuth = () => {
    return localStorage.getItem('user')
  }
  function ProtectedRoute({ children}: ProtectedRouteProps) {
    if(isAuth()) {
      return children
    } else {
      return <NotFoundPage/>
    }
  }
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="products" element={<ProductsPage/>}/>
        <Route path="products/:id" element={<ProductDetailsPage/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="profile/" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><AccountDetails/></ProtectedRoute>}/>
          <Route path="my-products" element={<ProtectedRoute><MyProducts/></ProtectedRoute>}/>
          <Route path="address" element={<ProtectedRoute><Address/></ProtectedRoute>}/>
          <Route path="wishlist" element={<ProtectedRoute><Wishlist/></ProtectedRoute>}/>
          <Route path="track-order" element={<ProtectedRoute><TrackOrder/></ProtectedRoute>}/>
        </Route>
        <Route path="forgot-password" element={<ResetPassword/>}/>
        <Route path="forgot-password/verify-otp" element={<VerifyOtp/>}/>
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