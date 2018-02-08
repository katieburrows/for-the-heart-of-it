     // COORS CODE 
    jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  var category = "community";

$(".categories").on("click", function(){
  // console.log($(this).attr("data-cat"))
  category = $(this).attr("data-cat")
})


  $("#search-submit").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the zip textbox
    var zip = $("#zip-input").val().trim();

    if (category != "" && zip != "") {
     var key = "1b271629571b22b797a713d217841";
    var queryURL = "https://api.meetup.com/2/open_events?&sign=true&photo-host=public&country=United States&topic=" + category + "&zip=" + zip + "&state=CO&page=20&key=" + key ;
    console.log(queryURL)


    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      // console.log(response);
      results = response.results;

      console.log(results)

      // clear both search boxes
      // $('#search-submit').empty();
        $('#zip-input').empty();
        

    for (var i = 0; i < results.length; i++) {

          var group = results[i].group.name
          var city = results[i].venue.city
          var url = results[i].event_url

    $('#search-results').append(
      '<tr>'+
        // '<th scope="row">' + results + '</th>' +
        '<td>' + group + '</td>' +
        '<td>' + city + '</td>' +
        '<td>' + url + '</td>' +
      '</tr>'
      );
  }



        // for (var i = 0; i < results.length; i++) {
        //   var newTR = $("<tr>")

        //   var group = results[i].group.name
        //   var city = results[i].venue.city

        //   var newTDs = $("<td>" + group + "</a></td><td>" + city + "</td>");
        //   newTR.append(newTDs);

        //   $("#search-results").append(newTR);
        // }
      

    });
    } else {
      // jQuery's .show() automatically shows something, which overrides the css's 'display: none'... the opposite of .show() is (you guessed it!) .hide()
      $(".formError").show();
      return false;
    }
    

  });
