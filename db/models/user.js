'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    last_login: DataTypes.DATE
    
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Picture)
    User.hasMany(models.Comment)
  };
  return User;
};