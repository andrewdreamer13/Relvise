"use strict";
// header burger menu
burger();

function burger() {
  const burgerBtn = document.querySelector('.header__burger');
  burgerBtn.addEventListener('click', () => {
    document.querySelector('.header__nav-list').classList.toggle('header__nav-list-transform');
    document.querySelector('.span-1').classList.toggle('span-1-transform');
    document.querySelector('.span-2').classList.toggle('span-2-transform');
    document.querySelector('.span-3').classList.toggle('span-3-transform');
    document.querySelectorAll('.header__nav-item').forEach((element) => {
      element.classList.toggle('header__nav-item-transform');
    })
    document.body.classList.toggle('no-scroll');
  })
} // End of burger

// Modal window
modal();

function modal() {
  const open = document.querySelector('.about__play-button');
  const close = document.querySelector('.close');
  const modal = document.querySelector('.modal');
  open.addEventListener('click', () => {
    modal.classList.add('visible');
    document.body.classList.add('no-scroll');
  });
  open.addEventListener('touch', () => {
    modal.classList.add('visible');
    document.body.classList.add('no-scroll');
  });
  close.addEventListener('click', () => {
    modal.classList.remove('visible');
    document.body.classList.remove('no-scroll');
  });
  close.addEventListener('touch', () => {
    modal.classList.remove('visible');
    document.body.classList.remove('no-scroll');
  });
  window.onclick = function (e) {
    if (e.target == modal) {
      modal.classList.remove('visible');
      document.body.classList.remove('no-scroll');
    }
  }
  window.addEventListener('touch',(e) =>{
    if (e.target == modal) {
      modal.classList.remove('visible');
      document.body.classList.remove('no-scroll');
    }
  })
    
  }

// Auto carousel
carousel()
function carousel(){
  if(window.innerWidth < 1050){
    document.querySelector('.clients__track').classList.add('clients__track-animation');
  }else{
    document.querySelector('.clients__track').classList.remove('clients__track-animation');
  }
}

// offer transform

TransformExp();

function TransformExp() {
  document.addEventListener('scroll', () => {
    const expItems = document.querySelectorAll('.experience__item');
    // const experience = document.querySelector('.experience');
    function showItem() {
      expItems.forEach((item) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = item.offsetTop + (item.offsetHeight / 2);

        if (windowCenter >= scrollOffSet) {
          item.classList.add('experience__item-transform');
        
        } else {
          item.classList.remove('experience__item-transform');
          
        }

      })
    }
    showItem();
  })
} // end of transform for experience

TransformPractice();

function TransformPractice() {
  document.addEventListener('scroll', () => {
    const practiceItems = document.querySelectorAll('.practice__item');
    // const practice = document.querySelector('.practice');
    function showItem() {
      practiceItems.forEach((item) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = item.offsetTop + (item.offsetHeight / 2);
        if (windowCenter >= scrollOffSet) {
          item.classList.add('practice__item-transform');
        
        } else {
          item.classList.remove('practice__item-transform');
          
        }

      })
    }
    showItem();
  })
} // end of transform for practice


TransformTouch();

function TransformTouch() {
  document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.touch__card');
    // const cardBox = document.querySelector('.touch__cards');
    function showItem() {
      cards.forEach((card) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = card.offsetTop + (card.offsetHeight / 2);
        
        if (windowCenter >= scrollOffSet) {
          card.classList.add('touch__card-transform');
         
        } else {
          card.classList.remove('touch__card-transform');
          }
          
      })
    }
    showItem();
  })
} // end of transform for get in tuoch

// Modal  contact window
contactModal();

function contactModal() {
  const open = document.querySelector('.contact__button');
  const close = document.querySelector('.contact__modal-close');
  const modal = document.querySelector('.contact__modal');
  open.addEventListener('click', () => {
    modal.classList.add('contact__visible');
    document.body.classList.add('no-scroll');
  });
  open.addEventListener('touch', () => {
    modal.classList.add('contact__visible');
    document.body.classList.add('no-scroll');
  });
  close.addEventListener('click', () => {
    modal.classList.remove('contact__visible');
    document.body.classList.remove('no-scroll');
  });
  close.addEventListener('touch', () => {
    modal.classList.remove('contact__visible');
    document.body.classList.remove('no-scroll');
  })
  window.onclick = function (e) {
    if (e.target == modal) {
      modal.classList.remove('contact__visible');
      document.body.classList.remove('no-scroll');
    }
  }
  window.addEventListener('touch',(e) =>{
    if (e.target == modal) {
      modal.classList.remove('contact__visible');
      document.body.classList.remove('no-scroll');
    }
  })
    
  }
