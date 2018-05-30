  var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/VolCreateAccount.html"));
  });

    app.get("/users", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/VolLogin.html"));
    });

    app.get("/events", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/VolEventListings.html"));
  });

  // loads MgrCreateAccount.html
  app.get("/managers", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/MgrCreateAccount.html"));
  });

  app.get("/managerlogin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/MgrLogIn.html"));
  });

  // loads MgrEventCreate.html
  app.get("/eventCreate", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/MgrCreateEvent.html"));
  });

    // Retrieve forgotten password MGR and VOL??????????
    //UNDER CONSTRUCTION
    app.get("/getpassword", function (req, res) {
      res.sendFile(path.join(__dirname, "..........html"));
    });

  

  // // loads index.handlebars
  // app.get("/index.handlebars", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  // });






};