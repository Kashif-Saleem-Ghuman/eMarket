import React from "react";
import { Button, ConfigProvider } from "antd";
import theme from "../theme/themeConfig";

export default function Page() {
  return (
    <ConfigProvider>
      <div className="flex p-5 flex-col">
        <Button type="primary">Button</Button>
        <h1 className="text-2xl  ">Online Market Place</h1>
      </div>
    </ConfigProvider>
  );
}
