import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import uploadFile from "../../../utils/file";

function ProductManagement() {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [form] = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false); // Trạng thái để kiểm tra cập nhật hay tạo mới
  const [currentUserId, setCurrentUserId] = useState(null); // ID của người dùng hiện tại

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const api = "https://670027404da5bd237553603f.mockapi.io/Product";

  const fetchUser = async () => {
    const response = await axios.get(api);
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
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => {
        return <Image src={image} alt="" width={50} />;
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, users) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setIsUpdate(true);
              setCurrentUserId(id);
              form.setFieldsValue(users);
              setOpenModal(true);
            }}
          >
            Update
          </Button>

          <Popconfirm
            title="Delete"
            description="Do you want to delete this product?"
            onConfirm={() => handleDelete(id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleOpenModal = () => {
    setIsUpdate(false);
    form.resetFields();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (userData) => {
    if (fileList.length > 0) {
      const file = fileList[0];
      const url = await uploadFile(file.originFileObj);
      userData.image = url; // Cập nhật đường dẫn ảnh
    }

    try {
      setSubmitting(true);
      if (isUpdate) {
        // Cập nhật người dùng
        await axios.put(`${api}/${currentUserId}`, userData);
        toast.success('Successfully updated product!');
      } else {
        // Tạo người dùng mới
        await axios.post(api, userData);
        toast.success('Successfully created a new product!');
      }
      setOpenModal(false);
      form.resetFields();
      fetchUser(); // Lấy lại danh sách người dùng
    } catch (err) {
      toast.error('Failed to save product.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (userID) => {
    try {
      await axios.delete(`${api}/${userID}`);
      toast.success("Delete Successfully!");
      fetchUser();
    } catch (ex) {
      toast.error("Failed to delete product!");
    }
  };

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
        background: 'white',
        color: 'black',
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8, color: 'black' }}>Upload</div>
    </button>
  );

  return (
    <div>
      <h1>Product Management</h1>
      <Button onClick={handleOpenModal}>Create new product</Button>
      <Table columns={columns} dataSource={users} />
      <Modal
        confirmLoading={submitting}
        onOk={() => form.submit()}
        title={isUpdate ? "Update Product" : "Create New Product"}
        open={openModal}
        onCancel={handleCloseModal}
      >
        <Form onFinish={handleSubmit} form={form}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input name!" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Quantity" name="quantity" rules={[{ required: true, message: "Please input quantity!" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description" rules={[{ required: true, message: "Please input description!" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Price" name="price" rules={[{ required: true, message: "Please input price!" }]}>
            <Input />
          </Form.Item>


          <Form.Item label="Image" name="image">
            <Upload
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
          wrapperStyle={{ display: 'none' }}
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

export default ProductManagement;
