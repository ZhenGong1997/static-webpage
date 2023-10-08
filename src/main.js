
/* Header Block Logic */
// ------------------------------------------------------------------------
function initHeader(){
  header_scroll_logic();
  // Header turns white when exceeds scrolling down 80px
  header_color_logic();
  product_page_logic();
  load_header_state();
  header_qr_logic();
  
}

function header_qr_logic(){
  const textLink1 = document.querySelector('.pc-product-page #product_youshi');
  const textLink2 = document.querySelector('.pc-product-page #product_shouyucidian');
  const qrImg1 = document.querySelector('.pc-product-page #product_youshi_qr');
  const qrImg2 = document.querySelector('.pc-product-page #product_shouyucidian_qr');
  listen_qrHover(textLink1, qrImg1);
  listen_qrHover(textLink2, qrImg2);
}

function hide_product_page(){
  const page = document.querySelector('.pc-product-page');
  page.style.display ='none';
}

// prevent bug: lose header color after loading
function load_header_state(){
  window.addEventListener('load', ()=>{
    let distanceFromTop = window.scrollY;
    const header = document.querySelector('.headerNav')
    if (distanceFromTop > 80) {
      header.style.backgroundColor = '#fff';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  })
}

function product_page_logic(){
  const tab = document.querySelector('#productModule');
  const page = document.querySelector('.pc-product-page');
  const header = document.querySelector('.headerNav');
  tab.addEventListener('mouseenter',()=>{
    page.style.display = 'block';
    header.style.backgroundColor = '#fff';
  })
  tab.addEventListener('mouseleave',()=>{
    page.style.display = 'none';
  })
  page.addEventListener('mouseenter',()=>{
    page.style.display = 'block';
  })
  page.addEventListener('mouseleave',()=>{
    page.style.display = 'none';
    const header = document.querySelector('.headerNav');
    let distanceFromTop = window.scrollY;
    if (distanceFromTop > 80) {
      header.style.backgroundColor = '#fff';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  })
}

function header_scroll_logic(){
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    // hide product page whenever scroll
    hide_product_page();
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

function header_color_logic(){
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
  popup();
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

function popup(){
  const btns = document.querySelectorAll('.digital .textBlock .btn');
  const pops = document.querySelectorAll('.digital .pop_content');
  btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
    })

    btn.addEventListener('mouseover', () => {
      btn.style.color = '#719bff';
      pops[index].style.display = 'block';
    })  

    btn.addEventListener('mouseleave', () => {
      btn.style.color = '#1977fe';
      pops[index].style.display = 'none';
    }) 
  })

  pops.forEach(pop => {
    pop.addEventListener('mouseenter',() => {
      pop.style.display = 'block';
    })
  
    pop.addEventListener('mouseleave',() => {
      pop.style.display = 'none';
    })
  })
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

/* Partner Section Logic */
// ------------------------------------------------------------------------
function initPartnerSection(){
  const contents = document.querySelectorAll('.partner .wrap .cont');
  listenPartnerSection(contents);
}

function listenPartnerSection(contents){
  contents.forEach((item) => {
    item.addEventListener('mouseover',() => {
      item.style.animationPlayState = 'paused';
    })
    item.addEventListener('mouseout',() => {
      item.style.animationPlayState = 'running';
    })
  })
}

/* Footer Section Logic */
// ------------------------------------------------------------------------
function initFooter(){
  const textLink1 = document.querySelector('.footerContainer #youshi');
  const textLink2 = document.querySelector('.footerContainer #shouyucidian');
  const qrImg1 = document.querySelector('.footerContainer #youshi_qr');
  const qrImg2 = document.querySelector('.footerContainer #shouyucidian_qr');
  listen_qrHover(textLink1, qrImg1);
  listen_qrHover(textLink2, qrImg2);
}

function listen_qrHover(textLink, qrImg){
  textLink.addEventListener('mouseenter', () => {
    qrImg.style.display ='block';
  })

  textLink.addEventListener('mouseleave', () => {
    qrImg.style.display ='none';
  })

  qrImg.addEventListener('mouseenter', () => {
    qrImg.style.display ='block';
  })

  qrImg.addEventListener('mouseleave', () => {
    qrImg.style.display ='none';
  })
}

/* Banner Section Logic */
// ------------------------------------------------------------------------
function initBannerSection(){
  jump();
}

function jump(){
  const next = document.querySelector('#next');
  const target = document.querySelector('#next_target');
  next.addEventListener('click', (e) => {
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth'});
  })
}

/* chatGLM Section Logic */
function initChatGLMSection(){
  chatGLM_item_hover();
  btn1_click();
}

function btn1_click(){
  const btn1 = document.querySelector('.chatGLM .btn1');
  btn1.addEventListener('click', () => {
    window.open('https://chatglm.cn/');
  })
} 

function chatGLM_item_hover(){
  const items = document.querySelectorAll('.list .item');
  const cardTitles = document.querySelectorAll('.chatGLM .list .cardTitle');
  const cardDescs = document.querySelectorAll('.chatGLM .list .cardDesc');
  const logos = document.querySelectorAll('.list .item .logo');
  const cards = document.querySelectorAll('.list .item .card');
  const arrows = document.querySelectorAll('.list .item .card .youjiantou2')
  const linkHovers = document.querySelectorAll('.list .item .linkHover');
  
  items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      cardTitles[index].style.color = '#fff';
      cardDescs[index].style.color = '#fff';
      cardDescs[index].style.overflow = 'visible';
      cardDescs[index].style.marginTop = '16px';
      logos[index].style.display = 'none';
      cards[index].style.top = '30px';
      arrows[index].style.display = 'none';
      linkHovers[index].style.display = 'block';
    })
    item.addEventListener('mouseout', () => {
      cardTitles[index].style.color = '#131212';
      cardDescs[index].style.color = '#5e5e66';
      cardDescs[index].style.overflow = 'hidden';
      cardDescs[index].style.marginTop = '5px';
      logos[index].style.display='block';
      cards[index].style.top = '80px';
      arrows[index].style.display = 'block';
      linkHovers[index].style.display = 'none';
    });
  })
}

