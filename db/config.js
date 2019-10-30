module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "quickpic",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    logging: false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}


