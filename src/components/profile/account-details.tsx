import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

type FieldType = {
  email?: string;
};
type FieldNameType = {
  fullName?: string;
};


function AccountDetails() {
  const navigate = useNavigate()
  // const onFinish: FormProps<FieldType>['onFinish'] = async ({email}) => {
  //   // if (!email) return toast.error("Email is required");

  //   // await axios.post("https://api.ashyo.fullstackdev.uz/auth/send-otp", {email}).then(() => {
  //   //   toast.success("We send a code to your email, Please Check your email")
  //   //   localStorage.setItem("email" , email)
  //   //   navigate("/forgot-password/verify-otp")
  //   // }).catch(() => {
  //   //   toast.error("Something went wrong")
  //   // })
  // };
  function handleClick() {
    navigate("/profile/resetpassword")
  }
  
  
  return (
    <div className="px-5 md:px-10 py-[20px]">
      <div className="main-container">
        <Form
          name="basic form"
          initialValues={{ 
            email: "",
            fullName: ""
           }}
          autoComplete="off"
          className='grid grid-cols-1 md:grid-cols-2 w-full gap-[10px]'
        >
          <Form.Item<FieldNameType>
            name="fullName"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder='Name' type='text'/>
          </Form.Item>
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Email' type='email'/>
          </Form.Item>
        </Form>
        <h2 className='mb-[25px] font-[600]'>Do you want to reset password?</h2>
        <Button onClick={handleClick} type="primary" htmlType="submit">
          Reset Passsword
        </Button>
      </div>
    </div>
  )
}

export default AccountDetails