/* AminerSection Logic */
function initAminerSection(){
  aminerHover();
}

function aminerHover(){
  const cards = document.querySelectorAll('.aminer .card');
  const images = document.querySelectorAll('.aminer .card .images');
  const cardTitles = document.querySelectorAll('.aminer .card  .title');
  const cardDescs = document.querySelectorAll('.aminer .card  .desc');
  const arrows = document.querySelectorAll('.aminer .card .image');
  const linkHovers = document.querySelectorAll('.aminer .card .linkHover');
  const bottoms = document.querySelectorAll('.aminer .card .bottom');

  cards.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      images[index].style.display = 'none';
      cardTitles[index].style.color = '#fff';
      cardDescs[index].style.color = '#fff';
      cardDescs[index].style.overflow = 'visible';
      cardDescs[index].style.height = '200px';
      cardDescs[index].style.margin = '16px 0 20px';
      arrows[index].style.display = 'none';
      linkHovers[index].style.display = 'block';
      bottoms[index].style.backgroundColor = 'background: linear-gradient(180deg,#633cc6 12.5%,#9072de)';
      bottoms[index].style.border = 'none';
      bottoms[index].style.top = '24px';
      bottoms[index].style.height = 'auto';
      bottoms[index].style.padding = '24px';
    });

    item.addEventListener('mouseleave', () => {
      images[index].style.display = 'block';
      cardTitles[index].style.color = '#131212';
      cardDescs[index].style.color = '#5e5e65';
      cardDescs[index].style.overflow = 'hidden';
      cardDescs[index].style.height = '48px';
      cardDescs[index].style.margin = '5px 0 20px';
      arrows[index].style.display = 'block';
      linkHovers[index].style.display = 'none';
      bottoms[index].style.backgroundColor = 'none';
      bottoms[index].style.border = '1px solid #eee';
      bottoms[index].style.top = '200px';
      bottoms[index].style.padding = '14px 24px';
    });
  })
}

initHeader();
initBannerSection();
initChatGLMSection();
initAminerSection()
initDigitalSection();
initProductSection();
initPartnerSection();
initFooter();

