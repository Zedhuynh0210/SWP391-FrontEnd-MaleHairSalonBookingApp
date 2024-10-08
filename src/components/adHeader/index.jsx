import { Badge, Image, Space, Typography } from 'antd';
import './index.css';
import { BellFilled, MailOutlined } from '@ant-design/icons';
function AdHeader() {
  return (
    <div className="adheader">
        <Image 
        width={40} 
        src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg">

        </Image>
        <Typography.Title>Admin's Dashboard</Typography.Title>
        <Space>
            <Badge count={10} dot>
                <MailOutlined style={{ fontSize: 24 }}/>
            </Badge>
            <Badge count={20}>
                <BellFilled style={{ fontSize: 24 }}/>
            </Badge>
        </Space>
    </div>
  )
}

export default AdHeader;