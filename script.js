let lat, lon, mapLink;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("status").innerText =
      "❌ Geolocation not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  mapLink = `https://maps.google.com/?q=${lat},${lon}`;

  document.getElementById("status").innerText =
    "✅ Location captured!\nLatitude: " + lat + " | Longitude: " + lon;

  document.getElementById("map").src =
    `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;

  document.getElementById("copyBtn").style.display = "inline-block";
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("status").innerText = "❌ User denied location request.";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("status").innerText = "❌ Location unavailable.";
      break;
    case error.TIMEOUT:
      document.getElementById("status").innerText = "❌ Location request timed out.";
      break;
    default:
      document.getElementById("status").innerText = "❌ Unknown error.";
  }
}

function copyLink() {
  navigator.clipboard.writeText(mapLink).then(() => {
    alert("📍 Location link copied! You can now share it via WhatsApp/SMS.");
  });
}