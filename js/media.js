//videos.js

// navigation photos videos
// Load initial product
$("#videocontent").load("./modules/media/videos.html", (res, status, xhr) => {
  if (status == "success") {
    $("#videobtn").prop("disabled", true);
    loadThumbnails();
  }
  if (status == "error") {
    alert("Error: " + xhr.status + ": " + xhr.status);
  }
});

$("#videobtn").on("click", function() {
  $("#videocontent").load("./modules/media/videos.html", (res, status, xhr) => {
    if (status == "success") {
      $("#photocontent").empty();
      $("#photobtn").prop("disabled", false);
      $("#videobtn").prop("disabled", true);
      loadThumbnails();
    }
    if (status == "error") {
      alert("Error: " + xhr.status + ": " + xhr.status);
    }
  });
});

$("#photobtn").on("click", function() {
  $("#photocontent").load("./modules/media/photos.html", (res, status, xhr) => {
    if (status == "success") {
      $("#videocontent").empty();
      $("#photobtn").prop("disabled", true);
      $("#videobtn").prop("disabled", false);
      PloadThumbnails();
    }
    if (status == "error") {
      alert("Error: " + xhr.status + ": " + xhr.status);
    }
  });
});

// video objects
var videos = [{
    id: 1,
    source: '/videos/test1_1.mp4',
    thumb: '/videos/test1_1.jpg',
    caption: "RW-1 Prototype Test"
  },
  {
    id: 2,
    source: 'videos/RW-2-gusty.mp4',
    thumb: '../videos/RW-2-gusty.jpg',
    caption: "RW-2 Gusty Ground Level"
  },
  {
    id: 3,
    source: 'videos/niagra.mp4',
    thumb: '../videos/niagra.jpg',
    caption: "Mini Prototype at Niagra Falls"
  },
  {
    id: 4,
    source: 'videos/mini-smoky.mp4',
    thumb: '../videos/mini-smoky.jpg',
    caption: "Mini Prototype at Smoky Mountains"
  },
  {
    id: 5,
    source: '/videos/RW-2-spotty.mp4',
    thumb: '/videos/RW-2-spotty.jpg',
    caption: "RW-2 Spotty Winds Ground Level"
  },
  {
    id: 6,
    source: '/videos/global.mp4',
    thumb: '/videos/globalss.jpg',
    caption: "Challenges &amp; Opportunities"
  },
  {
    id: 7,
    source: '/videos/evolution.mp4',
    thumb: '/videos/evolutionss.jpg',
    caption: "Evolution"
  },
  {
    id: 8,
    source: '/videos/shortstep.mp4',
    thumb: '/videos/shortstepss.jpg',
    caption: "Shortstep Promo"
  },
  {
    id: 9,
    source: '/videos/jazzy.mp4',
    thumb: '/videos/jazzyss.jpg',
    caption: "Jazzy Promo"
  },
  {
    id: 10,
    source: '/videos/bulletinboard.mp4',
    thumb: '/videos/bulletinboardss.jpg',
    caption: "Bulletin Board"
  },
  {
    id: 11,
    source: '/videos/storm.mp4',
    thumb: '/videos/stormss.jpg',
    caption: "Stormy Conditions"
  },
  {
    id: 12,
    source: 'videos/stable_cond.mp4',
    thumb: '../videos/stable_condss.jpg',
    caption: "Stable in Gusty Conditions"
  },
  {
    id: 13,
    source: '/videos/REVOLTprototype.mp4',
    thumb: '/videos/REVOLTprototype.png',
    caption: "REVOLT Prototype 5'"
  },
  {
    id: 14,
    source: '/videos/revolt5.mp4',
    thumb: '/videos/revolt5.jpg',
    caption: "5' Prototype"
  },
  {
    id: 15,
    source: '/videos/hwt5ftmed.mp4',
    thumb: '/videos/hwt5ftmed.jpg',
    caption: "RW-2 5' HWT"
  },
  {
    id: 16,
    source: '/videos/BasicIntro.mp4',
    thumb: '/videos/BasicIntross.jpg',
    caption: "Basic Intro"
  }
];

