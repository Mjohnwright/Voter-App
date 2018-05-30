$(document).ready(function () {
    console.log("Volunteer login is ready!");

    $("button").on("click", function (event) {
        event.preventDefault();

        var LogInEvent = {
            volEmail: $("#InputEmail").val().trim(),
            password: $("#InputPassword").val().trim()
        }

        console.log("loginevent = ", LogInEvent);


        // queries the database based on the email provided
        //API Route for Vol to register for event
        // $.get("/api/events")
        $.get("/api/events/" + LogInEvent.volEmail)

            // On success, run the following code

            //STILL NEED VALIDATION
            .then(function (data) {
                var id = data.id;
                console.log("id = " + id);
                // Stores the manager ID retrieved from the database in the session 
                sessionStorage.setItem("volunteerId", parseInt(data.id));
                window.location.href = "index.html";
                console.log("redirecting");
                sessionStorage.setItem("volunteerEmail", $("#InputEmail").val().trim());
                // alert("please enter a valid email address");



                window.location.href = "VolEventListings.html";

            });

    });

});