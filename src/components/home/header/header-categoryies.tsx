import { heroCategoriesData } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function HeaderCategoryies() {
  const fetchCategory = async () => {
    const res = await axios.get(`https://api.ashyo.fullstackdev.uz/categories/all`);
    return res.data;
  };

  const { data: categoryData} = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
  });

  console.log(categoryData)
  return (
    <div className="bg-[#fff] pb-[10px] px-5 md:px-10 hidden lg:block">
      <ul className="main-container flex items-center gap-[13px] justify-between">
        {categoryData?.map((item: heroCategoriesData) => (
          <li key={item._id} className="text-[#545D6A] hover:text-[#541D6A] text-[16px] font-[400] leading-[21px] cursor-pointer">{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderCategoryies