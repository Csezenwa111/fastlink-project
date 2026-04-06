const form = document.getElementById("trackForm");
const result = document.getElementById("result");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const code = document.getElementById("trackingCode").value;

    // Store multiple tracking codes
    const shipments = {
      SHIP001: "In Transit gena parkar <br> texas city" ,
      SHIP002: "Delivered",
      SHIP003: "Pending",
      SHIP004: "Out for Delivery"
    };

   if (shipments[code]) {
  result.textContent = "Status: " + shipments[code];
  result.className = "success";
} else {
  result.textContent = "Invalid tracking code";
  result.className = "error";
}

  });
}
