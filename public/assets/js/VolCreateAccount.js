$(document).ready(function () {
    console.log("Volunteer create account is ready!");

    $("#button").on("click", function (event) {
        console.log("volunteer create button is clicked");
        event.preventDefault();

        var firstName = $("#firstname").val().trim();
        var lastName = $("#lastname").val().trim();
        var address = $("#streetAddress").val().trim();
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        // var zipcode = $("#zip").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var password = $("#password").val().trim();
        var confirmpassword = $("#confirmpassword").val().trim();

        var newVolunteer = {
            first_name: firstName,
            last_name: lastName,
            street_address: address,
            city: city,
            state: state,
            // zipcode: zipcode,
            email: email,
            password: password
            //password: password
        };

        console.log(newVolunteer);
        $.post("/api/newVolunteer", newVolunteer)
            .then(function () {

                console.log("Created new user");
            })
        // const client = require('twilio')(accountSid, authToken);
        // const accountSid = TWILIO_ACCOUNT_SID
        // const authToken = TWILIO_AUTH_TOKEN

        // app.client.messages
        //       .create({
        //          body: `Thanks for volunteering`,
        //          from: '+16104630729',        
        //         //  mediaUrl: '',
        //          to: '+'+ phone
        //        })
        //       .then(message => console.log(message.sid))
        //       .done();


        // empty each input box by replacing the value with an empty string
        $("#firstname").val("");
        $("#lastname").val("");
        $("#streetAddress").val("");
        $("#organization_name").val("");
        $("#city").val("");
        $("#state").val("");
        // $("#zip").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#password").val("");
        $("#confirmpassword").val("");

        //Loads next page
        window.location.href = 'VolLogin.html';
    });
});
