const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('text', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    palindromo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },{timestamps: false});
};
