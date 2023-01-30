var mycoords = [33.7488, -84.3877];
const jumps = 500;
function makeMap(usercoords) {
    // User location
    var usrcoords = [usercoords.latitude, usercoords.longitude];
    var map = L.map('usrmap').setView([usercoords.latitude, usercoords.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = new L.Marker([usercoords.latitude, usercoords.longitude]);
    marker.bindPopup("Your current location").openPopup();
    marker.addTo(map);

    // My location
    var mymap = L.map('memap').setView([usercoords.latitude, usercoords.longitude], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    var iconOptions = {
        iconUrl: 'images/closeup.jpg',
        iconSize: [30,30]
    };
    var customIcon = L.icon(iconOptions);
    var markerOptions = {
        title: "MyLocation",
        clickable: true,
        draggable: false,
        icon: customIcon
    };

    var meloc = new L.Marker(mycoords, markerOptions);
    meloc.bindPopup("My location");
    meloc.addTo(mymap);
    var melocb = new L.Marker(mycoords, markerOptions);
    melocb.bindPopup("My location");
    melocb.addTo(map);

    var jdone = 0;
    function moveMe() {
        var tcoords = [0,0];
        function getPercent() {
            var input = jdone/jumps;
            return Math.sqrt(Math.sqrt(input));
        }
        for (let i = 0; i < mycoords.length; i++) {
            tcoords[i] = (1 - getPercent())*mycoords[i] + (getPercent())*usrcoords[i];
        }
        meloc.setLatLng(tcoords).update();
        melocb.setLatLng(tcoords).update();
        marker.openPopup();
        meloc.openPopup();
        mymap.setView(tcoords, 10);

        jdone++;
        if (jdone <= jumps) {
            setTimeout(moveMe, 1);
        } else {
            triggerShenanigans();
        }
    }
    setTimeout(moveMe(), 100);
}