import { Sequelize } from 'sequelize-typescript';

//connect to our database
export const sequelize = new Sequelize({
  database: 'Chat', //db name
  dialect: 'sqlite', //db flavor: sqlite, mysql, postgres
  username: 'root',
  password: '',
  storage: 'chat.db', //db filename for sqlite
  models: [`${__dirname}/models`],
  logging: false //to avoid seeing Db messages,
});
