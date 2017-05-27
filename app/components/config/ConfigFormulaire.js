import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ConfigFormulaire extends Component {
	constructor() {
		super();
		this.state = {

		};
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

	handleSubmitAction = () => {
		const connexionInfo = {
			adress: this.refs.adressInput.getValue(),
			port: this.refs.portInput.getValue(),
			user: this.refs.userInput.getValue(),
			password: this.refs.passwdInput.getValue()
		};
		console.log('connexion info', connexionInfo);

		this.props.setDataInLocalStorage('conectionInfo', connexionInfo, this.props.updateCallBack());
	}

	renderAdressConnexion() {
		return(
			<div style={{ marginTop: "5%" }}>
				<TextField
			      hintText="Tapez le texte"
			      floatingLabelText="Adress de connexion de la Base"
			      ref="adressInput"
			      fullWidth={true}
			      defaultValue={this.props.adress}
			    />
			</div>
		);
	}

	renderPortConnexion() {
		return(
			<div style={{ marginTop: "5%" }}>
				<TextField
			      hintText="Tapez le texte"
			      floatingLabelText="Port de connexion de la Base"
			      ref="portInput"
			      fullWidth={true}
			      defaultValue={this.props.port}
			    />
			</div>
		);
	}

	renderUserConnexion() {
		return(
			<div style={{ marginTop: "5%" }}>
				<TextField
			      hintText="Tapez le texte"
			      floatingLabelText="Utilisateur de connexion de la Base"
			      ref="userInput"
			      fullWidth={true}
			      defaultValue={this.props.user}
			    />
			</div>
		);
	}

	renderMDPConnexion() {
		return(
			<div style={{ marginTop: "5%" }}>
				<TextField
			      hintText="Tapez le texte"
			      floatingLabelText="mot de passe de connexion de la Base"
			      ref="passwdInput"
			      fullWidth={true}
			      type="password"
			      defaultValue={this.props.passwd}
			    />
			</div>
		);
	}

	renderValidation() {
		return(
			<div style={{ float: 'right', marginTop: '10%' }}>
				<RaisedButton primary={true} label="Valider" onTouchTap={this.handleSubmitAction}/>
			</div>
		);
	}

	render() {
		return(
			<div>
				{this.renderAdressConnexion()}
				{this.renderPortConnexion()}
				{this.renderUserConnexion()}
				{this.renderMDPConnexion()}
				<div className="Validation">
					{this.renderValidation()}
				</div>
			</div>
		);
	}
}

export default ConfigFormulaire;