import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="bg-[#fff] py-[17px] px-5 md:px-10">
      <div className="main-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/home/header/ashyo_logo.svg" className="" alt="ashyo logo" />
          <span className="text-[#134E9B] font-[900] text-[36px] leading-[100%]">Ashyo</span>
        </Link>
        <div className="flex gap-[10px] items-center">
          <Button className="bg-[#134E9B] py-[14px] px-[25px] text-[#fff] rounded-[6px] hover:bg-[#131E9A] cursor-pointer">Kategorya</Button>
          <form className="rounded-[6px] bg-[#EBEFF3] outline-none max-w-[518px] w-full flex relative">
            <Input type="text" className="border-none bg-[#EBEFF3] outline-none md:w-[300px] lg:w-[518px] px-[26px] py-[17px]" placeholder="What are you looking for?" />
            <Button className="bg-[#134E9B] py-[14px] px-[25px] text-[#fff] rounded-[6px] hover:bg-[#131E9A] cursor-pointer absolute right-0">
              <IoSearchOutline />
            </Button>
          </form>
          <div className="flex gap-[15px] ">
            <Link to={'/'} className="rounded-[6px] w-[50px] h-12 flex justify-center items-center bg-[#EBEFF3] relative">
              <img src="/home/header/law.svg" alt="law" />
              <h2 className="absolute w-5 h-5 bg-[#E81504] text-[#fff] flex items-center justify-center rounded-full font-[700] text-[10px] top-[-8px] right-[-8px]">0</h2>
            </Link>
            <Link to={'/'} className="rounded-[6px] w-[50px] h-12 flex justify-center items-center bg-[#EBEFF3] relative">
              <img src="/home/header/heart.svg" alt="law" />
              <h2 className="absolute w-5 h-5 bg-[#E81504] text-[#fff] flex items-center justify-center rounded-full font-[700] text-[10px] top-[-8px] right-[-8px]">0</h2>
            </Link>
            <Link to={'/'} className="rounded-[6px] w-[50px] h-12 flex justify-center items-center bg-[#EBEFF3] relative">
              <img src="/home/header/shopping-bag.svg" alt="law" />
              <h2 className="absolute w-5 h-5 bg-[#E81504] text-[#fff] flex items-center justify-center rounded-full font-[700] text-[10px] top-[-8px] right-[-8px]">0</h2>
            </Link>
            <Link to={'/'} className="rounded-[6px] w-[50px] h-12 flex justify-center items-center bg-[#EBEFF3] ">
              <img src="/home/header/ashyo_user.svg" alt="law" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header