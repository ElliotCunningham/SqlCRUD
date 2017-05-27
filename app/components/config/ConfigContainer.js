import React,  { Component, PropTypes } from 'react';

import AppBarConfig from './AppBarConfig';
import ConfigFormulaire from './ConfigFormulaire';

import LocalStorageApi from '../../logic/LocalStorageApi';

const _reloadState = () => {
	const data = LocalStorageApi.getDataInLocalStorage('conectionInfo', true);
	const adress = data.adress;
	const port = data.port;
	const user = data.user;
	const passwd = data.password;

	return {
		adress,
		port,
		user,
		passwd
	};
};

const _saveDataInLocalStorage = (name, data, callback) => {
	LocalStorageApi.saveDataInLocalStorage(name, data, callback);
};

class ConfigContainer extends Component {
	constructor() {
		super()
		this.state = _reloadState();
	}

	_onChangeSomething = () => {
		this.state = _reloadState();
	}

	componentWillMount() {
		this.router = this.props.router;
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.shouldStateChange(nextState)
			|| this.shouldPropsChange(nextProps);
	}

	shouldStateChange(nextState) {
		return this.state.user !== nextState.user
			|| this.state.adress !== nextState.adress
			|| this.state.port !== nextState.port
			|| this.state.passwd !== nextState.passwd;
	}

	shouldPropsChange(nextProps) {
		return this.props !== nextProps;
	}

	navigateSomewhere = (somewhere) => {
		this.router.push(somewhere);
	}

	setDataInLocalStorage = (name, data, callback) => {
		_saveDataInLocalStorage(name, data, callback);
	}

	render() {
		return(
			<div>
				<AppBarConfig
					navigateSomewhere={this.navigateSomewhere}
				/>
				<ConfigFormulaire
					setDataInLocalStorage={this.setDataInLocalStorage}
					user={this.state.user}
					passwd={this.state.passwd}
					adress={this.state.adress}
					port={this.state.port}
					updateCallBack={this._onChangeSomething}
				/>
			</div>
		);
	}
}

export default ConfigContainer;