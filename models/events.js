// *****************************************************************************
// events.js - This file creates the campaign events table
//
// ******************************************************************************

module.exports = function(sequelize, DataTypes) {
    var CampaignEvent = sequelize.define("CampaignEvent", {
      event_title: DataTypes.STRING,
      event_description: DataTypes.STRING,
      organization_name: DataTypes.STRING,
      organizer_first_name: DataTypes.STRING, 
      organizer_last_name: DataTypes.STRING,
      street_address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      volunteers_needed: DataTypes.INTEGER
      
    });
  
    CampaignEvent.associate = function(models) {
      // We're saying that a Campaign Event should belong to an Author
      // A Campaign Event can't be created without an Author due to the foreign key constraint
      // By default the foreign key is ManagerID
      CampaignEvent.belongsTo(models.Manager, {
        foreignKey: {
          allowNull: false
        }
      });
    };
     
    return CampaignEvent;
  };
  