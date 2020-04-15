var Sequelize = require("sequelize");
var sequelize = require("");

var Character = sequelize.define("character", {
  Name: Sequelize.STRING,

  Role: Sequelize.STRING,

  Strength: Sequelize.STRING,

  Defense: Sequelize.INTEGER,
  
  Magic: Sequelize.INTEGER,

  Speed: Sequelize.INTEGER,
  
});

Character.associate = function(models) {
  
  Character.belongsTo(models.User, {
  });
};

return Character;