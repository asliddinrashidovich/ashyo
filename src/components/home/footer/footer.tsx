function Footer() {
  return (
    <footer className="pb-[70px] px-5 md:px-10">
        <div className="max-w-[1185px] mx-auto flex items-start justify-between gap-[30px] flex-col md:flex-row pt-[70px] pb-[60px]">
            <div>
                <h2 className="text-[#000000B2] text-[20px] font-[700] leading-[130%] mb-[21px]">Bizning ijtimoiy tarmoqlarda</h2>
                <div className="flex gap-[10px] mb-10">
                    <div className="w-[44px] h-[40px] rounded-[7px] bg-[#EBEFF3] flex items-center justify-center cursor-pointer">
                        <img src="/home/footer/logos_facebook.svg" alt="Footer logo" />
                    </div>
                    <div className="w-[44px] h-[40px] rounded-[7px] bg-[#EBEFF3] flex items-center justify-center cursor-pointer">
                        <img src="/home/footer/logos_youtube-icon.svg" alt="Footer logo" />
                    </div>
                    <div className="w-[44px] h-[40px] rounded-[7px] bg-[#EBEFF3] flex items-center justify-center cursor-pointer">
                        <img src="/home/footer/logos_telegram.svg" alt="Footer logo" />
                    </div>
                    <div className="w-[44px] h-[40px] rounded-[7px] bg-[#EBEFF3] flex items-center justify-center cursor-pointer">
                        <img src="/home/footer/logos_twitter.svg" alt="Footer logo" />
                    </div>
                    <div className="w-[44px] h-[40px] rounded-[7px] bg-[#EBEFF3] flex items-center justify-center cursor-pointer">
                        <img src="/home/footer/logos_instagram.svg" alt="Footer logo" />
                    </div>
                </div>
                <h2 className="text-[#000000B2] text-[20px] font-[700] leading-[130%] mb-[12px]">Mobil ilovani yuklab oling</h2>
                <div className="flex gap-[12px]">
                    <div className="flex items-center py-[17px] px-[30px] bg-[#EBEFF3] rounded-[10px] gap-[12px] cursor-pointer">
                        <img src="/home/footer/logos_apple-app-store.svg" alt="app store" />
                        <h2 className="text-[#0A1729] text-[16px] font-[700] leading-[110%]">App Store </h2>
                    </div>
                    <div className="flex items-center py-[17px] px-[30px] bg-[#EBEFF3] rounded-[10px] gap-[12px] cursor-pointer">
                        <img src="/home/footer/logos_google-play-icon.svg" alt="app store" />
                        <h2 className="text-[#0A1729] text-[16px] font-[700] leading-[110%]">Google Play </h2>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-[#000000B2] text-[20px] font-[700] leading-[130%] mb-[18px]">Menyu</h2>
                <ul className="flex flex-col gap-[12px] max-w-[300px]">
                    <li className="text-[16px] font-[400] leading-[110%] text-[#000000B2]">Ashyo haqida</li>
                    <li className="text-[16px] font-[400] leading-[110%] text-[#000000B2]">Foydalanish shartlari</li>
                    <li className="text-[16px] font-[400] leading-[110%] text-[#000000B2]">Maxfiylik va hafsizlik siyosati</li>
                    <li className="text-[16px] font-[400] leading-[110%] text-[#000000B2]">Mahsulotlarni va tovarlarni qaytarish siyosati</li>
                    <li className="text-[16px] font-[400] leading-[110%] text-[#000000B2]">Biz bilan aloqa</li>
                </ul>
            </div>
            <div>
                <h2 className="text-[#000000B2] text-[20px] font-[700] leading-[130%] mb-[13px]">Aloqa</h2>
                <a href="tel:+998711234567" className="text-[#06172D] font-[700] text-[24px] leading-[118%] mb-8 inline-block">+998 (71) 123-45-67</a>
                <p className="text-[16px] font-[400] leading-[130%] mb-3 text-[#000000B2]">Savolingiz bormi?</p>
                <form className="bg-[#EBEFF3] rounded-[6px] py-[14px] px-[11px] flex justify-between items-center">
                    <input type="text" placeholder="O’zingiz qiziqtirgan savollarni bering" className="text-[12px] font-[400] leading-[130%] text-[#0000004D] outline-none"/>
                    <img src="/home/footer/footer_chat.svg" alt="footer chat" />
                </form>
            </div>
        </div>
        <h2 className="main-container text-[#00000066] text-[12px] font-[400] leading-[130%]">© 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.</h2>
    </footer>
  )
}

export default Footer