function loadThumbnails() {
  for (var i = 0; i < videos.length; i++) {
    document.getElementById("thumbnails").innerHTML += '<figure><img src="' + videos[i].thumb + '" class="hover-shadow cursor captionText" alt="' + videos[i].caption + '" onclick="openModal();currentSlide(' + i + ')" /><figcaption onclick="openModal();currentSlide(' + i + ')">' + videos[i].caption + '</figcaption></figure>';
  }
}

function openModal() {
  document.getElementById("myModal").style.width = "100%";
  loadDemoContainer();
}

function closeModal() {
  document.getElementById("myModal").style.width = "0%";
  videoPause();
}

var slideIndex;

function currentSlide(n) {
  slideIndex = n;
  document.getElementById("modalContent").innerHTML = '<div class="numbertext">' + videos[n].id + ' / ' + videos.length + '</div><button class="closebtn" onclick="closeModal()">close</button><video id="currentVideo" poster="' + videos[n].thumb + '" src="' + videos[n].source + '" controls></video>';
  document.getElementById("caption").innerHTML = videos[n].caption;
}

function videoPause() {
  var vid = document.getElementById("currentVideo");
  vid.pause();
}

function loadDemoContainer() {
  document.getElementById("demoContainer").innerHTML = "";
  for (var i = 0; i < videos.length; i++) {
    document.getElementById("demoContainer").innerHTML += '<img class="demo" src="' + videos[i].thumb + '" onclick="videoPause();currentSlide(' + i + ')">';
  }
}

function plusSlides(n) {
  videoPause();
  var max = videos.length - 1;
  slideIndex += n;

  if (slideIndex > max) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = videos.length - 1;
  }
  currentSlide(slideIndex);
}


// photo objects
var photos = [{
    id: 1,
    source: '/images/REVOLT_BENT.jpg',
    thumb: '/images/thumbnails/REVOLT_BENT.jpg',
    caption: ""
  },
  {
    id: 2,
    source: '/images/revolt-1.jpg',
    thumb: '/images/thumbnails/revolt-1.jpg',
    caption: ""
  },
  {
    id: 3,
    source: '/images/IMG_3648.JPG',
    thumb: '/images/thumbnails/IMG_3648.jpg',
    caption: ""
  },
  {
    id: 4,
    source: '/images/IMG_4149.jpg',
    thumb: '/images/thumbnails/IMG_4149.jpg',
    caption: ""
  },
  {
    id: 5,
    source: '/images/IMG_2676_2.jpg',
    thumb: '/images/thumbnails/IMG_2676_2.jpg',
    caption: ""
  },
  {
    id: 6,
    source: '/images/teach.jpg',
    thumb: '/images/thumbnails/teach.jpg',
    caption: ""
  },
  {
    id: 7,
    source: '/images/tents_rnd.jpg',
    thumb: '/images/thumbnails/tents_rnd.jpg',
    caption: ""
  },
  {
    id: 8,
    source: '/images/camping_hunting.jpg',
    thumb: '/images/thumbnails/camping_hunting_scene.jpg',
    caption: ""
  },
  {
    id: 9,
    source: '/images/BasicIntro.jpg',
    thumb: '/images/thumbnails/BasicIntro.jpg',
    caption: ""
  },
  {
    id: 10,
    source: '/images/revoltwind(4).jpg',
    thumb: '/images/thumbnails/revoltwind(4).jpg',
    caption: ""
  },
  {
    id: 11,
    source: '/images/revoltwind(12).jpg',
    thumb: '/images/thumbnails/revoltwind(12).jpg',
    caption: ""
  },
  {
    id: 12,
    source: '/images/revoltwind(13).jpg',
    thumb: '/images/thumbnails/revoltwind(13).jpg',
    caption: ""
  },
  {
    id: 13,
    source: '/images/revoltwind(15).jpg',
    thumb: '/images/thumbnails/revoltwind(15).jpg',
    caption: ""
  },
  {
    id: 14,
    source: '/images/revoltwind(16).jpg',
    thumb: '/images/thumbnails/revoltwind(16).jpg',
    caption: ""
  },
  {
    id: 15,
    source: '/images/revoltwind(20).jpg',
    thumb: '/images/thumbnails/revoltwind(20).jpg',
    caption: ""
  },
  {
    id: 16,
    source: '/images/revoltwind(27).jpg',
    thumb: '/images/thumbnails/revoltwind(27).jpg',
    caption: ""
  },
  {
    id: 17,
    source: '/images/revoltwind(28).jpg',
    thumb: '/images/thumbnails/revoltwind(28).jpg',
    caption: ""
  },
  {
    id: 18,
    source: '/images/revoltwind(29).jpg',
    thumb: '/images/thumbnails/revoltwind(29).jpg',
    caption: ""
  },
  {
    id: 19,
    source: '/images/revoltwind(30).jpg',
    thumb: '/images/thumbnails/revoltwind(30).jpg',
    caption: ""
  },
  {
    id: 20,
    source: '/images/revoltwind(31).jpg',
    thumb: '/images/thumbnails/revoltwind(31).jpg',
    caption: ""
  },
  {
    id: 21,
    source: '/images/revoltwind(32).jpg',
    thumb: '/images/thumbnails/revoltwind(32).jpg',
    caption: ""
  },
  {
    id: 22,
    source: '/images/revoltwind(33).jpg',
    thumb: '/images/thumbnails/revoltwind(33).jpg',
    caption: ""
  },
  {
    id: 23,
    source: '/images/revoltwind(34).jpg',
    thumb: '/images/thumbnails/revoltwind(34).jpg',
    caption: ""
  },
  {
    id: 24,
    source: '/images/revoltwind(35).jpg',
    thumb: '/images/thumbnails/revoltwind(35).jpg',
    caption: ""
  }
];

