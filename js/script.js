// script

$(document).ready(function() {
  $("#navigation-menu").load("./modules/nav/nav.html");
  $("#footer").load("./modules/nav/footer.html");

  // v-card on about page "our founder"--------------------//
  $("#vcard").on("click", function() {
    $(".show-vcard").toggle();
  });

});