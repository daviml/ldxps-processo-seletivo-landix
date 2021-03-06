import Sequelize from 'sequelize';

import Client from '../app/models/Client';
import Seller from '../app/models/Seller';

import dbConfig from '../config/database';

const models = [Client, Seller];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
