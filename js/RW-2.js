$(document).ready(function() {

  // Load initial section
  $("#contentarea").load("./modules/products/RW-2/details.html", (res, status, xhr) => {
    if (status == "success") {
      $(".detailsbtn").prop("disabled", true);
    }
    if (status == "error") {
      alert("Error: " + xhr.status + ": " + xhr.status);
    }
  });

  $(".detailsbtn").on("click", function() {
    $("#contentarea").load("./modules/products/RW-2/details.html", (res, status, xhr) => {
      if (status == "success") {
        $(".detailsbtn").prop("disabled", true);
        $(".specsbtn").prop("disabled", false);
        $(".gallerybtn").prop("disabled", false);
        $(".comparebtn").prop("disabled", false);
        $(".notesbtn").prop("disabled", false);
        $(".investbtn").prop("disabled", false);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $(".specsbtn").on("click", function() {
    $("#contentarea").load("./modules/products/RW-2/specs.html", (res, status, xhr) => {
      if (status == "success") {
        $(".detailsbtn").prop("disabled", false);
        $(".specsbtn").prop("disabled", true);
        $(".gallerybtn").prop("disabled", false);
        $(".comparebtn").prop("disabled", false);
        $(".notesbtn").prop("disabled", false);
        $(".investbtn").prop("disabled", false);
        $("#accordion").accordion({
          collapsible: true,
          heightStyle: "content",
          active: false
        });
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $(".gallerybtn").on("click", function() {
    $("#contentarea").load("./modules/products/RW-2/gallery.html", (res, status, xhr) => {
      if (status == "success") {
        $(".detailsbtn").prop("disabled", false);
        $(".specsbtn").prop("disabled", false);
        $(".gallerybtn").prop("disabled", true);
        $(".comparebtn").prop("disabled", false);
        $(".notesbtn").prop("disabled", false);
        $(".investbtn").prop("disabled", false);
        initSlideshow();
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $(".comparebtn").on("click", function() {
    $("#contentarea").load("./modules/products/RW-1/compare.html", (res, status, xhr) => {
      if (status == "success") {
        $(".detailsbtn").prop("disabled", false);
        $(".specsbtn").prop("disabled", false);
        $(".gallerybtn").prop("disabled", false);
        $(".comparebtn").prop("disabled", true);
        $(".notesbtn").prop("disabled", false);
        $(".investbtn").prop("disabled", false);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $(".notesbtn").on("click", function() {
    $("#contentarea").load("./modules/products/RW-1/notes.html", (res, status, xhr) => {
      if (status == "success") {
        $(".detailsbtn").prop("disabled", false);
        $(".specsbtn").prop("disabled", false);
        $(".gallerybtn").prop("disabled", false);
        $(".comparebtn").prop("disabled", false);
        $(".notesbtn").prop("disabled", true);
        $(".investbtn").prop("disabled", false);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  $(".investbtn").on("click", function() {
    $("#contentarea").load("./modules/invest/invest.html", (res, status, xhr) => {
      if (status == "success") {
        $(".detailsbtn").prop("disabled", false);
        $(".specsbtn").prop("disabled", false);
        $(".gallerybtn").prop("disabled", false);
        $(".comparebtn").prop("disabled", false);
        $(".notesbtn").prop("disabled", false);
        $(".investbtn").prop("disabled", true);
      }
      if (status == "error") {
        alert("Error: " + xhr.status + ": " + xhr.status);
      }
    });
  });

  function initSlideshow() {
    var slideIndex = 1;
    var x = $('.slides').toArray();
    showDivs(slideIndex);
    $('#prevbtn').click(() => {
      showDivs(slideIndex - 1);
      console.log('prev btn clicked');
    });
    $('#nextbtn').click(() => {
      showDivs(slideIndex + 1);
    });

    function showDivs(n) {
      if (n > x.length) {
        slideIndex = 1;
      } else if (n < 1) {
        slideIndex = x.length;
      } else {
        slideIndex = n;
      }
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex - 1].style.display = "block";
      document.getElementById("number").innerHTML = slideIndex + "/" + x.length;
    }
  }

});