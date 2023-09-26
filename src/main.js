// 只要上移动，就显示header
var prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var header = document.querySelector('.headerNav');

  if (prevScrollPos > currentScrollPos) {
    header.classList.add('header_show');
    header.classList.remove('header_hide');
  } else {
    header.classList.remove('header_show');
    header.classList.add('header_hide');
  }

  prevScrollPos = currentScrollPos;
});

// 移动超过80像素，header背景变白
window.addEventListener('scroll', function() {
    var header = document.querySelector('.headerNav');
    var distance = window.pageYOffset || document.documentElement.scrollTop;
  
    if (distance > 80) {
      header.style.backgroundColor = '#fff';
      header.style.transition = "all 0.2s ease-in-out"; 
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.transition = "all 0.2s ease-in-out"; 
    }
  });
  