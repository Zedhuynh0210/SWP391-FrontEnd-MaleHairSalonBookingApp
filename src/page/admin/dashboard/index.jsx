import { Card, Space, Statistic, Typography } from 'antd'
import './index.css';
import { CustomerServiceOutlined, DollarCircleOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

function Dashboard() {
  return (
    <div className='dashboard'>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction='horizontal'>
          <DashboardCard
           icon={<CustomerServiceOutlined
            style={{
              color:"green", 
              backgroundColor: "rgba(0,255,0,0.25)", 
              borderRadius: 12, 
              fontWeight: 24,
              padding: 8,
              }}
            />
          }
            title={"Services"}
            value={12345}
          />
          <DashboardCard
           icon={<ShopOutlined
            style={{
              color:"blue", 
              backgroundColor: "rgba(0,0,255,0.25)", 
              borderRadius: 12, 
              fontWeight: 24,
              padding: 8,
              }}
           />
          } 
           title={"Inventory"} 
           value={12345}
          />
          <DashboardCard
           icon={<ShoppingCartOutlined
            style={{
              color:"gray", 
              backgroundColor: "rgba(128,128,128,0.25)", 
              borderRadius: 12, 
              fontWeight: 24,
              padding: 8,
              }}
           />
          } 
           title={"Orders"} 
           value={12345}
          />
          <DashboardCard
           icon={<UserOutlined
            style={{
              color:"purple", 
              backgroundColor: "rgba(0,255,255,0.25)", 
              borderRadius: 12, 
              fontWeight: 24,
              padding: 8,
              }}
           />
          } 
           title={"Users"} 
           value={12345}
          />
          <DashboardCard
           icon={<DollarCircleOutlined
            style={{
              color:"red", 
              backgroundColor: "rgba(255,0,0,0.25)", 
              borderRadius: 12, 
              fontWeight: 24,
              padding: 8,
              }}
           />
          } 
           title={"Revenue"} 
           value={12345}
          />
          </Space>
    </div>
  );
}

function DashboardCard({title, value, icon}){
  return(
    <Card className='card'>
          <Space direction='horizontal'>
             {icon}
            <Statistic title={title} value={value}/>
            </Space>
          </Card>
  );
}


export default Dashboard