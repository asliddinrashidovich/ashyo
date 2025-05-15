import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Iproduct, ProductsResponse } from '@/interfaces';
import { FaRegHeart } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function ReletedProductsData() {
    const fetchCategoryProducts = async () => {
        const res = await axios.get(`https://api.ashyo.fullstackdev.uz/products`);
        return res.data;
    };

    const { data: productsData} = useQuery<ProductsResponse>({
        queryKey: ["productsQuery"],
        queryFn: fetchCategoryProducts,
    });
  return (
    <div className="relative overflow-hidden pb-[80px]">
        <div className="swiper-button-prev absolute left-[-10px] top-[40%] z-10 cursor-pointer">
            <img src="/home/popular/prew.svg" alt="prev button" />
        </div>
        <div className="swiper-button-next absolute right-[-10px] top-[40%] z-10 cursor-pointer">
            <img src="/home/popular/next.svg" alt="next button" />
        </div>
        <div className='max-w-[1185px] mx-auto'>
            <h2 className='text-[32px] font-[700] leading-[130%] mb-[50px]'>Most popular product</h2>
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
                <div key={item.id} className='user-none '>
                    <div className="bg-[#EBEFF3] relative rounded-[8px] w-full h-[280px] mb-[16px] flex justify-center items-center hover">
                        <img className="max-w-[200px]" src={item.image} alt={item.image}/>
                        <button className="cursor-pointer absolute top-5 right-6">
                            <FaRegHeart className="text-[25px] text-[#545D6A]"/>
                        </button>
                    </div>
                    <p className="mb-[28px] text-[14px] font-[400] leading-[19px] text-[#545D6A] line-clamp-2">{item.description}</p>
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