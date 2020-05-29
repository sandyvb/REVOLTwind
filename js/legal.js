// Load initial document
$("#terms").load("./modules/legal/terms.html", (res, status, xhr) => {
  if (status == "success") {
    $("#termsbtn").prop("disabled", true);
  }
  if (status == "error") {
    alert("Error: " + xhr.status + ": " + xhr.status);
  }
});

$("#termsbtn").on("click", function() {
  $("#terms").load("./modules/legal/terms.html", (res, status, xhr) => {
    if (status == "success") {
      $("#privacy").empty();
      $("#warranty").empty();
      $("#termsbtn").prop("disabled", true);
      $("#privacybtn").prop("disabled", false);
      $("#warrantybtn").prop("disabled", false);
    }
    if (status == "error") {
      alert("Error: " + xhr.status + ": " + xhr.status);
    }
  });
});

$("#privacybtn").on("click", function() {
  $("#privacy").load("./modules/legal/privacy.html", (res, status, xhr) => {
    if (status == "success") {
      $("#terms").empty();
      $("#warranty").empty();
      $("#termsbtn").prop("disabled", false);
      $("#privacybtn").prop("disabled", true);
      $("#warrantybtn").prop("disabled", false);
    }
    if (status == "error") {
      alert("Error: " + xhr.status + ": " + xhr.status);
    }
  });
});

$("#warrantybtn").on("click", function() {
  $("#warranty").load("./modules/legal/warranty.html", (res, status, xhr) => {
    if (status == "success") {
      $("#terms").empty();
      $("#privacy").empty();
      $("#termsbtn").prop("disabled", false);
      $("#privacybtn").prop("disabled", false);
      $("#warrantybtn").prop("disabled", true);
    }
    if (status == "error") {
      alert("Error: " + xhr.status + ": " + xhr.status);
    }
  });
});