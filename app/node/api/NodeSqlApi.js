import Mysql from 'mysql';

class NodeSqlApi {
	constructor() {
		this.init = false;
		this.connection = false;
	}

	createConnection(adress, port, user, passwd, dataBase = false) {
		console.log('port', port);
		if (!dataBase) {
			this.connection = Mysql.createConnection({
				host: adress,
				port: port,
				user: user,
				password: passwd
			});
		} else {
			this.connection = Mysql.createConnection({
				host: adress,
				port: port,
				user: user,
				password: passwd,
				database: dataBase
			});
		}
			
	}

	connectToSqlServer(dataConnect, dataBase = false) {
		this.createConnection(dataConnect.adress, dataConnect.port, dataConnect.user, dataConnect.password, dataBase);
		return new Promise((resolve, reject) => {
			this.connection.connect((err) => {
				if (err) return reject(err);
				else {
					console.log('connected as id ' + this.connection.threadId);
					return resolve(true);
				}
			});
		});
	}

	getAllDataBaseInServer(dataConnect) {
		return new Promise((resolve, reject) => {
			this.connectToSqlServer(dataConnect)
				.then(() => {
					const query = 'SHOW DATABASES';
					this.connection.query(query, (error, results, fields) => {
						if (error) return reject(error);
						else {
							console.log('results', results);
							const data = results.map((result) => {
								return result.Database;
							});
							console.log('data', data);
							return resolve(data);
						}
					});
				})
				.catch((err) => {
					console.log('error', err);
					return reject(err);
				});
		});
	}

	
	getDataInDataBase(dataConnect, dataBase) {
		return new Promise((resolve, reject) => {
			this.connectToSqlServer(dataConnect, dataBase)
				.then(() => {
					const query = `SHOW TABLES FROM ${dataBase}`;
					this.connection.query(query, (error, results, fields) => {
						if (error) return reject(error);
						else {
							const data = results.map((result) => {
								return result.Tables_in_mysql;
							});
							return resolve(data);
						}
					});
				})
				.catch((err) => {
					return reject(err);
				});
		});
	}

}

export default new NodeSqlApi();