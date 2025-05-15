import { Link } from "react-router-dom"

function HeadphoneSection() {
  return (
    <section className=" px-5 md:px-10 pt-[20px] pb-[170px] overflow-x-hidden">
        <div className="h-[420px]  rounded-[10px] bg-[#282828] max-w-[1185px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[20px]">
            <div className="relative md:top-[-200px]  md:left-[50px]">
                <div className="absolute left-[200px] md:left-[20px] top-[-40px]">
                    <img src="/home/headphones/brightness.png" alt="brightness" />
                </div>
                <div className="absolute left-[200px] md:top-[10px] md:left-[50px]">
                    <img src="/home/headphones/headphones.png" alt="headphones" />
                </div>
            </div>
            <div className="max-w-[450px] pl-[40px] z-10">
                <p className="text-[#fff] text-[32px] font-[700] leading-[38px] mb-[20px]">Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!</p>
                <Link to={"/products/8"} className="inline-block text-center py-[18px] px-[16px] font-[400] leading-[120%] text-[16px] rounded-[6px] cursor-pointer bg-[#FFFFFF] w-[160px]">Batafsil</Link>
            </div>
        </div>
    </section>
  )
}

export default HeadphoneSection