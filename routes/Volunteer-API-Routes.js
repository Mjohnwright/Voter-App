var db = require("../models");

module.exports = function (app) {

        //API Route for Volunteer to regster as user
        app.post("/api/newVolunteer", function (req, res) {
            db.Volunteer.create(req.body).then(function (dbVolunteer) {
                res.json(dbVolunteer)
            });
        });

    //API Route for Volunteer to see all events
    // app.get("/api/events", function (req, res) {
    app.get("/api/events/:id", function (req, res) {

        var query = {};
        db.CampaignEvent.findAll({
            where: query
        }).then(function (dbCampaignEvent) {
            res.json(dbCampaignEvent)
        });
    });



    // API Route for Volunteer to register for event
    app.post("/api/postreg", function (req, res) {
        console.log(req.body);
        db.EventVolunteer({
            id: req.body.id,
            time_slot: req.body.time_slot
        }, {
            where: {
                //this is the event id
                id: req.body.id
            }
        }).then(function (dbEventVolunteer) {
            res.json(dbEventVolunteer);
        });
    });


};



