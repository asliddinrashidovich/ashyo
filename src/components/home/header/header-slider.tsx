import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { sliderData } from '@/data/data';
import { sliderDataType } from '@/interfaces';
import { Button } from '@/components/ui/button';

const SliderHero: React.FC = () => {
  return (
    <section className="bg-[#F3F0F0] mt-[20px] ">
      <div className=" h-[450px]">
        <Swiper pagination={true} modules={[Pagination]} className="h-full mySwiper flex justify-between ">
          {sliderData.map((item: sliderDataType) => (
            <SwiperSlide key={item.id} >
              <div className='main-container flex justify-between items-center relative h-full'>
                <div className='max-w-[600px]'>
                  <h2 className='text-[#0A1729] font-[900] text-[44px] leading-[120%] text-nowrap mb-[6px]'>{item.title}</h2>
                  <p className='text-[16px] text-[#545D6A] font-[400] leading-[100%] mb-[22px]'>{item.paragraph}</p>
                  <Button className="bg-[#134E9B] py-[18px] px-[25px] text-[#fff] rounded-[6px] hover:bg-[#131E9A] cursor-pointer">Kategorya</Button>
                </div>
                <img className='absolute  bottom-0 right-[-130px] top-0 h-full' src={item.image} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderHero;
