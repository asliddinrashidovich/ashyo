import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type FieldType = {
  email?: string;
};


function ResetPassword() {
  const navigate = useNavigate()
  const onFinish: FormProps<FieldType>['onFinish'] = async ({email}) => {
    if (!email) return toast.error("Email is required");

    await axios.post("https://api.ashyo.fullstackdev.uz/auth/forgot-password", {email}).then(() => {
      toast.success("We send a code to your email, Please Check your email")
      localStorage.setItem("email" ,email)
      navigate("/forgot-password/verify-otp")
    }).catch(() => {
      toast.error("Something went wrong")
    })
  };
  
  
  return (
    <div className="px-5 md:px-10 py-[50px]">
      <div className="main-container">
        <h2 className="text-[25px] font-[600] mb-[15px]">Forget Passsoword?</h2>
        <p className='mb-[20px]'>Enter your email, and we'll send you a link to get back into your account.</p>
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
              Send Login Link
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  )
}

export default ResetPassword