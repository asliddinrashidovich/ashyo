import * as React from 'react';
import Slider from '@mui/material/Slider';
import { useSearchParams } from 'react-router-dom';

function valuetext(value: number) {
  return `${value}°C`;
}

function FilterSection() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (_event: Event, newValue: number[]) => {
        setValue(newValue);
    }

    function handleChangeBrand(path: string) {
        searchParams.set('brand', path)
        setSearchParams(searchParams)
    }
    
    const brandParams = searchParams.get('brand')
  return (
    <div className="w-[220px] lg:w-[280px] bg-[#EBEFF3] hidden md:block rounded-[8px] p-[18px]">
        {/* price */}
        <div>
            <h2 className="mb-[9px] text-[#000000] font-[500] text-[16px] leading-[34px]">Narx <span>[so'm]</span></h2>
            <div className="flex gap-[4px] mb-[26px]">
                <div>
                    <span className="text-[#00000066] font-[400] text-[12px] leading-[34px] mb-[6px]">...dan</span>
                    <input className="w-full bg-[#fff] rounded-[5px] outline-none py-[2px] pl-[15px] font-[400] text-[#00000099] text-[14px] leading-[34px]"/>
                </div>
                <div>
                    <span className="text-[#00000066] font-[400] text-[12px] leading-[34px] mb-[6px]">...gacha</span>
                    <input className="w-full bg-[#fff] rounded-[5px] outline-none py-[2px] pl-[15px] font-[400] text-[#00000099] text-[14px] leading-[34px]"/>
                </div>
            </div>
            <div className="mb-[26px]"> 
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </div>
        </div>

        {/* Brendi */}
        <div className='mb-[33px]'>
            <h2 className="mb-[15px] text-[#000000] font-[500] text-[16px] leading-[34px]">Brendi</h2>
            <div className="flex flex-wrap gap-[5px]">
                <button onClick={() => handleChangeBrand("1")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '1' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Vivo</button>
                <button onClick={() => handleChangeBrand("2")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '2' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Samsung</button>
                <button onClick={() => handleChangeBrand("3")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '3' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Apple</button>
                <button onClick={() => handleChangeBrand("4")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '4' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Tecno</button>
                <button onClick={() => handleChangeBrand("5")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '5' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Nokia</button>
                <button onClick={() => handleChangeBrand("6")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '6' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Oppo</button>
                <button onClick={() => handleChangeBrand("7")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '7' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Xoaimi</button>
                <button onClick={() => handleChangeBrand("8")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '8' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Realmi</button>
                <button onClick={() => handleChangeBrand("9")} className={`text-[12px] font-[400] leading-[16px] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] rounded-[20px] ${brandParams == '9' ? "bg-[#134E9B] text-[#fff]" : " bg-[#fff] text-[#0A1729]"}`}>Huawei</button>
            </div>
        </div>

        {/* tezkor xotira */}
        <div className='mb-[33px]'>
            <h2 className="mb-[12px] text-[#000000] font-[500] text-[16px] leading-[34px]">Tezkor xotira RAM</h2>
            <div className="flex flex-wrap gap-[5px]">
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">2 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">3 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">4 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">6 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">8 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">12 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">16 GB</button>
            </div>
        </div>

         {/* Doimiy xotira */}
        <div className='mb-[23px]'>
            <h2 className="mb-[12px] text-[#000000] font-[500] text-[16px] leading-[34px]">Doiymi xotira ROM</h2>
            <div className="flex flex-wrap gap-[5px]">
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">32 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">64 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">128 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">256 GB</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">512 GB</button>
            </div>
        </div>

        {/* Akkumulyator hajmi */}
        <div>
            <h2 className="mb-[12px] text-[#000000] font-[500] text-[16px] leading-[34px]">Akkumulyator hajmi</h2>
            <div className="flex flex-wrap gap-[5px]">
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">3000 mAh</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">3200 mAh</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">3600 mAh</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">4000 mAh</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">4500 mAh</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">5000 mAh</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">6000 mAh</button>
                <button className="text-[12px] font-[400] leading-[16px] text-[#0A1729] py-[7px] transition-all duration-400 hover:bg-[#134E9B] hover:text-[#fff] cursor-pointer px-[18px] bg-[#fff] rounded-[20px]">7000 mAh</button>
            </div>
        </div>
    </div>
  )
}

export default FilterSection