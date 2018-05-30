// *****************************************************************************
// event-volunteers.js - This file creates the join table for the many to many relationship between volunteer and events.  
// ******************************************************************************
//POST request will grab volunteer ID and Event ID and put them into the table as rows


module.exports = function (sequelize, DataTypes) {
  var EventVolunteer = sequelize.define("EventVolunteer", {
    time_slot: DataTypes.STRING(45),
  });
  EventVolunteer.associate = function (models) {
    models.CampaignEvent.belongsToMany(models.Volunteer, {
      through: EventVolunteer
    });
    models.Volunteer.belongsToMany(models.CampaignEvent, {
      through: EventVolunteer
    });
  }
  return EventVolunteer;

}


//hopefully this will allow people to create a volunteer and sign up for an event in one action, but right now it is not working. 
//db.CampaignEvent.addVolunteer({first_name: 'Joe', last_name: 'The', email: 'thejoe@yoyoyoyoy.com'}, {through: {time_slot: 'afternoon'}});
//models.Volunteer.addCampaignEvent(models.CampaignEvent, { through: { time_slot: 'afternoon' }});