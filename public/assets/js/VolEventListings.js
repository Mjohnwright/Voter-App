$(document).ready(function () {

    function getEvents() {
        $.get("/api/events", function (data) {
            console.log(data);
            if (data.length === 0) {
                for (var i = 0; i < data.length; i++) {
                    var row = $("<div>");
                    row.append("<p>Event name: " + data[i].event_title + "<p>");
                    row.append("<p>Event name: " + data[i].event_description + "<p>");
                    row.append("<p>Event name: " + data[i].organization_name + "<p>");
                    row.append("<p>Event name: " + data[i].organizer_first_name + "<p>");
                    row.append("<p>Event name: " + data[i].organizer_last_name + "<p>");
                    row.append("<p>Event name: " + data[i].street_address + "<p>");
                    row.append("<p>Event name: " + data[i].city + ", " + data[i].state + " " + data[i].zip_code + "<p>");
                    row.append("<p>Event name: " + data[i].state + "<p>");
                    row.append("<p>Event name: " + data[i].phone_number + "<p>");
                    row.append("<p>Event name: " + data[i].time_slots + "<p>");
                    $("#event-box").prepend(row);
                };
            };
        });
    };

    getEvents();



    $("#eventreg").on("click", function (post) {
        event.preventDefault();
        alert("You are registered for the event!");
        var newRegister = {
            // VolunteerId: $(this).val().trim(),
            VolunteerId: 1,
            // CampaignEventId: $(this).val().trim(),
            CampaignEventsId: 1
            // time_slot: 1
        }
        $.post('/api/eventreg', newRegister)
            .then(function (events) {
                client.messages
                    .create({
                        body: `Hello from Twilio`,
                        from: '+16104630729',
                        //  mediaUrl: '',
                        to: '+16107801122'
                    })
                    .then(message => console.log(message.sid))
                    .done();
            })
    });
});

// var newRegister = {
//     VolunteerId: // sessionStorage.getItem('userId'),
//     CampaignEventId: // the id of the event that they clicked on 
// }