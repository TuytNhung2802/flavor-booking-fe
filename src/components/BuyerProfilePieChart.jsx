import React from 'react'
import { Chart, BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
Chart.register(BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);


export default function BuyerProfilePieChart(props) {
	const data2 = {
		labels: props.top_user,
		datasets: [
		  {
			label: 'user',
			data: props.num_top_user,
			fill: true,
			backgroundColor: [
				'rgba(75, 192, 192, 0.5)',
				'rgba(255, 99, 132, 0.5)',
				'rgba(255, 205, 86, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(153, 102, 255, 0.5)'
			],
			tension: 0.1
		  }
		]
	};
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Statistics of famous restaurants</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<Pie className='user-chart' data={data2} />
			</div>
		</div>
	)
}