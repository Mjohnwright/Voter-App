$(document).ready(function () {
    console.log("MgrEventListings ready!");

    $(selector).load(URL, data, callback);
    $(window).load(function () {
        console.log("window load started");
        var eventContainer = $(".event-row");

        function getEvents(Events) {
            $.get("/api/events", function (data) {


            })
        }


    });


});