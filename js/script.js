var modalSearch = document.querySelector(".slide-panel");
var closeButton = document.querySelector(".header-opener__btn");
var openButton = document.querySelectorAll(".header-opener__btn");

if (modalSearch) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalSearch.classList.add("slide-panel--on");
  });

  modalSearch.addEventListener("click", function() {
    modalSearch.classList.remove("slide-panel--on");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    modalSearch.classList.remove("slide-panel--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalSearch.classList.remove("slide-panel--on");
    }
  });
}

var swiper = new Swiper('.swiper-container', {
  touchReleaseOnEdges: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
});

var swiper = new Swiper('.swiper-container-1', {
  touchReleaseOnEdges: 'true',
  spaceBetween: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.swiper-container-2', {
  touchReleaseOnEdges: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});

var swiper = new Swiper('.swiper-container-3', {
  touchReleaseOnEdges: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

var swiper = new Swiper('.swiper-container-4', {
  touchReleaseOnEdges: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-next-1',
    prevEl: '.swiper-prev-1',
  },
});

var swiper = new Swiper('.swiper-container-desktop', {
  touchReleaseOnEdges: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-nxt',
    prevEl: '.swiper-prv',
  },
});
