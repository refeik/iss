var map = L.map('map',{
    dragging: false,
    zoomControl: false,
    scrollWheelZoom: false
}).setView([0,0], 2);

function moveISS () {
    $.getJSON('https://api.wheretheiss.at/v1/satellites/25544', function(data) {
        var lat = data['latitude'];
        var lon = data['longitude'];

        iss.setLatLng([lat, lon]);
        map.panTo([lat, lon], animate=true);
    });
    setTimeout(moveISS, 2000); 
}

L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/dark-v10",
        accessToken:
            "pk.eyJ1IjoiNncwajZqY3B3eTNuYyIsImEiOiJja21xNnVkcG0wemhiMzBvY3RjemJvNWk1In0.ePuD2YkaWP43sIXB46FAKA",
    }
).addTo(map);

var ISSIcon = L.icon({
    iconUrl: 'satellite.svg',
    iconSize: [40, 40],
    iconAnchor: [25, 15],
    popupAnchor: [50, 25],
});

var iss = L.marker([0, 0], {icon: ISSIcon}).addTo(map);

moveISS();
