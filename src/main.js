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
  
const menus = document.querySelectorAll('.menus div')
const activeItems = document.querySelectorAll('.activeItem')

activeItems.forEach((item,index)=>{
  if(index!==0){
    item.style.display = 'none';
  } else {
    item.style.display = 'flex';
  }
});

// menus.forEach((item,index)=>{
//   if(index!==0){
//     item.style.color = '#51565d';
//     item.style.background ='linear-gradient(90deg,#eef4ff 4.15%,#f8faff)';
//   } else {
//     item.style.color = '#fff';
//     item.style.background ='linear-gradient(180deg,#1977fe,#559bff)';
//   }
// });

menus.forEach((menu, index) => {
  menu.addEventListener('mouseover', ()=>{

    activeItems.forEach(item=>{
      item.style.display = 'none';
    });
    activeItems[index].style.display = 'flex';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  
  menus[0].classList.add('digitalMenuActive'); // 添加 hover 样式类
});


