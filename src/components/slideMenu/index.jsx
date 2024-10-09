import { AppstoreOutlined, CustomerServiceOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SlideMenu() {
    const navigate = useNavigate()
  return (
    <div className="slidemenu">
        <Menu
        className="slidemenuvertical"
        mode="vertical"
        onClick={(item)=>{
           navigate(item.key);
        }}
         items={[
        {
            label:"Dashboard",
            icon:<AppstoreOutlined/>,
            key:'/admin/dashboard'
        },
        {
            label:"Services",
            icon:<CustomerServiceOutlined />,
            key:'/admin/services'
        },
        {
            label:"Inventory",
            icon:<ShopOutlined/>,
            key:'/admin/inventory',
        },
        {
            label:"Orders",
            icon:<ShoppingCartOutlined/>,
            key:'/admin/orders',
        },
        {
            label:"Users",
            icon:<UserOutlined/>,
            key:'/admin/users',
        }
        ]}>

        </Menu>
    </div>
  )
}

export default SlideMenu;