import React,  { Component, PropTypes } from 'react';

import AppBarConfig from './AppBarConfig';
import ConfigFormulaire from './ConfigFormulaire';

import LocalStorageApi from '../../logic/LocalStorageApi';

const _saveDataInLocalStorage = (name, data) => {
	LocalStorageApi.saveDataInLocalStorage(name, data);
};

class ConfigContainer extends Component {
	constructor() {
		super()
		this.state = {
			isOpen: false,
		};
	}

	componentWillMount() {
		this.router = this.props.router;
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

	setDataInLocalStorage = (name, data) => {
		_saveDataInLocalStorage(name, data);
	}

	render() {
		console.log('local storage', localStorage, window.localStorage);
		return(
			<div>
				<AppBarConfig
					navigateSomewhere={this.navigateSomewhere}
				/>
				<ConfigFormulaire
					setDataInLocalStorage={this.setDataInLocalStorage}
				/>
			</div>
		);
	}
}

export default ConfigContainer;