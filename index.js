AOS.init()
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
    document.querySelector('.back-to-top').style.display = "block";
  } else {
    document.querySelector('.back-to-top').style.display = "none";
  }
}

document.querySelector('.back-to-top').addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
