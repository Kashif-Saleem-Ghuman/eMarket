import React from "react";
import { Button, ConfigProvider } from "antd";
import theme from "../theme/themeConfig";

export default function Page() {
  return (
    <ConfigProvider>
      <div className="flex flex-col w-1/3 p-5 gap-5 m-auto">
        <h1 className="text-5xl text-center mt-5 ">Online Market Place</h1>
        <Button type="primary">Button</Button>
      </div>
    </ConfigProvider>
  );
}
