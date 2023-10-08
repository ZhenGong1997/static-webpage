// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
/* Header Block Logic */
// ------------------------------------------------------------------------
function initHeader() {
  header_scroll_logic();
  // Header turns white when exceeds scrolling down 80px
  header_color_logic();
  product_page_logic();
  load_header_state();
  header_qr_logic();
}
function header_qr_logic() {
  var textLink1 = document.querySelector('.pc-product-page #product_youshi');
  var textLink2 = document.querySelector('.pc-product-page #product_shouyucidian');
  var qrImg1 = document.querySelector('.pc-product-page #product_youshi_qr');
  var qrImg2 = document.querySelector('.pc-product-page #product_shouyucidian_qr');
  listen_qrHover(textLink1, qrImg1);
  listen_qrHover(textLink2, qrImg2);
}
function hide_product_page() {
  var page = document.querySelector('.pc-product-page');
  page.style.display = 'none';
}

// prevent bug: lose header color after loading
function load_header_state() {
  window.addEventListener('load', function () {
    var distanceFromTop = window.scrollY;
    var header = document.querySelector('.headerNav');
    if (distanceFromTop > 80) {
      header.style.backgroundColor = '#fff';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
}
function product_page_logic() {
  var tab = document.querySelector('#productModule');
  var page = document.querySelector('.pc-product-page');
  var header = document.querySelector('.headerNav');
  tab.addEventListener('mouseenter', function () {
    page.style.display = 'block';
    header.style.backgroundColor = '#fff';
  });
  tab.addEventListener('mouseleave', function () {
    page.style.display = 'none';
  });
  page.addEventListener('mouseenter', function () {
    page.style.display = 'block';
  });
  page.addEventListener('mouseleave', function () {
    page.style.display = 'none';
    var header = document.querySelector('.headerNav');
    var distanceFromTop = window.scrollY;
    if (distanceFromTop > 80) {
      header.style.backgroundColor = '#fff';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
}
function header_scroll_logic() {
  var prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', function () {
    // hide product page whenever scroll
    hide_product_page();
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
}
function header_color_logic() {
  window.addEventListener('scroll', function () {
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
}

/* Digital Block Logic */
// ------------------------------------------------------------------------
function initDigitalSection() {
  var menus = document.querySelectorAll('.digital .menus .menu');
  var items = document.querySelectorAll('.digital .activeItem');
  var afters = document.querySelectorAll('.menu .after');
  initDigitalMenu(menus, afters);
  initDigitalItems(items);
  popup();
  listenDigitalSection(menus, afters, items);
}
function initDigitalMenu(menus, afters) {
  menus[0].style.color = '#fff';
  menus[0].style.background = 'linear-gradient(180deg,#1977fe,#559bff)';
  for (var i = 1; i < afters.length; i++) {
    afters[i].style.display = 'none';
  }
}
function initDigitalItems(items) {
  for (var i = 1; i < items.length; i++) {
    items[i].style.display = 'none';
  }
}
function setActiveDigitalMenu(menu, flag) {
  if (flag === true) {
    menu.style.color = '#fff';
    menu.style.background = 'linear-gradient(180deg,#1977fe,#559bff)';
  } else {
    menu.style.color = '#51565d';
    menu.style.background = 'linear-gradient(90deg,#eef4ff 4.15%,#f8faff)';
  }
}
function popup() {
  var btns = document.querySelectorAll('.digital .textBlock .btn');
  var pops = document.querySelectorAll('.digital .pop_content');
  btns.forEach(function (btn, index) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
    });
    btn.addEventListener('mouseover', function () {
      btn.style.color = '#719bff';
      pops[index].style.display = 'block';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.color = '#1977fe';
      pops[index].style.display = 'none';
    });
  });
  pops.forEach(function (pop) {
    pop.addEventListener('mouseenter', function () {
      pop.style.display = 'block';
    });
    pop.addEventListener('mouseleave', function () {
      pop.style.display = 'none';
    });
  });
}
function listenDigitalSection(menus, afters, items) {
  menus.forEach(function (menu, index) {
    menu.addEventListener('mouseenter', function () {
      // reset menus
      menus.forEach(function (item) {
        setActiveDigitalMenu(item, false);
      });
      // show active menu
      setActiveDigitalMenu(menus[index], true);

      // reset div afters
      afters.forEach(function (item) {
        item.style.display = 'none';
      });
      // show active div afters
      afters[index].style.display = 'block';

      // reset items
      items.forEach(function (item) {
        item.style.display = 'none';
      });
      // show active item
      items[index].style.display = 'flex';
    });
  });
}

/* Product Section Logic */
// ------------------------------------------------------------------------
function initProductSection() {
  var menus = document.querySelectorAll('.product .menus div');
  var blocks = document.querySelectorAll('.product .block');
  initProductMenu(menus);
  initProductBlock(blocks);
  listenProductSection(menus, blocks);
}
function initProductMenu(menus) {
  setActiveProductMenu(menus[0], true);
}
function initProductBlock(blocks) {
  for (var i = 1; i < blocks.length; i++) {
    blocks[i].style.display = 'none';
  }
}
function setActiveProductMenu(item, flag) {
  if (flag === true) {
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
function listenProductSection(productMenus, productBlocks) {
  productMenus.forEach(function (menu, index) {
    menu.addEventListener('mouseover', function () {
      // reset menu
      productMenus.forEach(function (item) {
        setActiveProductMenu(item, false);
      });
      // show active menu
      setActiveProductMenu(productMenus[index], true);

      // reset block
      productBlocks.forEach(function (block) {
        block.style.display = 'none';
      });
      // show active block
      productBlocks[index].style.display = 'flex';
    });
  });
}

/* Partner Section Logic */
// ------------------------------------------------------------------------
function initPartnerSection() {
  var contents = document.querySelectorAll('.partner .wrap .cont');
  listenPartnerSection(contents);
}
function listenPartnerSection(contents) {
  contents.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      item.style.animationPlayState = 'paused';
    });
    item.addEventListener('mouseout', function () {
      item.style.animationPlayState = 'running';
    });
  });
}

/* Footer Section Logic */
// ------------------------------------------------------------------------
function initFooter() {
  var textLink1 = document.querySelector('.footerContainer #youshi');
  var textLink2 = document.querySelector('.footerContainer #shouyucidian');
  var qrImg1 = document.querySelector('.footerContainer #youshi_qr');
  var qrImg2 = document.querySelector('.footerContainer #shouyucidian_qr');
  listen_qrHover(textLink1, qrImg1);
  listen_qrHover(textLink2, qrImg2);
}
function listen_qrHover(textLink, qrImg) {
  textLink.addEventListener('mouseenter', function () {
    qrImg.style.display = 'block';
  });
  textLink.addEventListener('mouseleave', function () {
    qrImg.style.display = 'none';
  });
  qrImg.addEventListener('mouseenter', function () {
    qrImg.style.display = 'block';
  });
  qrImg.addEventListener('mouseleave', function () {
    qrImg.style.display = 'none';
  });
}

/* Banner Section Logic */
// ------------------------------------------------------------------------
function initBannerSection() {
  jump();
}
function jump() {
  var next = document.querySelector('#next');
  var target = document.querySelector('#next_target');
  next.addEventListener('click', function (e) {
    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

/* chatGLM Section Logic */
function initChatGLMSection() {
  chatGLM_item_hover();
  btn1_click();
}
function btn1_click() {
  var btn1 = document.querySelector('.chatGLM .btn1');
  btn1.addEventListener('click', function () {
    window.open('https://chatglm.cn/');
  });
}
function chatGLM_item_hover() {
  var items = document.querySelectorAll('.list .item');
  var cardTitles = document.querySelectorAll('.chatGLM .list .cardTitle');
  var cardDescs = document.querySelectorAll('.chatGLM .list .cardDesc');
  var logos = document.querySelectorAll('.list .item .logo');
  var cards = document.querySelectorAll('.list .item .card');
  var arrows = document.querySelectorAll('.list .item .card .youjiantou2');
  var linkHovers = document.querySelectorAll('.list .item .linkHover');
  items.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
      cardTitles[index].style.color = '#fff';
      cardDescs[index].style.color = '#fff';
      cardDescs[index].style.overflow = 'visible';
      cardDescs[index].style.marginTop = '16px';
      logos[index].style.display = 'none';
      cards[index].style.top = '30px';
      arrows[index].style.display = 'none';
      linkHovers[index].style.display = 'block';
    });
    item.addEventListener('mouseout', function () {
      cardTitles[index].style.color = '#131212';
      cardDescs[index].style.color = '#5e5e66';
      cardDescs[index].style.overflow = 'hidden';
      cardDescs[index].style.marginTop = '5px';
      logos[index].style.display = 'block';
      cards[index].style.top = '80px';
      arrows[index].style.display = 'block';
      linkHovers[index].style.display = 'none';
    });
  });
}

/* AminerSection Logic */
function initAminerSection() {
  aminerHover();
}
function aminerHover() {
  var cards = document.querySelectorAll('.aminer .card');
  var images = document.querySelectorAll('.aminer .card .images');
  var cardTitles = document.querySelectorAll('.aminer .card  .title');
  var cardDescs = document.querySelectorAll('.aminer .card  .desc');
  var arrows = document.querySelectorAll('.aminer .card .image');
  var linkHovers = document.querySelectorAll('.aminer .card .linkHover');
  var bottoms = document.querySelectorAll('.aminer .card .bottom');
  cards.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
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
    item.addEventListener('mouseleave', function () {
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
  });
}
initHeader();
initBannerSection();
initChatGLMSection();
initAminerSection();
initDigitalSection();
initProductSection();
initPartnerSection();
initFooter();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.cb159fae.js.map