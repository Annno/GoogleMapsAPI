var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

$(document).ready(function() {
    $('.pMarker').click(function() {
        console.log('yes');
        var long = $('#longitude').val();
        var lat = $('#latitude').val();
        var myLatLng = new google.maps.LatLng(lat, long);

        var marker = new google.maps.Marker({
            position: myLatLng,
            title: "Hello World!"
        });

        map.setCenter(myLatLng);
        marker.setMap(map);

        var infowindow = new google.maps.InfoWindow({
            content: $("#message").val()
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        })
    })

})
