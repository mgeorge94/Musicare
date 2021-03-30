//!show navigation
let index = 1;
const faqContent = document.querySelector('.container-faq ');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const navBurgerBtn = document.getElementById('open');
const nav = document.querySelectorAll('.nav');
const seeInstruments = document.querySelector('.see-instruments');
const grid = document.querySelector('.grid');
// functions that show elements
const showTestimonials = () => {
  const testimonialContainer = document.querySelector('.testimonial-container');
  testimonialContainer.style.display = 'block';
};
const showGrid = () => {
  grid.style.display = 'grid';
};
const showOrderBy = () => {
  orderByContainer.style.display = 'block';
};

const showGridInstruments = () => {
  const instruments = document.querySelectorAll('.instrument');
  instruments.forEach(function (instrument) {
    instrument.removeAttribute('hidden');
  });
};
const showNav = () => nav.forEach((navElement) => navElement.classList.add('visible'));
const showFaq = () => (faqContent.style.display = 'block');
const showFilterTab = () => {
  document.querySelector('.filter-tab').classList.add('visible');
};
const showAllRepairableInstruments = () => {
  const allRepairableInstruments = document.querySelectorAll('.repair-instr-column');
  allRepairableInstruments.forEach(function (panel) {
    panel.classList.add('visible');
  });
};
const showNews = () => (newsContent.style.display = 'block');
const showContactForm = () => {
  const contactFormContainer = document.querySelector('.form-container');
  contactFormContainer.style.display = 'flex';
};
const resetGridToPosition = () => {
  const grid = document.querySelector('.grid');
  grid.style.margin = '1rem auto';
};
const showCheckoutForm = () => {
  checkoutFormContainer.style.display = 'flex';
};
//functions that hide elements
const hideTestimonials = () => {
  const testimonialContainer = document.querySelector('.testimonial-container');
  testimonialContainer.style.display = 'none';
};
const hideAllRepairableInstruments = () => {
  const allRepairableInstruments = document.querySelectorAll('.repair-instr-column');
  allRepairableInstruments.forEach(function (panel) {
    panel.classList.remove('visible');
  });
};
const hideActiveInstruments = () => {
  const instruments = document.querySelectorAll('.instrument');
  instruments.forEach(function (instrument) {
    instrument.classList.remove('active');
  });
};
const hideOrderBy = () => {
  const orderByContainer = document.querySelector('.order-by-container');
  orderByContainer.style.display = 'none';
};
const hideGrid = () => {
  const morePictures = document.querySelector('.instrument-picture-container');
  const grid = document.querySelector('.grid');
  grid.style.display = 'none';
  morePictures.style.display = 'none';
  hideOrderBy();
};
const hideNav = () => nav.forEach((navElement) => navElement.classList.remove('visible'));
const removeInstrumentActiveClass = () => {
  const instruments = document.querySelectorAll('.instrument');
  instruments.forEach((instrument) => {
    instrument.classList.remove('active');
  });
};
const hideGridInstruments = () => {
  const instruments = document.querySelectorAll('.instrument');
  instruments.forEach(function (instrument) {
    instrument.setAttribute('hidden', 'true');
  });
};
const hideFaq = () => (faqContent.style.display = 'none');
const hideAboutUs = () => {
  aboutUsContainer.style.display = 'none';
  aboutUsContainer.style.display = 'none';
};
const hideNews = () => (newsContent.style.display = 'none');
const hideSlides = () => (slideContainer.style.display = 'none');
const hideFilterTab = () => {
  document.querySelector('.filter-tab').classList.remove('visible');
};
const hideContactForm = () => {
  const contactFormContainer = document.querySelector('.form-container');
  contactFormContainer.style.display = 'none';
};
const hideCheckoutForm = () => {
  const checkoutForm = document.querySelector('.checkout-form-container');
  checkoutForm.style.display = 'none';
};
const removeActiveClassInstrument = () => {
  const instruments = document.querySelectorAll('.instrument');

  instruments.forEach(function (instrument) {
    if (instrument.classList.contains('active')) {
      instrument.style.display = none;
    }
  });
};
const removeInstrumentsWithoutActiveClass = () => {
  const instruments = document.querySelectorAll('.instrument');

  instruments.forEach(function (instrument) {
    if (!instrument.classList.contains('active')) {
      instrument.style.display = 'none';
    }
  });
};
const hideImageSlider = () => {
  const imageSliderContainer = document.querySelector('.instrument-picture-container');
  imageSliderContainer.style.display = 'none';
};

//change colors
const changeAccentColors = (color, color2) => {
  document.documentElement.style.setProperty('--accent-color', color);
  document.documentElement.style.setProperty('--second-accent-color', color2);
};

// changeAccentColors('#a14c45'); for to buy website
//open nav btn click
navBurgerBtn.addEventListener('click', () => {
  hideGrid();
  hideFaq();
  hideAboutUs();
  hideNews();
  hideSlides();
  showNav();
  hideCheckoutForm();
  showTestimonials();
  hideContactForm();
  hideActiveInstruments();
  hideAllRepairableInstruments();

  instrOptBkg.classList.remove('active');
  instrOptContainer.classList.remove('active');
  checkmark.forEach((checkmark) => {
    checkmark.checked = false;
  });
});

content.addEventListener('click', () => {
  hideNav();
  hideFaq();
  hideAllRepairableInstruments();

  hideAboutUs();
});

//!FAQ

