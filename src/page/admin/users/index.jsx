import { Avatar, Space, Table, Typography } from 'antd'
import './index.css';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../components/api';

function Users() {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    setLoading(true)
    getUsers().then(res=>{
      setDataSource(res.users)
      setLoading(false)
    })

  }, [])
  

  return (
    <Space size={20} direction='vertical'>
        <Typography.Title className='inventory' level={4}>Users</Typography.Title>
        <Table 
        loading={loading}
        columns={[
          {
            title:"Image",
            dataIndex: "image",
            render:(link)=>{
              return <Avatar src={link}/>;
            },
          },
          {
            title:"FirstName",
            dataIndex: "firstName"
          },
          {
            title:"LastName",
            dataIndex: "lastName",
          },
          {
            title:"Email",
            dataIndex: "email",
          },
          {
            title:"Phone",
            dataIndex: "phone"
          },
          {
            title:"Address",
            dataIndex: "address",
            render:(address)=>{
              return <span>{address.address}, {address.city}</span>
            }
          }
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize:5,
        }}
        ></Table>
    </Space>
  )
}

export default Users