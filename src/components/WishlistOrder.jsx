import React from "react";
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";



export default function RecentOrders(props) {
  console.log(props.recentOrderData)
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Use</th>
              <th>Restaurant</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {props.recentOrderData.length>0? props.recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>{order.account.username}</td>
                <td>{order.restaurant.title}</td>
                <td>{order.date}</td>
              </tr>
            )):""}
          </tbody>
        </table>
      </div>
    </div>
  );
}
