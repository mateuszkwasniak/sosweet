function initMap() {
  const location = { lat: 49.6903644, lng: 32.012516 };
  const map = new google.maps.Map(document.querySelector(".footer-map-box"), {
    zoom: 15,
    center: location,
  });
  const marker = new google.maps.Marker({ position: location, map: map });
}
