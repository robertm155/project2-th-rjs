module.exports = function(sequelize, DataTypes) {
    var character = sequelize.define("characters", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      Class: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
        
      },
     
      Strength: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
        
      },
      Defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
        
      },

      Magic: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
        
      },
      Speed: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
      
    });
  
    //Post.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
     // Post.belongsTo(models.Author, {
       // foreignKey: {
          //allowNull: false
        //}
     // });
   // };
  
    return character;
  };
