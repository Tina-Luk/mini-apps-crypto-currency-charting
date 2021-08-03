import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment().subtract(1, 'months').toDate(),
			endDate: moment().toDate(),
			currency: 'USD',
		};
		this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
		this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
		this.search = this.search.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		this.search();
	}
	handleChangeStartDate(date) {
		this.setState({
			startDate: date,
		});
	}
	handleChangeEndDate(date) {
		this.setState({
			endDate: date,
		});
	}
	handleChange(event) {
		this.setState({ currency: event.target.value });
	}
	search() {
		let start = moment(this.state.startDate).format('YYYY-MM-DD');
		let end = moment(this.state.endDate).format('YYYY-MM-DD');
		this.props.onSearch(start, end, this.state.currency);
	}
	render() {
		return (
			<div>
				Start Date: <DatePicker selected={this.state.startDate} onChange={this.handleChangeStartDate} />
				<br />
				<br />
				End Date: <DatePicker selected={this.state.endDate} onChange={this.handleChangeEndDate} />
				<br />
				<br />
				Currency:{' '}
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="USD">USD</option>
					<option value="AED">AED</option>
					<option value="CAD">CAD</option>
					<option value="CHF">CHF</option>
					<option value="CNY">CNY</option>
					<option value="EUR">EUR</option>
					<option value="KRW">KRW</option>
					<option value="XBT">XBT</option>
				</select>
				<br />
				<br />
				<button onClick={this.search}> Update </button>
			</div>
		);
	}
}

export default Search;
