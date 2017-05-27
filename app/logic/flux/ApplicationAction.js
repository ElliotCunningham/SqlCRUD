import ApplicationActionType from './ApplicationActionType';
import ApplicationDispatcher from './ApplicationDispatcher';

import LocalStorageApi from '../LocalStorageApi';
import HttpApi from '../HttpApi';

class ApplicationAction {
	constructor() {
		this.getAllDataBaseInBdd();
	}

	getAllDataBaseInBdd() {
		const dataConnexion = LocalStorageApi.getDataInLocalStorage('conectionInfo', true);
		HttpApi.getAllDataBase(dataConnexion)
			.then((res) => {
				ApplicationDispatcher.dispatch({
					type: ApplicationActionType.SET_BASE_IN_STORE,
					data: res.data
				});
			})
			.catch((err) => {
				console.log('error get DataBase in SQL serveur', err);
			});
	}

	selectADataBase(dataBase) {
		const dataConnexion = LocalStorageApi.getDataInLocalStorage('conectionInfo', true);
		HttpApi.selectADataBase(dataConnexion, dataBase)
			.then((res) => {
				ApplicationDispatcher.dispatch({
					type: ApplicationActionType.SET_DATA_FROM_DATABASE_IN_STORE,
					data: res.data
				});
			})
			.catch((err) => {
				console.log('error get data in base', err);
			});
	}


}

export default new ApplicationAction();