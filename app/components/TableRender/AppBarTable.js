import React, { Component, PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class AppBarTable extends Component {
	constructor() {
		super();
		this.state = {

		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	shouldStateChange(nextState) {
		return this.state.isOpenDrawer !== nextState.isOpenDrawer;
	}

	shouldPropsChange(nextProps) {
		return this.props !== nextProps;
	}

	handleNavigationBack = () => {
		this.props.navigateSomewhere('');
	}

	render() {
		return(
			<div>
				<Toolbar>
					<ToolbarGroup firstChild={true}>
						<ToolbarTitle text={`Liste des Table de la base ${this.props.currentBdd}`}/>
					</ToolbarGroup>
					<ToolbarGroup>
						<RaisedButton label="retour" primary={true} onTouchTap={this.handleNavigationBack}/>
					</ToolbarGroup>
				</Toolbar>
			</div>
		);
	}
}

export default AppBarTable;