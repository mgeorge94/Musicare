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
  testimonialContainer.style.display = 'block';
};
const showGrid = () => {
  grid.style.display = 'grid';
};
const showOrderBy = () => {
  orderByContainer.style.display = 'block';
};
const showGridInstruments = () => {
  instruments.forEach(function (instrument) {
    instrument.removeAttribute('hidden');
  });
};
const showNav = () => nav.forEach((navElement) => navElement.classList.add('visible'));
const showFaq = () => (faqContent.style.display = 'block');
const showFilterTab = () => {
  document.querySelector('.filter-tab').classList.add('visible');
};
const showNews = () => (newsContent.style.display = 'block');
const showContactForm = () => {
  contactFormContainer.style.display = 'flex';
};
const resetGridToPosition = () => {
  grid.style.margin = '1rem auto';
};
const showCheckoutForm = () => {
  checkoutForm.style.display = 'flex';
};
//functions that hide elements
const hideOrderBy = () => {
  orderByContainer.style.display = 'none';
};
const hideGrid = () => {
  grid.style.display = 'none';
  morePictures.style.display = 'none';
};
const hideNav = () => nav.forEach((navElement) => navElement.classList.remove('visible'));
const removeInstrumentActiveClass = () => {
  instruments.forEach((instrument) => {
    instrument.classList.remove('active');
  });
};
const hideGridInstruments = () => {
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
  contactFormContainer.style.display = 'none';
};
const hideCheckoutForm = () => {
  checkoutForm.style.display = 'none';
};
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
  instrOptBkg.classList.remove('active');
  instrOptContainer.classList.remove('active');
  checkmark.forEach((checkmark) => {
    checkmark.checked = false;
  });
});

content.addEventListener('click', () => {
  hideNav();
  hideFaq();

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
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');
let isValid = false;

function showForm() {
  contactBtn.addEventListener('click', () => {
    showContactForm();
    hideNav();
    pageScroll(500);
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
    message.textContent = 'Vă rugăm să completați toate spațiile de mai sus';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
  } else if (isValid) {
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
const instrBtn = document.querySelector('.instruments-btn');
const filterBtn = document.querySelector('.filter');
instrBtn.addEventListener('click', () => {
  instrOptBkg.classList.add('active');
  instrOptContainer.classList.add('active');
});
//make filterTab apear
filterBtn.addEventListener('click', (event) => {
  event.stopPropagation();

  showFilterTab();
});

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
    photo:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/56487413_2257920850897455_2596757585306583040_o.jpg?_nc_cat=111&ccb=3&_nc_sid=174925&_nc_eui2=AeHQLgF2iYQUE1AVuFSpuSlmpYSAi8A5MDClhICLwDkwMLanwDEbD588NgVJmMJUNOWF1yr5ld1Em3GOGH7pfw1B&_nc_ohc=YCkuLFQuHXUAX9ZAg_6&_nc_ht=scontent-otp1-1.xx&oh=3052387e9b6c4d34bd89457751b6481e&oe=60571C69',
    text:
      '  Dicta quam, accusamus obcaecati quas culpa sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo atque error similique rerum quae iure explicabo. Asperiores quos architecto ipsam quasi doloremque. Laborum incidunt pariatur eveniet velit placeat quaerat deserunt, debitis molestiae doloremque harum et ipsum in aperiam fugiat recusandae illo voluptatem, blanditiis, qui ex vero!!',
  },
  {
    name: 'Oprica Petru Stefan',
    position: 'trombonist',
    photo:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/53706662_2368643599853041_3053857021745954816_o.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHcfZ7-VAYL5qMxftEWqNTbDAJ36Rx_610MAnfpHH_rXeC9ViGVkRog7TzTygM6xClP5F4m28JVFYusBEX1BX9X&_nc_ohc=qaGJshYdY6QAX_vzWXJ&_nc_ht=scontent-otp1-1.xx&oh=16bd8b100078c910cc355fde334a8aab&oe=60575427',
    text:
      ' Architecto, nesciunt praesentium odio corporis sit nisi maiores possimus! Reprehenderit cum eaque odio saepe explicabo? Temporibus, numquam optio. Voluptates nostrum, debitis quo nihil magni commodi natus ducimus velit corporis ea perspiciatis voluptas.!!',
  },
  {
    name: 'Ciprian Oravet',
    position: 'violonist',
    photo:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/10476574_783316538367529_491711609418754151_o.jpg?_nc_cat=101&ccb=3&_nc_sid=174925&_nc_eui2=AeEn0iqocPSNMZ_zR-cC8HeisSn96YX9xOixKf3phf3E6CIPq2IjUZwIXOAPrSgUAohsxaNaVEsC7Li7v9Oa7ong&_nc_ohc=gjGEv6vZXvwAX8A5s1O&_nc_ht=scontent-otp1-1.xx&oh=606c0353859eab2cf3c16c250754de68&oe=60590235',
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
