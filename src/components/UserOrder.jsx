import React from "react";
import { Checkbox } from "@material-tailwind/react";



export default function RecentOrders(props) {
  console.log(props.recentUserData)
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Provider</th>
              <th>Active</th>
              <th>Date joined</th>
            </tr>
          </thead>

          <tbody>
            {props.recentUserData.length>0?props.recentUserData.map((order)  => (
              <tr key={order.id}>
                <td><a href="/adduser">{order.id}</a></td>
                <td>{order.username}</td>
                <td>{order.email}</td>
                <td>{order.provider}</td>
                <td>{order.is_active}</td>
                <td>{order.date_joined}</td>
              </tr>
            )):""}
          </tbody>

        </table>
      </div>
    </div>
  );
}
