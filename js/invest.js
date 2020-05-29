$(document).ready(() => {

  // Load html data
  $("#invest").load("./modules/invest/invest.html", (res, status, xhr) => {
    if (status == "error") {
      alert("Error: " + xhr.status + ": " + xhr.status);
    }
  });

});