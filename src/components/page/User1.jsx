import React from "react";
import UserOutlet from "../UserOutlet";
import { RightOutlined, PauseOutlined } from "@ant-design/icons";

export default function User1() {
  return (
    <div className="flex flex-col gap-4">
      <div className="  flex gap-4 w-full px-4 py-4 mb-4 flex-row ">
        <p className="font-medium">WISHLISTS </p>
        <PauseOutlined />
        <p> Home</p>
        <RightOutlined />
        <p>Auths</p>
        <RightOutlined />
        <p>Users</p>
        <RightOutlined />
        <p>Add user</p>
      </div>

      <div className="flex flex-row gap-4 w-full">
        <UserOutlet />
      </div>
    </div>
  );
}
