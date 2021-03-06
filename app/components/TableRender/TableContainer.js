import React, { Component, PropTypes } from 'react';

import AppBarTable from './AppBarTable';

import ApplicationStore from '../../logic/flux/ApplicationStore';


const _reloadState = () => {
	const tablesInBdd = ApplicationStore.getTableInDataBase();
	const currentBdd = ApplicationStore.getCurrentBdd();

	return {
		tablesInBdd,
		currentBdd,
	};
};

class TableContainer extends Component {
	constructor() {
		super();
		this.state = _reloadState();
		this._initBindings();
	}

	_initBindings() {
		this._onChanges = this._onChanges.bind(this);
		this.navigateSomewhere = this.navigateSomewhere.bind(this);
	}

	_onChanges() {
    	this.setState(_reloadState());
  	}

	componentWillMount() {
		console.log(this.props, this.context);
		this.router = this.props.router;
		ApplicationStore.addChangeListener(this._onChanges);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.shouldStateChange(nextState)
			|| this.shouldPropsChange(nextProps);
	}

	shouldStateChange(nextState) {
		return this.state.tablesInBdd !== nextState.tablesInBdd;
	}

	shouldPropsChange(nextProps) {
		return this.props !== nextProps;
	}

	navigateSomewhere(somewhere) {
		this.router.push(somewhere);
	}

	render() {
		console.log(this.state);
		return(
			<div>
				<AppBarTable 
					navigateSomewhere={this.navigateSomewhere}
					currentBdd={this.state.currentBdd}
				/>
			</div>
		);
	}
}

export default TableContainer;