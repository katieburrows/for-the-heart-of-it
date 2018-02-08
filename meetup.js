     // COORS CODE 
    

  // Handler for .ready() called.

function initMap() {}


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

    $(this).attr('class', "animated fadeOut")

    // This line grabs the input from the zip textbox
    var zip = $("#zip-input").val().trim();

    // if (category != "" && zip != "") {
     var key = "1b271629571b22b797a713d217841";
    var queryURL = "https://api.meetup.com/2/open_events?&sign=true&photo-host=public&country=United States&topic=" + category + "&zip=" + zip + "&state=CO&page=20&key=" + key ;
    console.log(queryURL)


    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      // console.log(response);
      results = response.results;
      $("#search-submit").attr('class', "animated fadeIn")
      console.log(results)

      // clear both search boxes
      // $('#search-submit').empty();
        $('#zip-input').empty();
        

    for (var i = 0; i < results.length; i++) {

          var group = results[i].group.name
          // var city = results[i].venue.city
          var url = results[i].event_url

          console.log(url)
          var lat = results[i].group.group_lat
          var lon = results[i].group.group_lon
          var desc = results[i].description
          var add = results[i].venue.address_1
        $('#search-results').append(
        '<tr>'+
        // '<th scope="row">' + results + '</th>' +
        '<td>' + group + '</td>' +
        // '<td>' + city + '</td>' +
        '<td><button class="more-info" data-lat="' + lat + '" data-lon="' + lon + '" data-group="' + group + '" data-url="' + url + '" data-add="' + add + ' "data-toggle="modal" data-target="#myModal">More Info</button</td>' +
      '</tr>'
      );

 
    
  }

    })

      


  $(document).on('click', ".more-info", function(){



    var groupName  = $(this).attr("data-group")
    $("#myModalLabel").html(groupName)

    var groupUrl  = $(this).attr("data-url")
    console.log(groupUrl)
    $("#groupUrl").html(`Sign Up at this link: <a target="_blank" href="${groupUrl}">${groupName}</a>`)


    // $("#groupUrl").html('Sign Up at this link: <a href=' + groupUrl + >Link name</a>')

    var add  = $(this).attr("data-add")
    $("#venue").html(add)


      var singleLat = parseInt($(this).attr("data-lat"))

      var singleLon  = parseInt($(this).attr("data-lon"))




         

      $(() => {
        var location = {lat: singleLat, lng: singleLon};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      
})

  })


$("#myModal").on("shown.bs.modal", function () {
    google.maps.event.trigger(map, "resize");
});




    });
  
    


