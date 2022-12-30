import React from 'react';
//import "antd/dist/antd.css";
import './SideBar.scss'
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faUtensils } from '@fortawesome/free-solid-svg-icons';
const { SubMenu } = Menu;
  
export default function SideBar() {
  
  return (
    <div class="ctsidebar">
      <div class={StyleSheet.sideBar}>
      <Menu
        //defaultOpenKeys={['1']}
        defaultSelectedKeys={['1']}
        style={{ width: 240 }}
        mode="inline"
      >
        <SubMenu key="1" title="QUẢN LÝ MENU" >
          <Menu.Item key="1.2">Tạo món mới</Menu.Item>
          <Menu.Item key="1.3">Xóa món ăn</Menu.Item>
          <Menu.Item key="1.5">Chỉnh sửa</Menu.Item>
        </SubMenu>
        <SubMenu key="2" title="QUẢN LÝ ĐƠN HÀNG">
          <Menu.Item key="2.1">Danh sách đơn</Menu.Item>
          <Menu.Item key="2.2">Chờ xác nhận</Menu.Item>
          <Menu.Item key="2.3">Đang giao</Menu.Item>
          <Menu.Item key="2.4">Đã giao</Menu.Item>
          <Menu.Item key="2.5">Đã hủy</Menu.Item>
        </SubMenu>
        <Menu.Item key="3">Tin nhắn</Menu.Item>
      </Menu>
    </div>
    </div>
    
  );
}