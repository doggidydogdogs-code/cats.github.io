const map = L.map('map').setView([10, 120], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 8,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
