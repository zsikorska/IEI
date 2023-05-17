var map = new L.Map("myMap", {center: [50,-9],zoom: 1});
var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osmAttrib="Map data OpenStreetMap contributors";
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
map.addLayer(osm);
function showCoordinates(e){
var s = document.getElementById("coordinates");
s.innerHTML = "Latitude, Longitude = "+e.latlng.lat+", "+e.latlng.lng;
}

var pontos = [
L.marker([38.891014, -77.026703]),
L.marker([48.860294, 2.338629]),
L.marker([37.9688, 23.72845]), //ACROPOLIS MUSEUM
L.marker([36.196167, -86.622498]), //STATE HERMITAGE, ST.
L.marker([51.518757, -0.126168]), //THE BRITISH MUSEUM
L.marker([40.413780, -3.692127]), //MUSEO DEL PRADO
L.marker([40.779434, -73.963402]), //THE METROPOLITAN MUSEUM OF ART
L.marker([41.906487, 12.453641]), //THE VATICAN MUSEUMS
L.marker([39.905159, 116.400894]), //NATIONAL MUSEUM OF CHINA
L.marker([51.508972, -0.128794]) //THE NATIONAL GALLERY 
];

for(let i in pontos) {
pontos[i].addTo(map);
}

L.marker([38.891014, -77.026703]).bindPopup("SMITHSONIAN INSTITUTION WASHINGTON D.C.").addTo(map);
L.marker([48.860294, 2.338629]).bindPopup("MUSÉE DU LOUVRE").addTo(map);
L.marker([37.9688, 23.72845]).bindPopup("ACROPOLIS MUSEUM").addTo(map);
L.marker([36.196167, -86.622498]).bindPopup("STATE HERMITAGE, ST.").addTo(map);
L.marker([51.518757, -0.126168]).bindPopup("THE BRITISH MUSEUM").addTo(map);
L.marker([40.413780, -3.692127]).bindPopup("MUSEO DEL PRADO").addTo(map);
L.marker([40.779434, -73.963402]).bindPopup("THE METROPOLITAN MUSEUM OF ART").addTo(map);
L.marker([41.906487, 12.453641]).bindPopup("THE VATICAN MUSEUMS").addTo(map);
L.marker([39.905159, 116.400894]).bindPopup("NATIONAL MUSEUM OF CHINA ").addTo(map);
L.marker([51.508972, -0.128794]).bindPopup("THE NATIONAL GALLERY").addTo(map); 


