import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { Modal } from 'antd';
import { Box, Tab, Tabs } from "@mui/material";
import FormLogin from "@/components/auth/form-login";
import {Toaster} from "react-hot-toast"
import FormRegister from "@/components/auth/form-register";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Header() {
  const [openSidebar, setOpenSideBar] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tabVlue, setTabValue] = useState(0);
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const showModal = () => {
    if(token) {
      navigate('/profile')
    } else{
      setIsModalOpen(true);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handleOpen() {
    setOpenSideBar(true)
  }
  function handleClose() {
    setOpenSideBar(false)
  }

  return (
    <div className="bg-[#fff] py-[17px] px-5 md:px-10 relative">
      <div><Toaster
        position="top-right"
        reverseOrder={false}
      /></div>
      <div className="max-w-[1185px] mx-auto flex items-center justify-between md:gap-[50px] pb-[10px] lg:pb-0">
        <Link to={'/'} className="flex items-center lg:w-[300px] translate-x-[-17px]">
          <img src="/home/header/ashyo_logo.svg" alt="ashyo logo" />
          <p className="text-[#134E9B] font-[900] block text-[36px] leading-[100%]">Ashyo</p>
        </Link>
        
        {/* form for desktop */}
        <div className="hidden lg:flex gap-[10px] w-full">
          <Button className="bg-[#134E9B] h-12 py-[14px] px-[25px] text-[#fff] rounded-[6px] hover:bg-[#131E9A] cursor-pointer">Kategorya</Button>
          <form className="rounded-[6px] h-12 bg-[#EBEFF3] outline-none  w-full flex relative items-center">
            <Input type="text" className="w-full border-none shadow-none outline-[#fff] text-[13px] font-[400] leading-[100%] bg-[#EBEFF3] outline-none  px-[26px] py-[17px]" placeholder="What are you looking for?" />
            <Button className="bg-[#134E9B] h-12 w-15 py-[14px] px-[25px] text-[#fff] rounded-[6px] hover:bg-[#131E9A] cursor-pointer absolute right-0">
              <IoSearchOutline />
            </Button>
          </form>
        </div>
        <a href="tel:+998711234567" className="lg:hidden flex">+998 (71) 123-45-67</a>
        <div className="hidden md:flex gap-[15px] ">
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
          <button onClick={showModal} className="rounded-[6px] cursor-pointer w-[50px] h-12 flex justify-center items-center bg-[#EBEFF3] ">
            <img className="translate-x-[15%]" src="/home/header/ashyo_user.svg" alt="law" />
          </button>
          {/* login modal lg */}
          <Modal
            // title="Basic Modal"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabVlue} onChange={handleChange} aria-label="basic tabs example w-full text-center">
                  <Tab label="Login" {...a11yProps(0)} />
                  <Tab label="Register" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={tabVlue} index={0}>
                <FormLogin setIsModalOpen={setIsModalOpen}/>
              </CustomTabPanel>
              <CustomTabPanel value={tabVlue} index={1}>
                <FormRegister setIsModalOpen={setIsModalOpen}/>
              </CustomTabPanel>
            </Box>
          </Modal>
        </div>
        <button onClick={handleOpen} className="md:hidden flex cursor-pointer">
          <FaBars className="text-[20px]"/>
        </button>
      </div>
      {/* form xs */}
      <div className="main-container flex lg:hidden items-center justify-between">
        <div className="flex header_form_width gap-[10px]">
          <Button className="bg-[#134E9B] h-12 py-[14px] px-[25px] text-[#fff] rounded-[6px] hover:bg-[#131E9A] cursor-pointer">Kategorya</Button>
          <form className="header_form_width rounded-[6px] h-12 bg-[#EBEFF3] outline-none flex relative items-center">
            <Input type="text" className=" border-none shadow-none outline-[#fff] text-[13px] font-[400] leading-[100%] bg-[#EBEFF3] outline-none  px-[26px] py-[17px]" placeholder="What are you looking for?" />
            <Button className="bg-[#134E9B] h-12 w-15 py-[14px] px-[25px] text-[#fff] rounded-[6px] hover:bg-[#131E9A] cursor-pointer absolute right-0">
              <IoSearchOutline />
            </Button>
          </form>
        </div>
      </div>

      {/* Sidebar  */}
      {<div className={`fixed top-0 ${openSidebar ? "translate-x-0" : "translate-x-[100%]"} transition-liniar duration-200  right-0 bottom-0 bg-[#fff] w-[40%] z-30 `}>
        <div className="w-full h-[120px] bg-[#00000040] flex items-center px-[20px]">
          <div className="w-[80px] h-[80px] rounded-full bg-[#fff]">

          </div>
        </div>
        <div className="p-[20px] flex gap-[13px] flex-col">
          <Link to={'/'} className="rounded-[6px] w-[100%] flex gap-[7px] justify-start p-[15px] items-center bg-[#EBEFF3] relative">
            <img src="/home/header/law.svg" alt="law" />
            <h3 className="text-[#545d6a]">Compare</h3>
            <h2 className="absolute w-5 h-5 bg-[#E81504] text-[#fff] flex items-center justify-center rounded-full font-[700] text-[10px] top-[-8px] right-[-8px]">0</h2>
          </Link>
          <Link to={'/'} className="rounded-[6px] w-[100%] flex gap-[7px] justify-start p-[15px] items-center bg-[#EBEFF3] relative">
            <img src="/home/header/heart.svg" alt="law" />
            <h3 className="text-[#545d6a]">Wishlist</h3>
            <h2 className="absolute w-5 h-5 bg-[#E81504] text-[#fff] flex items-center justify-center rounded-full font-[700] text-[10px] top-[-8px] right-[-8px]">0</h2>
          </Link>
          <Link to={'/'} className="rounded-[6px] w-[100%] flex gap-[7px] justify-start p-[15px] items-center bg-[#EBEFF3] relative">
            <img src="/home/header/shopping-bag.svg" alt="law" />
            <h3 className="text-[#545d6a]">Cart</h3>
            <h2 className="absolute w-5 h-5 bg-[#E81504] text-[#fff] flex items-center justify-center rounded-full font-[700] text-[10px] top-[-8px] right-[-8px]">0</h2>
          </Link>
          <Link to={'/'} className="rounded-[6px] w-[100%] flex gap-[7px] justify-start p-[15px] items-center bg-[#EBEFF3] relative">
            <img src="/home/header/ashyo_user.svg" alt="law" />
            <h3 className="text-[#545d6a]">Profile</h3>
          </Link>
        </div>
          
      </div>}
      {openSidebar && <div onClick={handleClose} className="fixed top-0 left-0 bottom-0 bg-black/70 w-[100%] brightness-50 z-20">

      </div>}
    </div>
  )
}

export default Header