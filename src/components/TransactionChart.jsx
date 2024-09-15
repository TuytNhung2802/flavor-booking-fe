import React from 'react'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import { Chart, BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

export default function TransactionChart(props) {
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [
			  {
		
				label: 'Order',
				data: props.num_order,
				fill: false,
				backgroundColor: '#b1f3b1',
				tension: 0.1
			  }
			]
	}
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
			<Bar className='order-chart' data={data} />
			</div>
		</div>
	)
}