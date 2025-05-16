import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { Iproduct, ProductsResponse } from '@/interfaces';
import { FaRegHeart } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function LastSeenProducts() {
    const navigate = useNavigate()
    function handleClick(id: number) {
        navigate(`/products/${id}`)
    }
    const fetchCategoryProducts = async () => {
        const res = await axios.get(`https://api.ashyo.fullstackdev.uz/products`);
        return res.data;
    };

    const { data: productsData, isLoading: loading} = useQuery<ProductsResponse>({
        queryKey: ["productsQueryLast"],
        queryFn: fetchCategoryProducts,
    });
    console.log("asdfasdf", productsData)

    if(loading) {
        return (
            <>
                <h1>loading</h1>
            </>
        )
    }
  return (
    <div className="relative overflow-hidden pb-[80px]">
        <div className="swiper-button-prev absolute left-[-10px] top-[40%] z-10 cursor-pointer">
            <img src="/home/popular/prew.svg" alt="prev button" />
        </div>
        <div className="swiper-button-next absolute right-[-10px] top-[40%] z-10 cursor-pointer">
            <img src="/home/popular/next.svg" alt="next button" />
        </div>
        <div className='max-w-[1185px] mx-auto  px-5'>
            <h2 className='text-[32px] font-[700] leading-[130%] mb-[50px]'>Oxirgi ko’rgan mahsulotlar</h2>
        </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={{
            0: {
                slidesPerView: 1
            },
            500: {
                slidesPerView: 2
            },
            700: {
                slidesPerView: 3
            },
            1100: {
                slidesPerView: 5
            }
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
         navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper popularSwipper "
        style={{paddingLeft: '20px', paddingRight: '20px'}}
      >
        
       {productsData?.items?.map((item: Iproduct) => (
            <SwiperSlide key={item.id}>
                <div key={item.id} className='user-none group'>
                    <div onClick={() => handleClick(item.id)} className="bg-[#EBEFF3] relative rounded-[8px] w-full h-[280px] mb-[16px] flex cursor-pointer justify-center items-center hover">
                        <img className="max-w-[200px] group-hover:scale-[105%] transition-all duration-200" src={item.image} alt={item.image}/>
                        <button className="cursor-pointer absolute top-5 right-6">
                            <FaRegHeart className="text-[25px] text-[#545D6A]"/>
                        </button>
                    </div>
                    <p onClick={() => handleClick(item.id)} className="cursor-pointer hover:underline mb-[28px] text-[14px] font-[400] leading-[19px] text-[#545D6A] line-clamp-2">{item.description}</p>
                    <div className="flex gap-[10px] items-end justify-between">
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
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}