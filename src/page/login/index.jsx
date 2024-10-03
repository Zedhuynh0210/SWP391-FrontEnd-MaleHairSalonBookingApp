import { Button, Form, Input, message, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import Header from '../../components/header';
import './index.css';
import { useState } from 'react';

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Trạng thái loading

  const onFinish = async (values) => {
    setLoading(true); // Bắt đầu spin loading

    try {
      const response = await axios.post('api/login', {
        username: values.username,
        password: values.password,
      });

      // Giả lập thời gian chờ 1 giây
      setTimeout(() => {
        setLoading(false); // Kết thúc spin loading

        if (response.status === 200) {
          message.success('Login Successfully!');
          navigate('/member');
        }
      }, 1000);
    } catch (error) {
      setLoading(false); // Tắt loading khi có lỗi
      console.error('Error during login:', error.response ? error.response.data : error.message);
      message.error('Login Failed! Please check information again.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-title">LOGIN</div>
        <Spin spinning={loading} tip="Loading...">
          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="login-form"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button
                type="default"
                htmlType="button"
                onClick={() => form.resetFields()}
                style={{ width: '30%' }}
                disabled={loading}
              >
                Reset
              </Button>
              <Button type="primary" htmlType="submit" style={{ width: '30%', marginLeft: '5%' }} disabled={loading}>
                Register
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </>
  );
};

export default Login;
