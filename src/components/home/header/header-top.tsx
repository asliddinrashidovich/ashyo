import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GrLocation } from "react-icons/gr";

function HeaderTop() {
  return (
    <header className="bg-[#EBEFF3] py-[10px] px-5 md:px-10">
      <div className="main-container flex items-center justify-between">
        <div className="flex gap-7 items-center">
          <div className="flex gap-[11px] items-end">
            <GrLocation />
            <span className="font-[400] text-[14px] leading-[100%] text-[#545D6A]">Tashkent</span>
          </div>
          <ul className="flex gap-[15px]">
            <li>
              <a href="#" className="font-[400] text-[14px] leading-[130%] text-[#545D6A]">About Us</a>
            </li>
            <li>
              <a href="#" className="font-[400] text-[14px] leading-[130%] text-[#545D6A]">Products</a>
            </li>
            <li>
              <a href="#" className="font-[400] text-[14px] leading-[130%] text-[#545D6A]">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-[38px] items-center">
          <a href="#" className="font-[600] text-[14px] leading-[130%] text-[#545D6A]">+998 (71) 123-45-67</a>
          <Select>
            <SelectTrigger className="w-[40px] outline-none border-none shadow-none gap-[1px] p-[0] h-[20px]">
              <SelectValue placeholder="uz"/>
            </SelectTrigger>
            <SelectContent className="p-[1px]">
              <SelectGroup>
                <SelectItem value="us" defaultChecked>Uz</SelectItem>
                <SelectItem value="en">En</SelectItem>
                <SelectItem value="ru">Ru</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}

export default HeaderTop