'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Picture.associate = function(models) {
    Picture.belongsTo(models.User)
    Picture.hasMany(models.Comment)
  };
  return Picture;
};