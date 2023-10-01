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

const afters = document.querySelectorAll('.menu .after')
console.log(afters)
menus[0].style.color = '#fff';
menus[0].style.background ='linear-gradient(180deg,#1977fe,#559bff)';
afters[0].style.display = 'block';

menus.forEach((menu, index) => {
  menu.addEventListener('mouseover', ()=>{
    menus.forEach((menu1, index1)=> {
      if(index !== index1){
        menu1.style.color = '#51565d';
        menu1.style.background ='linear-gradient(90deg,#eef4ff 4.15%,#f8faff)';
      } else {
        menu1.style.color = '#fff';
        menu1.style.background = 'linear-gradient(180deg,#1977fe,#559bff)';
      }
    })
    afters.forEach((item, index2) => {
      if(index !== index2){
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
      }
    })
      
    
    // 重置activeItems display
    activeItems.forEach(item=>{
      item.style.display = 'none';
    });
    activeItems[index].style.display = 'flex';
  });
});




