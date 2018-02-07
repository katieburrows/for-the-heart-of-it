// modal pop-up
$(function(){//document ready event
   setTimeout(function(){
        $(".delayedPopup").modal('show');
   },3000);//set interval to 3 second
});

// Initialize Firebase
var config = {
	apiKey: "AIzaSyC_UTd3_iLmrueRE_pI-8lC1YB68Ua3EfE",
    authDomain: "heart-of-it-email-input.firebaseapp.com",
    databaseURL: "https://heart-of-it-email-input.firebaseio.com",
    projectId: "heart-of-it-email-input",
    storageBucket: "heart-of-it-email-input.appspot.com",
    messagingSenderId: "612859297770"
};
firebase.initializeApp(config);

// Collect form input from user and store as variables:
$("#submit").on("click", function(event){
	event.preventDefault();

	var newVolunteer = {
		name: $("#name-input").val().trim(),
		email: $("#destination-input").val().trim(),
	};
	// Test console
	console.log(newTrain)

	// Upload new train data to database
	database.ref().push(newTrain);