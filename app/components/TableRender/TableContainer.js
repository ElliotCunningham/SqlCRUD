import React, { Component, PropTypes } from 'react';

import HttpApi from '../../logic/HttpApi';

class TableContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
		this.connected = false;
		this._initBindings();
	}

	_initBindings() {

	}

	componentWillMount() {
		this.router = this.props.router;
		this.connecteServer();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.shouldStateChange(nextState)
			|| this.shouldPropsChange(nextProps);
	}

	shouldStateChange(nextState) {
		return this.state.isOpen !== nextState.isOpen;
	}

	shouldPropsChange(nextProps) {
		return this.props !== nextProps;
	}

	navigateSomewhere = (somewhere) => {
		this.router.push(somewhere);
	}

	connecteServer = () => {
		HttpApi.getRequest({}, 'http://localhost:3000/connect')
			.then((res) => {
				console.log('res', res);
				this.connected = true;
			})
			.catch((err) => {
				console.log('error', err);
			})
	}

	render() {
		return(
			<div>Ici on va mettre les info de la Bdd</div>
		);
	}
}

export default TableContainer;