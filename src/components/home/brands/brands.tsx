function Brands() {
  return (
    <div className="py-[100px] px-5 md:px-10">
        <div className="main-container grid  grid-row-42 grid-cols-2 md:grid-cols-11 gap-[10px]">
            <div className="cursor-pointer group hover:brightness-10 hover:bg-black/20 transition-all duration-100 col-span-1 md:col-span-3 md:row-span-14 row-span-10 rounded-[6px] bg-[#67B43733] flex items-center justify-center">
                <img className="group-hover:scale-[120%] transition-all duration-200" src="/home/brands/artel.svg" alt="artel" />
            </div>
            <div className="cursor-pointer group hover:brightness-10 hover:bg-black/20 transition-all duration-100 col-span-1 md:col-span-3 row-span-17 md:row-span-24 rounded-[6px] bg-[#034EA21A] flex items-center justify-center">
                <img className="group-hover:scale-[120%] transition-all duration-200" src="/home/brands/samsung.svg" alt="artel" />
            </div>
             <div className="cursor-pointer group hover:brightness-10 hover:bg-black/20 transition-all duration-100 md:col-span-3 row-span-14 rounded-[6px] bg-[#034EA21A] flex items-center justify-center">
                <img className="group-hover:scale-[120%] transition-all duration-200" src="/home/brands/nokia.svg" alt="artel" />
            </div>
            <div className="cursor-pointer group hover:brightness-10 hover:bg-black/20 transition-all duration-100 md:col-span-2 row-span-20 md:row-span-27 rounded-[6px] bg-[#FF670033] flex items-center justify-center">
                <img className="group-hover:scale-[120%] transition-all duration-200" src="/home/brands/xiomi.svg" alt="artel" />
            </div>
            <div className="cursor-pointer group hover:brightness-10 hover:bg-black/20 transition-all duration-100 md:col-span-3 row-span-18 md:row-span-24 rounded-[6px] bg-[#0000001A] flex items-center justify-center">
                <img className="group-hover:scale-[120%] transition-all duration-200" src="/home/brands/apple.svg" alt="artel" />
            </div>
            <div className="cursor-pointer group hover:brightness-10 hover:bg-black/20 transition-all duration-100 md:col-span-3 row-span-14 grid-cols-2 md:col-start-4 md:row-start-25  rounded-[6px] bg-[#006DB833] flex items-center justify-center">
                <img className="group-hover:scale-[120%] transition-all duration-200" src="/home/brands/vivo.svg" alt="artel" />
            </div>
            <div className="cursor-pointer group hover:brightness-10 hover:bg-black/20 transition-all duration-100 md:col-span-3 row-span-20 md:row-span-24 rounded-[6px] bg-[#0000001A] flex items-center justify-center">
                <img className="group-hover:scale-[120%] transition-all duration-200" src="/home/brands/huave.svg" alt="artel" />
            </div>
            <div className="cursor-pointer group hover:brightness-10 hover:bg-black/20 transition-all duration-100 md:col-span-2 row-span-11 rounded-[6px] bg-[#EBEFF3] flex items-center justify-center">
                <h2 className="text-[20px] fonr-[700]">Ko'proq</h2>
            </div>
        </div>
    </div>
  )
}

export default Brands