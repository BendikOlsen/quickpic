'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    commentText: DataTypes.STRING,
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User)
    Comment.belongsTo(models.Picture)
  };
  return Comment;
};