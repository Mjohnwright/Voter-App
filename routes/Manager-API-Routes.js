var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

  // Posts Manager when a new ACCOUNT is created 
  app.post("/api/manager", function (req, res) {
    console.log("req.body = ", req.body);
    db.Manager.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        organization_name: req.body.organization_name,
        city: req.body.city,
        password: req.body.password,
        // passwordConf: req.body.passwordConf    

      })
      .then(function (dbManager) {
        res.json(dbManager);
        console.log("event is through the API-ROUTE");
      });
  });

  app.get("/api/manager/:email", function(req,res){
    db.Manager.findOne({
      where: {
        email:req.params.email
      }
    }).then(function(dbManager){
      res.json(dbManager.toJSON());

    })
  });


  // Posts Manager EVENTS for the Manager 
  app.post("/api/managersevents", function (req, res) {
    console.log("req.body = ", req.body);
    db.CampaignEvent.create({
        event_title: req.body.event_title,
        organization_name: req.body.organization_name,
        organizer_first_name: req.body.organizer_first_name,
        organizer_last_name: req.body.organizer_last_name,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        phone_number: req.body.phone_number,
        volunteers_needed: req.body.volunteers_needed,
        event_description: req.body.event_description,
        ManagerId: req.body.managerId
      })
      .then(function (dbCampaignEvent) {
        res.json(dbCampaignEvent);
        console.log("event is through the API-ROUTE");

      });
  });

  // Get EVENTS for the Manager 
  //THIS MIGHT NEED A PARAMETER BASED UP MANAGER ID
  app.get("/api/events/:id", function (req, res) {
    CampaignEvent.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (res) {
      return res.json(results);
    });

  });

};