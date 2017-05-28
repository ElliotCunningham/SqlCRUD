import React, { Component, PropTypes } from 'react';

const styles = {
	container: {
		cursor: 'pointer',
	    alignContent: "center",
	    backgroundColor: "#3F51B5",
	    borderRadius: "4px",
	    color: "#FFF",
	    cursor: "pointer",
	    display: "flex",
	    flex: "1 20%",
	    flexDirection: "column",
	    fontSize: "1em",
	    justifyContent: "center",
	    margin: "4%",
	    maxWidth: "25%",
	    maxHeight: "25%",
	    position: "relative",
	    textAlign: "center"
	},
	title: {
		marginTop: '20%',
		marginBottom: '20%',
		fontSize: "1.8em",
	    textAlign: "center",
	    width: "100%"
	}
};

class DataBaseList extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this._initBindings();
	}

	_initBindings() {

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

	handleSelectAction = (dataBase) => {
		this.props.handleSelectDataBase(dataBase);
	}

	renderListDataBase() {
		return(
			this.props.dataBases.map((base) => {
				return(
					<div key={base} style={styles.container} onTouchTap={() => this.handleSelectAction(base)}>
						<span style={styles.title}> {base} </span>
					</div>
				);
			})
		);
	}

	render() {
		return(
			<div style={{ display: "flex", }}>
				{this.renderListDataBase()}
			</div>
		);
	}
}

export default DataBaseList;