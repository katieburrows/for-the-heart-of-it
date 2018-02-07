

      var myLat = (response.data.lat);
      var myLon = (response.data.lon);
      var myAddress = (response.data.address_1, response.data.city, response.data.state)

    $("#address").html(myaddress);

      function initMap() {
        var location = {lat: myLat, lng: myLon};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }
 
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjdLWylDJt3INqwrSBnWkN46bmgGJZRz0&callback=initMap">
    </script>

