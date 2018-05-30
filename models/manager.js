//manager to 

module.exports = function (sequelize, DataTypes) {
  var Manager = sequelize.define("Manager", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    organization_name: DataTypes.STRING,
    city: DataTypes.STRING,
    password: DataTypes.STRING
  });



  return Manager;
};