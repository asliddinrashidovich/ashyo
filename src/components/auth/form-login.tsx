import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';

type FieldType = {
  email?: string;
  password?: string;
};
type FormLoginProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};


const FormLogin: React.FC<FormLoginProps> = ({setIsModalOpen}) => {
    const onFinish:  FormProps<FieldType>['onFinish'] = async (values) => {
        const {email, password} = values
        await axios.post(`https://api.ashyo.fullstackdev.uz/auth/login`, {password, email}).then((res) => {
            setIsModalOpen(false)
            console.log(res)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.accessToken)
        }).catch((err) => {
            if(err.status == 409) {
                toast.error('User Not found, please Try again')
            } else {
                toast.error('Something went wrong')
            }
        })
    };
    return (
        <Form
            name="basic"
            style={{ width: '100%'}}
            initialValues={{
                email: "",
                password: ""
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
            name="email"
            style={{width: '100%'}} 
            rules={[{ required: true, message: 'Please enter your email!'}]}
            >
            <Input style={{padding: '10px'}}  placeholder='Enter Your Email'/>
            </Form.Item>

            <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
            >
            <Input.Password style={{padding: '10px'}} placeholder='Enter Your Email'/>
            </Form.Item>

            <Form.Item label={null}>
            <Button 
                htmlType="submit"
                style={{
                width: '100%',
                backgroundColor: '#134e9b',
                color: 'white',
                border: 'none',
                padding: '26px 0',
                marginTop: '30px'
                }}
            >
                Login
            </Button>
            </Form.Item>
        </Form>
    )
}

export default FormLogin;