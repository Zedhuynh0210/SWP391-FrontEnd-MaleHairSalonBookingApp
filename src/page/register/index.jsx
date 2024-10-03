import { Button, Form, Input, message, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios'; 
import Header from '../../components/header';
import './index.css';
import { Row, Col } from 'antd'; // Thêm import Row và Col
import { useState } from 'react';

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Trạng thái loading

  const onFinish = async (values) => {
    setLoading(true); // Hiển thị spin loading khi bắt đầu đăng ký

    try {
      const response = await axios.post('api/register', {
        username: values.username,
        password: values.password,
        email: values.email,
        phone_number: values.phone_number,
        address: values.address,
      });

      // Giả lập thời gian chờ 1 giây
      setTimeout(() => {
        setLoading(false); // Tắt spin loading sau 1 giây

        if (response.status === 201) {
          message.success('Register Successfully!');
          navigate('/member');
        }
      }, 1000); // Thời gian loading là 1 giây
    } catch (error) {
      setLoading(false); // Tắt spin loading nếu gặp lỗi
      console.error('Error during registration:', error.response ? error.response.data : error.message);
      message.error('Register Failed! Please check information again.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Header />
      <div className="register-container">
        <div className="register-title">REGISTER</div>
        <Spin spinning={loading} tip="Loading...">
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="register-form wide-form" // Thêm lớp wide-form
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input placeholder="Username" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={[
                    { required: true, message: 'Please confirm your password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Phone Number"
                  name="phone_number"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[{ required: true, message: 'Please input your address!' }]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button
                type="default"
                htmlType="button"
                onClick={() => form.resetFields()}
                style={{ width: '20%' }}
                disabled={loading}
              >
                Reset
              </Button>
              <Button type="primary" htmlType="submit" style={{ width: '20%', marginLeft: '5%' }} disabled={loading}>
                Register
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </>
  );
};

export default Register;
