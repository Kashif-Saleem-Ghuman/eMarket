"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import { usePathname } from "next/navigation";

const items: MenuProps["items"] = [
  {
    label: <Link href="/">Home</Link>,
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/login">Login</Link>,
    key: "/login",
    icon: <LoginOutlined />,
  },
  {
    label: <Link href="/register">Register</Link>,
    key: "/register",
    icon: <UserAddOutlined />,
  },
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState("");
  const pathName = usePathname();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  React.useEffect(() => {
    console.log("Path name: ", pathName);
    setCurrent(pathName);
  }, [pathName]);

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ display: "flex", justifyContent: "center" }}
    />
  );
};

export default NavBar;
