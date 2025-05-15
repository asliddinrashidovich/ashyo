import { useNavigate, useSearchParams } from "react-router-dom"

function CategoryProducts() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    function handleClick(path: string) {
        navigate(`/products`)
        searchParams.set("category", path)
        setSearchParams(searchParams)
    }
  return (
    <section className="pt-[40px] pb-[400px] lg:pb-[100px] px-5 md:px-10">
        <div className="max-w-[1185px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[12px]">
            <div className="col-span-7 grid grid-cols-3  gap-[10px]">
                <div onClick={() => handleClick("2")} className="bg-[#5C4F8C] pt-[14px] pl-[10px] col-span-2 row-span-1 rounded-[7px] overflow-hidden cursor-pointer group hover:brightness-70 transition-all duration-200">
                    <button className="text-[14px] font-[400] leading-[100%] text-[#fff] py-[4px] px-[10px] rounded-[30px] border-[1px] border-[#fff]" >Noutbooklar</button>
                    <img src="/home/category/noutbooklar.png" className="ml-auto mr-[15px] group-hover:scale-[107%] transition-all duration-200" alt="noutbooklar" />
                </div>
                <div onClick={() => handleClick("5")} className="bg-[#797C7D] pt-[14px] pl-[10px] col-span-1 row-span-1 rounded-[7px] overflow-hidden cursor-pointer group hover:brightness-70 transition-all duration-200">
                    <button className="text-[14px] font-[400] leading-[100%] text-[#fff] py-[4px] px-[10px] rounded-[30px] border-[1px] border-[#fff]" >Kondetsiyoner</button>
                    <img src="/home/category/kondedsioner.png" className="ml-auto group-hover:scale-[107%] transition-all duration-200" alt="kondedsionerlar" />
                </div>
                <div onClick={() => handleClick("1")} className="bg-[#A09188] pt-[14px] pl-[10px] col-span-1 row-span-1 rounded-[7px] overflow-hidden cursor-pointer group hover:brightness-70 transition-all duration-200">
                    <button className="text-[14px] font-[400] leading-[100%] text-[#fff] py-[4px] px-[10px] rounded-[30px] border-[1px] border-[#fff]" >Kiryuvish mashinasi</button>
                    <img src="/home/category/changyutgich.png" className="ml-auto group-hover:scale-[107%] transition-all duration-200" alt="changyutgich" />
                </div>
                <div onClick={() => handleClick("3")} className="bg-[#CEAF75] pt-[14px] pl-[10px] col-span-2 row-span-1 rounded-[7px] overflow-hidden cursor-pointer group hover:brightness-70 transition-all duration-200">
                    <button className="text-[14px] font-[400] leading-[100%] text-[#fff] py-[4px] px-[10px] rounded-[30px] border-[1px] border-[#fff]" >Televizorlar</button>
                    <img src="/home/category/televizor.png" className="ml-auto group-hover:scale-[107%] transition-all duration-200" alt="televizor" />
                </div>
            </div>
            <div className="bg-[#fff] w-full col-span-7 lg:col-span-5 grid grid-cols-2 lg:gap-[10px] relative rounded-[7px]">
                <div onClick={() => handleClick("6")} className="bg-[#fff] lg:absolute z-20 pb-[10px] rounded-br-[7px] pr-[10px]  col-span-1 row-span-1 gap-[10px] overflow-hidden cursor-pointer group hover:brightness-70 transition-all duration-200">
                    <div className="bg-[#676D86] rounded-[7px] overflow-hidden pt-[5px] pl-[10px] ">
                        <button className="text-[14px] font-[400] leading-[100%] text-[#fff] py-[4px] px-[10px] rounded-[30px] border-[1px] border-[#fff]" >Smartfonlar</button>
                        <img src="/home/category/phone.png" className="ml-auto group-hover:scale-[107%] transition-all duration-200" alt="phone" />
                    </div>
                </div>
                <div onClick={() => handleClick("")} className="cursor-pointer group hover:brightness-70 transition-all duration-200 absolute top-0 right-0 w-full h-[65px] grid grid-cols-2 col-span-1 row-span-1 gap-[10px]  ">
                    <div></div>
                    <h2 className="text-[#FFFFFF] items-center flex justify-center rounded-[7px] overflow-hidden bg-[#134E9B] h-full  text-[16px] font-[400] leading-[21px] col-start-2 ">Ko'proq</h2>
                </div>
                <div onClick={() => handleClick("4")} className="bg-[#888380] pt-[14px] pl-[10px] col-span-2 absolute w-full bottom-[-300px] lg:bottom-0 top-[75px] z-10 row-span-7 gap-[10px] rounded-[7px] overflow-hidden cursor-pointer group hover:brightness-70 transition-all duration-200">
                    <button className="text-[14px] absolute top-[220px] font-[400] leading-[100%] text-[#fff] py-[4px] px-[10px] rounded-[30px] border-[1px] border-[#fff]" >Muzlatgichlar</button>
                    <img src="/home/category/xoladilnikbig.png" className="ml-auto translate-y-[120px] group-hover:scale-[107%] transition-all duration-200" alt="xoladilnikbig" />
                    <img src="/home/category/xoladilniksmall.png" className="mx-auto  translate-y-[-100px] group-hover:scale-[107%] transition-all duration-200" alt="xoladilniksmall" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategoryProducts