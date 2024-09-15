import React from 'react'
import { Link } from 'react-router-dom'

export default function RecentOrders(props) {
	const status = ["Awaiting confirmation", "Confirmed", "Cancel", "Complete"];
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">The current order of the restaurant</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Oid</th>
							<th>Order Date</th>
							<th>Price</th>
							<th>Product Status</th>
							<th>Time from</th>
							<th>Time to</th>
							<th>Number people</th>
							<th>Restaurant</th>
						</tr>
					</thead>
					<tbody>
						{props.orders.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>{order.date}</td>
								<td>{order.price}</td>
								<td>{status[order.product_status]}</td>
								<td>{order.time_from}</td>
								<td>{order.time_to}</td>
								<td>{order.number_people}</td>
								{/* <td>{order.restaurant.title}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}