import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';
import { sliderData } from '@/data/data';
import { sliderDataType } from '@/interfaces';
import { Button } from '@/components/ui/button';

const SliderHero: React.FC = () => {
  return (
    <section className="bg-[#F3F0F0] mt-[20px] ">
      <div className="h-full md:h-[450px] px-5 md:px-10">
        <Swiper pagination={true} modules={[Pagination]} className="h-full mySwiper flex justify-between ">
          {sliderData.map((item: sliderDataType) => (
            <SwiperSlide key={item.id} >
              <div className='main-container flex justify-between items-center relative h-[350px] md:h-full  '>
                <div className='absolute w-[300px] md:w-[400px] lg:w-[700px] z-5'>
                  <h2 className='text-[#0A1729] font-[900] text-[30px] md:text-[44px] leading-[120%] mb-[6px] w-full'>{item.title}</h2>
                  <p className='text-[14px] md:text-[16px] text-[#545D6A] font-[400] leading-[100%] mb-[22px]'>{item.paragraph}</p>
                  <Button className="bg-[#134E9B] py-[18px] px-[25px] text-[#fff] rounded-[6px] hover:bg-[#131E9A] cursor-pointer">Kategorya</Button>
                </div>
                <div className='absolute top-0 bottom-0 w-[500px] right-[-0px] md:right-[0]'> 
                  <img className='w-full h-[350px] md:h-full object-cover' src={item.image} alt={item.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderHero;