const faqButton = document.querySelector('.faq-button');
faqButton.addEventListener('click', () => {
  hideNav();
  showFaq();
  pageScroll(500);
});

const addFAQ = document.querySelectorAll('.faq');
addFAQ.forEach((FAQ) => {
  FAQ.addEventListener('click', (event) => {
    event.stopPropagation();
    removeFAQ();
    FAQ.classList.add('active');
  });
});

function removeFAQ() {
  addFAQ.forEach((faq) => {
    faq.classList.remove('active');
  });
}

//!contact form

const contactBtn = document.querySelector('.contact-btn');
const contactFormContainer = document.querySelector('.form-container');
const form = document.getElementById('form');

let isValid = false;

function showForm() {
  contactBtn.addEventListener('click', () => {
    const inNeedInstrument = document.querySelector('#instrument-in-need');
    inNeedInstrument.placeholder = 'Ce instrument are nevoie de atenția noastră?';
    inNeedInstrument.removeAttribute('readonly');
    showContactForm();
    hideNav();
    hideAllRepairableInstruments();
    hideFilterTab();
    pageScroll(500);
    hideTestimonials();
  });
}

showForm();
contactFormContainer.addEventListener('click', (event) => {
  event.stopPropagation();
});
form.addEventListener('submit', processFormData);
function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    const messageContainer = document.querySelector('.message-container');
    const message = document.querySelector('#message');
    messageContainer.classList.add('active');

    message.textContent = 'Vă rugăm să completați toate spațiile de mai sus';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
  } else if (isValid) {
    messageContainer.classList.add('active');
    message.textContent = 'Mulțumim pentru interes. Vă vorm răspunde în cel mai scurt timp posibil';
    message.style.color = '#bebebe';
    messageContainer.style.borderColor = '#bebebe';
  }
}
function storeFormData() {
  const user = {
    name: form.name.value,
    email: form.email.value,
    instrument: form.instrument.value,
    cerere: form.cerere.value,
  };
  console.log(user);
}

/////////    !Do something with data//////

function processFormData(event) {
  event.preventDefault();
  validateForm();
  if (isValid) {
    storeFormData();
  }
}
//!About-us

const aboutBtn = document.querySelector('.about');
const aboutUsContainer = document.querySelector('.aboutUs-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const btnUp = document.querySelector('.up-button');
const btnDown = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
let activeSlideIndex = 0;
const screenWidth = window.screen.width;
if (screenWidth < 700) {
  slideLeft.style.top = `-${(slidesLength - 1) * 50}vh`;
} else if (screenWidth > 700) {
  slideLeft.style.top = `-${(slidesLength - 1) * 80}vh`;
}

btnDown.addEventListener('click', () => changeSlide('up'));
const changeSlide = (direction) => {
  const sliderHeight = aboutUsContainer.clientHeight;
  if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  } else if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
aboutBtn.addEventListener('click', () => {
  hideNav();

  aboutUsContainer.style.display = 'flex';
  pageScroll(500);
});
aboutUsContainer.addEventListener('click', (event) => {
  event.stopPropagation();
});

//!NEWS

const newsBtn = document.querySelector('.news-btn');
const newsContent = document.querySelector('.card-container');
newsBtn.addEventListener('click', () => {
  hideNav();
  pageScroll(500);

  showNews();
});
content.addEventListener('click', () => {
  hideNews();
});
newsContent.addEventListener('click', (event) => {
  event.stopPropagation();
});

//!INSTRUMENTE
const instrOptBkg = document.querySelector('.instr-options-background');
const instrOptContainer = document.querySelector('.instr-options-container');

const filterBtn = document.querySelector('.filter');

container.addEventListener('click', () => {
  hideFilterTab();
});

//! Testimonials

const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
let testimonialIndex = 0;

const testimonials = [
  {
    name: 'Georgiana Mihailă',
    position: 'flautist',
    photo: 'https://randomuser.me/api/portraits/women/91.jpg',
    text:
      '  Dicta quam, accusamus obcaecati quas culpa sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo atque error similique rerum quae iure explicabo. Asperiores quos architecto ipsam quasi doloremque. Laborum incidunt pariatur eveniet velit placeat quaerat deserunt, debitis molestiae doloremque harum et ipsum in aperiam fugiat recusandae illo voluptatem, blanditiis, qui ex vero!!',
  },
  {
    name: 'Oprica Petru Stefan',
    position: 'trombonist',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
    text:
      ' Architecto, nesciunt praesentium odio corporis sit nisi maiores possimus! Reprehenderit cum eaque odio saepe explicabo? Temporibus, numquam optio. Voluptates nostrum, debitis quo nihil magni commodi natus ducimus velit corporis ea perspiciatis voluptas.!!',
  },
  {
    name: 'Ciprian Oravet',
    position: 'violonist',
    photo: 'https://randomuser.me/api/portraits/men/27.jpg',
    text:
      ' Ipsuminum dolores sitaro, ametist consectetur adipisicing elit. Iure, excepturi. Voluptatibus tempore dolorem voluptatem et inventore iusto error perferendis obcaecati beatae velit dolorum, asperiores aperiam, sapiente voluptatum, perspiciatis labore praesentium quam maiores. ',
  },
];

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[testimonialIndex];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  testimonialIndex++;
  if (testimonialIndex > testimonials.length - 1) {
    testimonialIndex = 0;
  }
}
setInterval(updateTestimonial, 10000);
