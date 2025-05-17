import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';

type OtpType = {
  otp?: string
  email?: string;
}

function VerifyOtp() {
    const [searchParams] = useSearchParams()
    const emailInput = searchParams.get("email")
    const verifyOtp: FormProps<OtpType>['onFinish'] = async ({otp}) => {
        await axios.post("https://api.ashyo.fullstackdev.uz/auth/verify-otp", {email: emailInput, otp}).then((res) => {
        toast.success("Success")
        console.log(res)
        }).catch(() => {
        toast.error("Something went wrong")
        })
    };
  return (
    <div className="px-5 md:px-10 pt-[10px]">
        <div className="main-container">
            <div className="flex gap-[15px] items-center pt-[18px] pb-[27px]">
                <Link to={"/forgot-password"} className="font-[400] text-[14px] leading-[19px] text-[#B6BABF] hover:text-[#000]">Back</Link>
            </div>
            <h2 className="text-[25px] font-[600] mb-[15px]">Verify Your Email</h2>
            <p className='mb-[10px]'>Emailingizga yuborilgan, tasdiqlash kodini kiriting</p>
            <Form
                name="tasdiqlash codi"
                style={{ maxWidth: 200 }}
                initialValues={{ 
                otp: ""
                }}
                onFinish={verifyOtp}
                autoComplete="off"
            >
                <Form.Item<OtpType>
                name="otp"
                rules={[{ required: true, message: 'Please input your otp!' }]}
                >
                <Input placeholder='Otp kodi'/>
                </Form.Item>

                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Tasdiqlash
                </Button>
                </Form.Item>

            </Form>
        </div>
    </div>
  )
}

export default VerifyOtp