import EventEmitter from 'eventemitter3';

import ActionTypes from './ApplicationActionType';
import ApplicationDispatcher from './ApplicationDispatcher';

class ApplicationStore extends EventEmitter {
	constructor() {
		super();
		this.dataBaseAvaible = [];
	}

	addChangeListener(callback) {
	   this.on('change', callback);
	}

	getDataBaseAvaible() {
		return this.dataBaseAvaible;
	}

	setDataBaseInStore(data) {
		this.dataBaseAvaible = data;
		this.emit('change');
	}

	setDataFromDataBaseInStore(data) {
		console.log('data in base', data);
	}
}

const ApplicationStoreInstance = new ApplicationStore();

ApplicationStoreInstance.dispatchToken = ApplicationDispatcher.register((action) => {
	switch(action.type) {
		case ActionTypes.SET_BASE_IN_STORE:
			ApplicationStoreInstance.setDataBaseInStore(action.data);
			break;

		case ActionTypes.SET_DATA_FROM_DATABASE_IN_STORE:
			ApplicationStoreInstance.setDataFromDataBaseInStore(action.data);
			break;

		default :
			return;
	}
});

export default ApplicationStoreInstance;