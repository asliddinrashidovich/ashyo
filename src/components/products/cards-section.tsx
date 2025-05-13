import { Link, useSearchParams } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa6";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Iproduct } from "@/interfaces";

interface ProductsResponse {
  items: Iproduct[];
}

function CardsSection() {
    const [searchParams] = useSearchParams()
    const paramsBrand = Number(searchParams.get('brand')) || ""
    const fetchCategoryProducts = async () => {
        const res = await axios.get(`https://api.ashyo.fullstackdev.uz/products?brand_id=${paramsBrand}`);
        return res.data;
    };

    const { data: productsData} = useQuery<ProductsResponse>({
        queryKey: ["productsQuery", paramsBrand],
        queryFn: fetchCategoryProducts,
    });
    console.log(productsData)
  return ( 
    <div className="w-full md:w-[calc(100%-220px)] lg:w-[calc(100%-280px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px]">
        {productsData?.items?.map((item: Iproduct) => (
            <div key={item.id}>
                <div className="bg-[#EBEFF3] relative rounded-[8px] w-full h-[280px] mb-[16px] flex justify-center items-center hover">
                    <img className="max-w-[200px]" src={item.image} alt={item.image}/>
                    <button className="cursor-pointer absolute top-5 right-6">
                        <FaRegHeart className="text-[25px] text-[#545D6A]"/>
                    </button>
                </div>
                <p className="mb-[28px] text-[14px] font-[400] leading-[19px] text-[#545D6A] line-clamp-2">{item.description}</p>
                <div className="flex gap-[10px] items-end">
                    <div>
                        <h2 className="mb-[10px] text-[#0A1729] text-[20px] font-[700] leading-[26px]">{item.price.toLocaleString()} uzs</h2>
                        <button className="text-[#F02C96] text-[14px] font-[400] leading-[95%] py-[7px] px-[10px] bg-[#F02C961A] rounded-[3px]">{item.nasiya} / {(item.price/Number(item.nasiya.slice(0,2))).toFixed()} usz</button>
                    </div>
                    <div className="flex gap-[10px]">
                        <Link to={'/'} className="rounded-[6px] w-[50px] h-12 flex justify-center items-center bg-[#EBEFF3] relative">
                            <img src="/home/header/law.svg" alt="law" />
                        </Link>
                        <Link to={'/'} className="rounded-[6px] w-[50px] h-12 flex justify-center items-center bg-[#134E9B] relative">
                            <img src="/products/shopping-bag_white.svg" alt="law" />
                        </Link>
                    </div>
                </div>

            </div>
        ))}
    </div>
  )
}

export default CardsSection