function initHeader(){
  moveUpShowHeader();
  // Header turns white when exceeds scrolling down 80px
  headerTurnWhite();
}

function moveUpShowHeader(){
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    let header = document.querySelector('.headerNav');

    if (prevScrollPos > currentScrollPos) {
      header.classList.add('header_show');
      header.classList.remove('header_hide');
    } else {
      header.classList.remove('header_show');
      header.classList.add('header_hide');
    }
    prevScrollPos = currentScrollPos;
  });
}

function headerTurnWhite(){
  window.addEventListener('scroll', function() {
    let header = document.querySelector('.headerNav');
    let distance = window.pageYOffset || document.documentElement.scrollTop;
  
    if (distance > 80) {
      header.style.backgroundColor = '#fff';
      header.style.transition = "all 0.2s ease-in-out"; 
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.transition = "all 0.2s ease-in-out"; 
    }
  });
}




/* Digital Block Logic */
// ------------------------------------------------------------------------
function initDigitalSection(){
  const menus = document.querySelectorAll('.digital .menus .menu');
  const items = document.querySelectorAll('.digital .activeItem');
  const afters = document.querySelectorAll('.menu .after');
  initDigitalMenu(menus, afters);
  initDigitalItems(items);
  listenDigitalSection(menus, afters, items);
}

function initDigitalMenu(menus, afters){
  menus[0].style.color = '#fff';
  menus[0].style.background ='linear-gradient(180deg,#1977fe,#559bff)';
  for(let i = 1; i < afters.length; i++){
    afters[i].style.display = 'none';
  }
}

function initDigitalItems(items){
  for(let i = 1; i < items.length; i++){
    items[i].style.display = 'none';
  }
}

function setActiveDigitalMenu(menu, flag){
  if(flag === true){
    menu.style.color = '#fff';
    menu.style.background = 'linear-gradient(180deg,#1977fe,#559bff)'; 
  } else {
    menu.style.color = '#51565d';
    menu.style.background ='linear-gradient(90deg,#eef4ff 4.15%,#f8faff)';
  }
}

function listenDigitalSection(menus, afters, items){
  menus.forEach((menu, index) => {
    menu.addEventListener('mouseenter', ()=>{
      // reset menus
      menus.forEach((item)=> {
        setActiveDigitalMenu(item, false);
      })
      // show active menu
      setActiveDigitalMenu(menus[index], true);
  
      // reset div afters
      afters.forEach((item) => {
          item.style.display = 'none';
      })
      // show active div afters
      afters[index].style.display = 'block';
        
      // reset items
      items.forEach(item=>{
        item.style.display = 'none';
      });
      // show active item
      items[index].style.display = 'flex';
    });
  });
}



/* Product Section Logic */
// ------------------------------------------------------------------------
function initProductSection(){
  const menus = document.querySelectorAll('.product .menus div');
  const blocks = document.querySelectorAll('.product .block');
  initProductMenu(menus);
  initProductBlock(blocks);
  listenProductSection(menus, blocks);
}

function initProductMenu(menus){
  setActiveProductMenu(menus[0], true);
}

function initProductBlock(blocks){
  for(let i = 1; i < blocks.length; i++){
    blocks[i].style.display = 'none';
  }
}

function setActiveProductMenu(item, flag){
  if(flag === true){
    item.style.color = '#fff';
    item.style.border = '1px solid #f7f9fe';
    item.style.boxShadow = '0 3px 8px rgba(239,242,255,.9)';
    item.style.background = 'linear-gradient(180deg,#1977fe,#559bff)';
  } else {
    item.style.color = '#333';
    item.style.border = '1px solid transparent';
    item.style.boxShadow = 'none';
    item.style.background = 'transparent';
  }
}

function listenProductSection(productMenus, productBlocks){
  productMenus.forEach((menu, index) => {
    menu.addEventListener('mouseover', () => {
      // reset menu
      productMenus.forEach(item => {
        setActiveProductMenu(item, false);
      })
      // show active menu
      setActiveProductMenu(productMenus[index], true);
  
      // reset block
      productBlocks.forEach((block) => {
        block.style.display = 'none';
      })
      // show active block
      productBlocks[index].style.display = 'flex';
    })
  });
}
// ------------------------------------------------------------------------

initHeader();
initDigitalSection();
initProductSection();

