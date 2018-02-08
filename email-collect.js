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

var database = firebase.database();

// Collect form input from user and store as variables:
$(document).ready(function () {
	$("#contactform").submit(function(event){
		event.preventDefault();

		var newVolunteer = {
			name: $("#name-input").val().trim(),
			email: $("#email-input").val().trim(),
		};
		// Test console
		console.log(newVolunteer);

		// Upload new train data to database
		database.ref().push(newVolunteer);

		// Clear text-input boxes
		$("#name-input").val("");
		$("#email-input").val("");
	});
})
