import { CardsSection, FilterSection } from "@/components"
import { Link } from "react-router-dom"

function ProductsPage() {
  return (
    <div className="px-5 md:px-10 pb-[153px]">
        <div className="main-container">
            <div className="flex gap-[15px] items-center pt-[18px] pb-8">
                <Link to={"/"} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">Bosh sahifa  /</Link>
                <Link to={"/products"} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">Mahsuotlar   /</Link>
            </div>
            <div className=" flex gap-[21px] items-start">
                <FilterSection/>
                <CardsSection/>
            </div>
        </div>
    </div>
  )
}

export default ProductsPage