// Load initial product
$(document).ready(function() {

  $("#article1").load("./modules/articles/article1.html", (res, status, xhr) => {
    if (status == "success") {
      $("#article1btn").prop("disabled", true);
    }
    if (status == "error") {
      alert("Error: " + xhr.status + ": " + xhr.status);
    }
  });

  $("#article1btn").on("click", function() {
    $("#article1").load("./modules/articles/article1.html", (res, status, xhr) => {
      if (status == "success") {
        $("#article2").empty();
        $("#article3").empty();
        $("#article4").empty();
        $("#article5").empty();
        $("#article6").empty();
        $("#article1btn").prop("disabled", true);
        $("#article2btn").prop("disabled", false);
        $("#article3btn").prop("disabled", false);
        $("#article4btn").prop("disabled", false);
        $("#article5btn").prop("disabled", false);
        $("#article6btn").prop("disabled", false);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $("#article2btn").on("click", function() {
    $("#article2").load("./modules/articles/article2.html", (res, status, xhr) => {
      if (status == "success") {
        $("#article1").empty();
        $("#article3").empty();
        $("#article4").empty();
        $("#article5").empty();
        $("#article6").empty();
        $("#article1btn").prop("disabled", false);
        $("#article2btn").prop("disabled", true);
        $("#article3btn").prop("disabled", false);
        $("#article4btn").prop("disabled", false);
        $("#article5btn").prop("disabled", false);
        $("#article6btn").prop("disabled", false);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $("#article3btn").on("click", function() {
    $("#article3").load("./modules/articles/article3.html", (res, status, xhr) => {
      if (status == "success") {
        $("#article1").empty();
        $("#article2").empty();
        $("#article4").empty();
        $("#article5").empty();
        $("#article6").empty();
        $("#article1btn").prop("disabled", false);
        $("#article2btn").prop("disabled", false);
        $("#article3btn").prop("disabled", true);
        $("#article4btn").prop("disabled", false);
        $("#article5btn").prop("disabled", false);
        $("#article6btn").prop("disabled", false);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $("#article4btn").on("click", function() {
    $("#article4").load("./modules/articles/article4.html", (res, status, xhr) => {
      if (status == "success") {
        $("#article1").empty();
        $("#article2").empty();
        $("#article3").empty();
        $("#article5").empty();
        $("#article6").empty();
        $("#article1btn").prop("disabled", false);
        $("#article2btn").prop("disabled", false);
        $("#article3btn").prop("disabled", false);
        $("#article4btn").prop("disabled", true);
        $("#article5btn").prop("disabled", false);
        $("#article6btn").prop("disabled", false);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $("#article5btn").on("click", function() {
    $("#article5").load("./modules/articles/article5.html", (res, status, xhr) => {
      if (status == "success") {
        $("#article1").empty();
        $("#article2").empty();
        $("#article3").empty();
        $("#article4").empty();
        $("#article6").empty();
        $("#article1btn").prop("disabled", false);
        $("#article2btn").prop("disabled", false);
        $("#article3btn").prop("disabled", false);
        $("#article4btn").prop("disabled", false);
        $("#article5btn").prop("disabled", true);
        $("#article6btn").prop("disabled", false);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $("#article6btn").on("click", function() {
    $("#article6").load("./modules/articles/article6.html", (res, status, xhr) => {
      if (status == "success") {
        $("#article1").empty();
        $("#article2").empty();
        $("#article3").empty();
        $("#article4").empty();
        $("#article5").empty();
        $("#article1btn").prop("disabled", false);
        $("#article2btn").prop("disabled", false);
        $("#article3btn").prop("disabled", false);
        $("#article4btn").prop("disabled", false);
        $("#article5btn").prop("disabled", false);
        $("#article6btn").prop("disabled", true);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

});