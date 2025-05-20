import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

type FieldType = {
  email?: string;
};


function SendOtpPage() {
  const navigate = useNavigate()
  const onFinish: FormProps<FieldType>['onFinish'] = async ({email}) => {
    if (!email) return toast.error("Email is required");

    await axios.post("https://api.ashyo.fullstackdev.uz/auth/send-otp", {email}).then(() => {
      toast.success("We send a code to your email, Please Check your email")
      localStorage.setItem("email" ,email)
      navigate("/profile/resetpassword/set-new-password")
    }).catch(() => {
      toast.error("Something went wrong")
    })
  };
  
  
  return (
    <div className="px-5 md:px-10 py-[20px]">
      <div className="main-container">
        <div className="flex gap-[15px] items-center pb-[10px]">
            <Link to={"/profile"} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">account-details /</Link>
        </div>
        <h2 className="text-[25px] font-[600] mb-[15px]">Do You Want To Reset Passoword?</h2>
        <p className='mb-[20px]'>Enter your email, and we'll send you a link to reset your password.</p>
        <Form
          name="basic form"
          style={{ maxWidth: 400 }}
          initialValues={{ 
            email: ""
           }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Email' type='email'/>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  )
}

export default SendOtpPage