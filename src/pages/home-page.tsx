import { AksiyaProducts, Brands, CategoryProducts, HeaderSlider, HeadphoneSection, LastSeenProducts, ReletedProductsData } from "@/components"

function HomePage() {
  return (
    <>
      <HeaderSlider/>
      <Brands/>
      <ReletedProductsData/>
      <ReletedProductsData/>
      <ReletedProductsData/>
      <CategoryProducts/>
      <AksiyaProducts/>
      <HeadphoneSection/>
      <LastSeenProducts/>
    </>
  )
}

export default HomePage