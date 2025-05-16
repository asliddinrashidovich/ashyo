import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Iproduct } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import axios from "axios";
import { Link, useParams } from "react-router-dom"

const releteDImagesArray = [0,0,0,0]

function ProductDetails() {
  const {id} = useParams()
  const fetchCategoryProducts = async () => {
      const {data} = await axios.get(`https://api.ashyo.fullstackdev.uz/products/${id}`);
      return data;
  };

  const { data: productsData} = useQuery<Iproduct | undefined>({
      queryKey: ["productsDetails"],
      queryFn: fetchCategoryProducts,
  });
  console.log(productsData)
  return (
    <div className="px-5 md:px-10 pb-[100px]">
      <div className="main-container">
        <div className="flex gap-[15px] items-center pt-[18px] pb-[27px]">
          <Link to={"/"} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">Bosh sahifa  /</Link>
          <Link to={"/products"} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">Mahsuotlar   /</Link>
          <Link to={`/products/${productsData?.id}`} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">{productsData?.name}   /</Link>
        </div>
        <h2 className="text-[32px] font-[700] leading-[130%] mb-8">{productsData?.name}</h2>
        <div className="flex flex-col lg:flex-row gap-8 mb-[80px]">
          <div className="w-full lg:w-[60%] flex gap-6">
            <div className="shrink-0 flex flex-col gap-[10px]">
              {releteDImagesArray.map((_item: number, i: number) => (
                <div key={i} className="w-[120px] h-[100px] bg-[#EBEFF3] rounded-[6px] cursor-pointer flex justify-center items-center">
                  {productsData?.image && <img src={productsData?.image} className="w-[60px]" alt="samsung" />}
                  {!productsData?.image && <Skeleton.Image active />}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center relative bg-[#EBEFF3] rounded-[10px] w-full">
              <div className="absolute w-full flex justify-between items-center">
                <button className="cursor-pointer">
                  <img src="/products/left.svg" alt="left" />
                </button>
                <button className="cursor-pointer">
                  <img src="/products/right.svg" alt="right" />
                </button>
              </div>
              <div className="absolute top-[26px] right-[31px] flex gap-[20px]">
                <button className="cursor-pointer">
                  <img src="/products/la_balance-scale-right.svg" alt="la_balance" />
                </button>
                <button className="cursor-pointer">
                  <img src="/products/heart (1).svg" alt="heart" />
                </button>
              </div>  
              {productsData?.image && <img src={productsData?.image} className="w-[340px]" alt="samsung" />}
              {!productsData?.image && <Skeleton.Image active className="w-[400px]"/>}
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <div className="mt-[30px] flex items-end gap-[20px] mb-9">
              <p className="text-[#515D6C] font-[400] leading-[129%] text-[16px]">Narx</p>
              <h2 className="text-[#06172D] font-[700] leading-[120%] text-[32px]">{productsData?.price}</h2>
              <h2 className="text-[#06172D] font-[700] leading-[118%] text-[24px]">USZ</h2>
            </div>
            <div className="py-[19px] w-full bg-[#EBEFF3] text-center rounded-[6px] mb-[10px]">
              <p className="text-[16px] font-[400] leading-[130%] text-[#545D6A]">Oyiga {productsData?.price && Math.floor(productsData?.price / 12)} uszdan muddatli to’lov</p>
            </div>
            <div className="flex gap-[14px] mb-[43px]">
              <div className="py-[18px] w-full border-[1px] border-[#134E9B] text-center cursor-pointer rounded-[6px] mb-[10px]">
                <p className="text-[16px] font-[400] leading-[130%] text-[#134E9B]">Savatga qo‘shish</p>
              </div>
              <div className="py-[18px] w-full bg-[#134E9B] text-center cursor-pointer rounded-[6px] mb-[10px]">
                <p className="text-[16px] font-[400] leading-[130%] text-[#fff]">Xarid qilish</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[16px] mb-5">
                <img src="/products/bus.svg" alt="bus" />
                <p className="text-[16px] font-[400] leading-[130%] text-[#06172DB2]">Yetkazib berish O’zbekiston bo’ylab</p>
              </div>
              <div className="flex items-center gap-[16px] mb-5">
                <img src="/products/shop.svg" alt="bus" />
                <p className="text-[16px] font-[400] leading-[130%] text-[#06172DB2]">Do’kondi o’zidan olib ketishingiz mumkin</p>
              </div>
              <div className="flex items-center gap-[16px] mb-5">
                <img src="/products/clock.svg" alt="bus" />
                <p className="text-[16px] font-[400] leading-[130%] text-[#06172DB2]">Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultValue="xususiyat" className="lg:w-[600px]">
            <TabsList className="mb-[45px]">
              <TabsTrigger value="xususiyat" className="px-5 md:px-[40px] py-[7px] cursor-pointer text-[#515D6C] text-[15px] md:text-[18px]">Telfon xususiyatlari</TabsTrigger>
              <TabsTrigger value="fikrlar" className="px-5 md:px-[40px] py-[7px] cursor-pointer text-[#515D6C] text-[15px] md:text-[18px]">Mijozlarni fikrlari</TabsTrigger>
            </TabsList>
            <TabsContent value="xususiyat" className="w-full">
              <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">Brend</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">{productsData?.name}</p>
              </div>
              {/* <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">CIM kartalar soni</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">2</p>
              </div>
              <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">O’lchamlari</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">75,09х155,11х8,28</p>
              </div>
              <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">Modeli</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">Redmi T12</p>
              </div>
              <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">Akumulyator hajmi</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">4000 amp</p>
              </div>
              <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">Yadrolar soni</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">8</p>
              </div>
              <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">Tezkor xotira RAM</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">6 GB</p>
              </div>
              <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">Ichki xotira ROM</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">128 GB</p>
              </div>
              <div className="flex border-b-[1px] border-dashed border-[#B6BABF] w-full lg:w-[50vw] py-[10px]">
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] min-w-[200px] md:min-w-[370px]">Protsessori</p>
                <p className="text-[#545D6A] text-[16px] font-[400] leading-[34px] max-w-[370px]">MediaTek Helio P35 (MT6765)</p>
              </div> */}
            </TabsContent>
            <TabsContent value="fikrlar">Coming sooooooooooooooon...</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails