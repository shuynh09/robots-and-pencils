import React, { Component } from 'react';
import Flight from './components/Flight';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/styles.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import refreshIcon from '../assets/images/refresh.svg';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flights: [],
			success: false,
			reused: false,
			reddit: false
		};
	}

	componentDidMount() {
		axios.get('/api/flights')
			.then(response => {
				this.setState({ flights: response.data })
			});
	}

	handleRefresh = async (event) => {
		event.preventDefault();
		const params = { success: this.state.success, reused: this.state.reused, reddit: this.state.reddit };
		const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&')
		const response = await axios.get('/api/flights?' + queryString);
		this.setState({ flights: response.data })
	};

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		const { flights } = this.state;

		return (
			<div id="app" className="page-wrapper">
				<h1>SpaceX Launches</h1>
				<Container className={"p-0"}>
					<Row id="filters" className={"no-gutters py-3 border border-bottom-0 rounded-top"}>
						<Col className={"pl-4 my-auto"}><button className={"refresh btn btn-link"} href="#" onClick={(event) => this.handleRefresh(event)}><img src={refreshIcon} className={"border border-custom rounded-circle"} alt={"refresh"} height={"32px"} width={"32px"} /></button></Col>
						<Col className={"col-8 checkboxes my-auto"}>
							<div className={"form-check form-check-inline"}>
								<input className={"form-check-input checkbox"} type="checkbox" id="success" name="success" checked={this.state.success} onChange={this.handleChange} />
								<label className={"form-check-label"} htmlFor="success">Land Success</label>
							</div>
							<div className={"form-check form-check-inline"}>
								<input className={"form-check-input checkbox"} type="checkbox" id="reused" name="reused" checked={this.state.reused} onChange={this.handleChange} />
								<label className={"form-check-label"} htmlFor="reused">Reused</label>
							</div>
							<div className={"form-check form-check-inline"}>
								<input className={"form-check-input checkbox"} type="checkbox" id="reddit" name="reddit" checked={this.state.reddit} onChange={this.handleChange} />
								<label className={"form-check-label"} htmlFor="reddit">With Reddit</label>
							</div>
						</Col>
					</Row>
					<Table className={"table-borderless table-responsive flights"}>
						<thead>
							<tr>
								<th className={"text-center"}>Badge</th>
								<th>Rocket Name</th>
								<th>Rocket Type</th>
								<th>Launch Date</th>
								<th>Details</th>
								<th className={"text-center"}>ID</th>
								<th className={"text-center"}>Article</th>
							</tr>
						</thead>
						<tbody>
							<Flight flights={flights}/>
						</tbody>
					</Table>
				</Container>
			</div>
		)
	}
}

export default App
