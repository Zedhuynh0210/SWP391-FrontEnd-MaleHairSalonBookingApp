import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import uploadFile from "../../../utils/file";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [form] = useForm();
  const [submitting, setSubmitting] = useState(false);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const api = "https://670027404da5bd237553603f.mockapi.io/User";

  const fetchUser = async () => {
    const response = await axios.get(api);
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "role",
    },
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render:(image) => {
            return <Image src={image} alt="" width={50}/>
        },
    },
    {
        title: "Action",
        dataIndex: "id",
        key: "id",
        render:(id) => {
          return <>
          <Popconfirm
                title="Delete"
                description="Do you want to delete this user?"
                onConfirm={() => handleDelete(id)}
            >
                
            <Button type="primary" danger>
                Delete
            </Button>
          </Popconfirm>
          </>
        }
    },
  ];
    
    const handleOpenModal = () => {
       setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
     }

    const handleSubmit = async (users) => {

        if(fileList.length > 0){
            const file = fileList[0];
            console.log(file);
            const url = await uploadFile(file.originFileObj);
            users.image = url;
        }

        console.log(users);
        try {
            setSubmitting(true);
            const response = await axios.post(api, users);
            console.log(response);
            toast.success('Successfully created a new user!');
            setOpenModal(false);
            form.resetFields();
            
            // Fetch the updated list of users after adding a new user
            fetchUser(); 
        } catch (err) {
            toast.error('Failed to create user.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (userID) => {
        try{
            await axios.delete(`${api}/${userID}`);
            toast.success("Delete Successfully!");
            fetchUser();
        }catch(ex){
            toast.error("Failed to delete user!");
        }
        
    }

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

        const handlePreview = async (file) => {
            if (!file.url && !file.preview) {
              file.preview = await getBase64(file.originFileObj);
            }
            setPreviewImage(file.url || file.preview);
            setPreviewOpen(true);
          };
          const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
          const uploadButton = (
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          );
    
      
  return (
    <div>
      <h1>User Management</h1>
      <Button onClick={handleOpenModal}>Create new user</Button>
      <Table columns={columns} dataSource={users} />
      <Modal confirmLoading={submitting} onOk={() => form.submit()} title="Create new user" open={openModal} onCancel={handleCloseModal}>
         <Form onFinish={handleSubmit} form={form}>
            <Form.Item label="Username" name="name" rules={[
                {
                    required: true,
                    message: "Please input username!",
                }
            ]}>
                <Input/>
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[
                {
                    required: true,
                    message: "Please input email!",
                },
            ]}>
                <Input/>
            </Form.Item>

            <Form.Item label="Phone" name="phone" rules={[
                {
                    required: true,
                    message: "Please input phone!",
                },
                {
                    pattern: /^\d{10}$/,
                    message: "Invalid Format!"
                }
            ]}>
                <Input/>
            </Form.Item>

            <Form.Item label="Role" name="role" rules={[
                {
                    required: true,
                    message: "Please input role!",
                }
            ]}>
                <Input/>
            </Form.Item>

            <Form.Item label="Image" name="image">
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            </Form.Item>
         </Form>
      </Modal>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}

    </div>
  );
}
export default UserManagement;
