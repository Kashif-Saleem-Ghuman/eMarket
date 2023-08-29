"use client";

import React, { useState } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ display: "flex", justifyContent: "center"}}
    
    >
      <Item icon={<HomeOutlined />} key="home">
        <Link href="/">Home</Link>
      </Item>
      <Item icon={<LoginOutlined />} key="login">
        <Link href="/login">Login</Link>
      </Item>
      <Item icon={<UserAddOutlined />} key="register">
        <Link href="/register">Register</Link>
      </Item>
    </Menu>
  );
};

export default NavBar;
