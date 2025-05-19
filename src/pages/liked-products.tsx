import { Iproduct, userData } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function LikedProducts() {
    const userDataRaw = localStorage.getItem('user');
    const [isLikesItem, setIsLikedItem] = useState(false)

    const user: userData | null = userDataRaw ? JSON.parse(userDataRaw) : null;
    const fetchLikedProducts = async () => {
        const res = await axios.get(`https://api.ashyo.fullstackdev.uz/like/user/${user?.id}`);
        return res.data;
    };

    const { data: productsData} = useQuery<Iproduct[]>({
        queryKey: ["liked-products", isLikesItem],
        queryFn: fetchLikedProducts,
    });

    const addProductLike = async (id: number) => {
        await axios.post(`https://api.ashyo.fullstackdev.uz/like/toggle`, {userId: user?.id, productId: id}).then((res) => {
            console.log(res)
            setIsLikedItem((prev) => prev ? false : true)
        }).catch((err) => {
            console.log(err)
        })
    };
    console.log(productsData)
  return (
    <div className="px-5 md:px-10 pb-[100px]">
      <div className="main-container">
        <div className="flex gap-[15px] items-center pt-[18px] pb-[27px]">
          <Link to={"/"} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">Bosh sahifa  /</Link>
          <Link to={"/liked-products"} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">Sevimli Mahsulotlar   /</Link>
        </div>
        <h2 className="text-[32px] font-[700] leading-[130%] mb-8">Sevimli Mahsulotlar</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[40px]">
            {productsData?.map((item: Iproduct) => (
                <div key={item.id}>
                    <div className="bg-[#EBEFF3] relative rounded-[8px] w-full h-[280px] mb-[16px] flex justify-center items-center hover">
                        <img className="max-w-[200px]" src={item.image} alt={item.image}/>
                        <button onClick={() => addProductLike(item.id)} className="cursor-pointer absolute top-5 right-6">
                            {item.is_liked ? <FaHeart className="text-[25px] text-[red]"/> : <FaRegHeart className="text-[25px] text-[#545D6A]"/>}
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
      </div>
    </div>
  )
}

export default LikedProducts