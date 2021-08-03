import React from 'react';
import Search from './search.jsx';
import CryptoChart from './chart.jsx';
import axios from 'axios';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			currency: 'USD',
		};
		this.search = this.search.bind(this);
	}

	search(start, end, currency) {
		axios
			.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}&currency=${currency}`)
			.then((response) => {
				this.setState({
					data: response.data.bpi,
					currency: currency,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<h1>Cryptocurrency Charting Tool</h1>
				<CryptoChart data={this.state.data} currency={this.state.currency} />
				<Search onSearch={this.search} />
			</div>
		);
	}
}

export default Main;
