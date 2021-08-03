import React from 'react';

class CryptoChart extends React.Component {
	constructor(props) {
		super(props);
		this.makeChart = this.makeChart.bind(this);
	}
	componentDidMount() {
		this.makeChart();
	}
	componentDidUpdate() {
		this.makeChart();
	}
	makeChart() {
		let labels = Object.keys(this.props.data);
		let data = Object.keys(this.props.data).map((key) => this.props.data[key]);
		var chartContext = document.getElementById('myChart').getContext('2d');
		new Chart(chartContext, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Bitcoin Price Index (BPI) data',
						data: data,
						backgroundColor: 'rgba(54, 162, 235, 0.2)',
						borderColor: 'rgba(54, 162, 235, 1)',
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					yAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: this.props.currency,
							},
						},
					],
				},
			},
		});
	}
	render() {
		return <canvas id="myChart"></canvas>;
	}
}

export default CryptoChart;
