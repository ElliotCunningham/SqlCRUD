import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';

import ApplicationAction from '../../logic/flux/ApplicationAction'
import ApplicationStore from '../../logic/flux/ApplicationStore';

import DataBaseList from './DataBaseList';

const _selectADataBase = (dataBase) => {
	ApplicationAction.selectADataBase(dataBase);
};

const _reloadState = () => {
	const dataBases = ApplicationStore.getDataBaseAvaible();

	return {
		dataBases,
	};
};


class TableContainer extends Component {
	constructor(props) {
		super(props);
		this.state = _reloadState();
		this.connected = false;
		this._initBindings();
	}

	_initBindings() {
		this._onChanges = this._onChanges.bind(this);
	}

	_onChanges() {
    	this.setState(_reloadState());
  	}

	componentWillMount() {
		this.router = this.props.router;
		ApplicationStore.addChangeListener(this._onChanges);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.shouldStateChange(nextState)
			|| this.shouldPropsChange(nextProps);
	}

	shouldStateChange(nextState) {
		return this.state.dataBases !== nextState.dataBases;
	}

	shouldPropsChange(nextProps) {
		return this.props !== nextProps;
	}

	navigateSomewhere = (somewhere) => {
		this.router.push(somewhere);
	}

	handleSelectDataBase(dataBase) {
		console.log('you have select', dataBase);
		_selectADataBase(dataBase);
	}

	render() {
		console.log('state', this.state);
		return(
			<div>
				<DataBaseList
					dataBases={this.state.dataBases}
					handleSelectDataBase={this.handleSelectDataBase}
				/>
			</div>
		);
	}
}

export default TableContainer;