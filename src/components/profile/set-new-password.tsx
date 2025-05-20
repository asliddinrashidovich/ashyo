import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type OtpType = {
  otp?: string
  new_password?: string
}

function SetNewPassword() {
    const emailInput = localStorage.getItem("email")
    const navigate = useNavigate()
    const verifyOtp: FormProps<OtpType>['onFinish'] = async ({otp, new_password}) => {
            await axios.post("https://api.ashyo.fullstackdev.uz/auth/reset-password", {email: emailInput, otp, new_password}).then(() => {
            toast.success("New password is set successfully")
            navigate('/profile')
        }).catch(() => {
            toast.error("Something went wrong")
        })
    };
  return (
    <div className="px-5 md:px-10 pt-[10px]">
        <div className="main-container">
            <h2 className="text-[25px] font-[600] mb-[15px]">Verify Your Email, end set new password</h2>
            <Form
                name="tasdiqlash codi"
                style={{ maxWidth: 500 }}
                initialValues={{ 
                    otp: "",
                    new_password: ""
                }}
                onFinish={verifyOtp}
                autoComplete="off"
            >
                
                <p className='mb-[10px]'>Emailingizga yuborilgan, tasdiqlash kodini kiriting</p>
                <Form.Item<OtpType>
                    name="otp"
                    rules={[{ required: true, message: 'Please input your otp!' }]}
                    >
                    <Input placeholder='Otp kodi'/>
                </Form.Item>

                <p className='mb-[10px]'>Yangi password qo'ying</p>
                <Form.Item<OtpType>
                    name="new_password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input placeholder='New Password'/>
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

export default SetNewPassword