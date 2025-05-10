import { Header, HeaderCategories, HeaderTop } from "@/components"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
        <HeaderTop/>
        <Header/>
        <HeaderCategories/>
        <main>
          <Outlet/>
        </main>
    </>
  )
}

export default MainLayout