// function PloadThumbnails() {
//   for (var i = 0; i < photos.length; i++) {
//     document.getElementById("Pthumbnails").innerHTML += '<figure><img src="' + photos[i].thumb + '" class="hover-shadow cursor captionText" alt="' + photos[i].caption + '" onclick="PopenModal();PcurrentSlide(' + i + ')" /><figcaption onclick="PopenModal();PcurrentSlide(' + i + ')">' + photos[i].caption + '</figcaption></figure>';
//   }
// }

function PloadThumbnails() {
  for (var i = 0; i < photos.length; i++) {
    document.getElementById("Pthumbnails").innerHTML += '<img src="' + photos[i].thumb + '" class="hover-shadow cursor" onclick="PopenModal();PcurrentSlide(' + i + ')" />';
  }
}

function PopenModal() {
  document.getElementById("PmyModal").style.width = "100%";
  PloadDemoContainer();
}

function PcloseModal() {
  document.getElementById("PmyModal").style.width = "0%";
}

var slideIndex;

function PcurrentSlide(n) {
  slideIndex = n;
  document.getElementById("PmodalContent").innerHTML = '<div class="numbertext">' + photos[n].id + ' / ' + photos.length + '</div><button class="closebtn" onclick="PcloseModal()">close</button><img id="currentVideo" src="' + photos[n].source + '" />';
  document.getElementById("caption").innerHTML = photos[n].caption;
}

function PloadDemoContainer() {
  document.getElementById("PdemoContainer").innerHTML = "";
  for (var i = 0; i < photos.length; i++) {
    document.getElementById("PdemoContainer").innerHTML += '<img class="demo" src="' + photos[i].thumb + '" onclick="PcurrentSlide(' + i + ')">';
  }
}

function PplusSlides(n) {
  var max = photos.length - 1;
  slideIndex += n;

  if (slideIndex > max) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = photos.length - 1;
  }
  PcurrentSlide(slideIndex);
}