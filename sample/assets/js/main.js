(function() {
  const fh = document.getElementById('fix-header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      fh.classList.add('is-show');
    } else {
      fh.classList.remove('is-show');
    }
  });
});

$(document).ready(function(){
  $('.slide').slick({
    infinite: true,
    dots:false,
    slidesToScroll: 1,
    slidesToShow: 1,
  });
});
