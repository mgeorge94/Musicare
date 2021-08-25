//variables
const filterTab = document.querySelector('.filter-tab');
const instrArr = [];
const seeAllInstruments = document.querySelector('.see-instruments');
//functions
const showGrid = () => {
  const grid = document.querySelector('.grid');
  grid.style.display = 'grid';
};
const hideGrid = () => {
  const morePictures = document.querySelector('.instrument-picture-container');
  const grid = document.querySelector('.grid');
  grid.style.display = 'none';
  morePictures.style.display = 'none';
  hideOrderBy();
};
const showGridInstruments = () => {
  const instruments = document.querySelectorAll('.instrument');
  instruments.forEach(function (instrument) {
    instrument.removeAttribute('hidden');
  });
};
const hideGridInstruments = () => {
  const instruments = document.querySelectorAll('.instrument');
  instruments.forEach(function (instrument) {
    instrument.setAttribute('hidden', 'true');
  });
};

const showOrderBy = () => {
  const orderByContainer = document.querySelector('.order-by-container');

  orderByContainer.style.display = 'block';
};
const hideOrderBy = () => {
  const orderByContainer = document.querySelector('.order-by-container');
  orderByContainer.style.display = 'none';
};
const resetGridToPosition = () => {
  const grid = document.querySelector('.grid');
  grid.style.margin = '1rem auto';
};

const removeInstrumentActiveClass = () => {
  const instruments = document.querySelectorAll('.instrument');
  instruments.forEach((instrument) => {
    instrument.classList.remove('active');
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
const showCheckoutForm = () => {
  const checkoutFormContainer = document.querySelector('.checkout-form-container');
  checkoutFormContainer.style.display = 'flex';
};
const hideCheckoutForm = () => {
  const checkoutForm = document.querySelector('.checkout-form-container');
  checkoutForm.style.display = 'none';
};
// Instruments object array

const allInstruments = [
  {
    name: 'Stradivarius',
    type: 'Vioară',
    price: '23456',
    description:
      ' Lorem, VIOARA Stradivarius dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture:
      'https://i2.wp.com/www.thefutureofpr.com/wp-content/uploads/2020/12/What-Are-Violin-Strings-Made-Of.jpg?fit=1000%2C600&ssl=1',
  },
  {
    name: 'Hora model 22',
    type: 'Vioară',
    price: '1599',
    discount: 7,
    description:
      ' Lorem, VIOARA Hora model 22 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://images.pexels.com/photos/306175/pexels-photo-306175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Hora model 1',
    type: 'Vioară',
    price: '1150',
    discount: 200,
    description:
      ' Lorem, VIOARA Hora model 1 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Alexander-MODEL-90',
    type: 'Corn',
    price: 1932,
    discount: -200,
    description:
      ' Lorem, CORN Alexander-model-90 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture:
      'https://images.saymedia-content.com/.image/t_share/MTc0NTEwMzUzMjY1MjA3MjQx/french-horn-fingering-chart-and-how-the-french-horn-works.jpg',
  },
  {
    name: 'Alexander-MODEL-20',
    type: 'Corn',
    price: 2099,
    discount: -1999,
    description:
      ' Lorem,  CORN Alexander-model-20 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://nafme.org/wp-content/uploads/2018/07/French-horn-credit-Victoria-Chamberlin.jpg',
  },
  /////////////////////////
  {
    name: 'BufetCrampon-profesional1',
    type: 'Clarinet',
    price: 932,
    discount: -50,
    description:
      ' Lorem, CLARINET BufetCrampon-profesional1 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://i.pinimg.com/originals/44/5b/8a/445b8a829cf2c88e83e73884671030c2.jpg',
  },
  {
    name: 'BufetCrampon-profesional50',
    type: 'Clarinet',
    price: 589,
    description:
      ' Lorem, CLARINET  BufetCrampon-profesional50 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://sc04.alicdn.com/kf/HTB1F4NxHVXXXXbwXXXXq6xXFXXXk.jpg',
  },
  {
    name: 'BufetCrampon-profesional20',
    type: 'Clarinet',
    price: 8300,
    discount: -900,
    description:
      ' Lorem, CLARINET BufetCrampon-profesional20  DISCOUNTED dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture:
      'http://static1.squarespace.com/static/57f8eaa2f5e231f7e7a8e07f/58ca7a6c1b631b18af872428/58d04718e3df284bada517f3/1588434729879/25FEBA3B-DED0-4F26-B0B1-DF548861FF6A_1_201_a.jpeg?format=1500w',
  },
  {
    name: 'muramatsuheavy',
    type: 'Flaut',
    price: 2500,
    discount: -500,
    description:
      ' Lorem, FLAUT muramatsuheavy dolor sit amet  DISCOUNTEDconsectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://wallpapercave.com/wp/wp1851717.jpg',
  },
  {
    name: 'yamaha881',
    type: 'Flaut',
    price: 589,
    description:
      ' Lorem, FLAUT yamaha881 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture:
      'https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/336/1319/Quantz_765_6__67798.1539894738.jpg?c=2g',
  },
  {
    name: 'yamaha211',
    type: 'Flaut',
    price: 1000,
    description:
      ' Lorem, FLAUT yamaha211 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture:
      'https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/199/2923/web-7Y0A0612__43924.1535649704.jpg?c=2',
  },
  {
    name: 'sankyo84567',
    type: 'Flaut',
    price: 1000,
    description:
      ' Lorem, FLAUT  sankyo84567 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://wallpapercave.com/wp/wp1851604.jpg',
  },
  {
    name: 'selmer22',
    type: 'Saxofon',
    price: 2500,
    description:
      ' Lorem, SAXOFON  selmer22  dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://d3re0f381bckq9.cloudfront.net/50704299_img-20200816-182545_1500x1125.jpg',
  },
  {
    name: 'selmer165',
    type: 'Saxofon',
    price: 589,
    description:
      ' Lorem, SAXOFON  selmer165  dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://www.hornhospital.com/main/wp-content/uploads/king-54187.jpg',
  },
  {
    name: 'BufetCrampon222',
    type: 'Saxofon',
    price: 1000,
    description:
      ' Lorem, SAXOFON   BufetCrampon222 dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://i.redd.it/1c5ik5drotv21.jpg',
  },
  {
    name: 'BufetCramponProfesioal',
    type: 'Saxofon',
    price: 1000,
    description:
      ' Lorem, SAXOFON  BufetCramponProfesioal  dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture:
      'https://a1.amlimg.com/YjdjMTA1ZDZmZjJiYWNlZTBhZTFlYjYwYjY5NmM5ZTf0uzeChu6KVV7LiW2_mswTaHR0cDovL21lZGlhLmFkc2ltZy5jb20vNGI0MjBhMWZiODMxMzE0NzFkZDA1NGQ4MmY3MjAyNzdkN2I2NDM2NjFkZDYzOTlmZDhhNWNhNzhjNTAwN2ZiNi5qcGd8fHx8fHw3MDB4NDY2fGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg',
  },
  {
    name: 'Alhambra-z',
    type: 'Chitară',
    price: 1900,
    discount: -100,
    description:
      ' Lorem, CHITARĂ  Alhambra-z  dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHtmVP1ck0_qZXxZfujLI57GqqwmU0yrUIw&usqp=CAU',
  },
  {
    name: 'Alhambra-726',
    type: 'Chitară',
    price: 567,
    description:
      ' Lorem, CHITARĂ  Alhambra-726  dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture:
      'https://image.dhgate.com/0x0s/f2-albu-g10-M00-71-C4-rBVaWV4FqIaAGgtmAAL1H46kQvg382.jpg/original-body-solid-top-acoustic-guitar-with.jpg',
  },
  {
    name: 'Alhambra-Profesional-2',
    type: 'Chitară',
    price: 100,

    description:
      ' Lorem, CHITARĂ  Alhambra-Profesional-2  dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture: 'http://ikuzoguitars.com/wp-content/uploads/2015/01/Acoustic-Electric-Guitar-For-Sale.jpg',
  },
  {
    name: 'Alhambra-Profesional-44',
    type: 'Chitară',
    price: 899,
    description:
      ' Lorem, CHITARĂ  Alhambra-Profesional-44  dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
    picture:
      'https://www.dhresource.com/0x0/f2/albu/g8/M01/D6/57/rBVaV1zGZtSAUm_eAAldhOyHrXQ014.jpg/green-flame-top-custom-shop-electric-guitar.jpg',
  },
];
//get instruments
function paintInstruments(instrumentList, gameDiscount) {
  const grid = document.querySelector('.grid');
  instrumentList.forEach(function (instrument) {
    let price = instrument.price;
    let discount = instrument.discount;
    let type = instrument.type;
    let description = instrument.description;
    let picture = instrument.picture;
    let name = instrument.name;
    // HTML
    if (gameDiscount === true) {
      if (discount !== undefined) {
        instrumentsHTML = `<div  data-instrumenttype='${type}'class="box instrument" data-price="${price}"  data-discount="${discount}LEI " data-name = "${name}">
        <img class="instrument-image" src="${picture}" alt="${picture}">
       <h6 class="price">${price} lei</h6>
       
       <h6 class = 'discount-text'>${discount} Lei</h6>
        <p class="instrument-description">${description}</p>
        </div>`;
      } else {
        instrumentsHTML = `<div  data-instrumenttype='${type}'class="box instrument" data-price="${price}"   data-name = "${name}">
      <img class="instrument-image" src="${picture}" alt="${picture}">
     <h6 class="price"><s>  ${price} Lei  </s> ${price - 50} lei</h6>
     
      <p class="instrument-description">${description}</p>
      </div>`;
      }
    } else {
      if (discount !== undefined) {
        instrumentsHTML = `<div  data-instrumenttype='${type}'class="box instrument" data-price="${price}"  data-discount="${discount}LEI " data-name = "${name}">
          <img class="instrument-image" src="${picture}" alt="${picture}">
         <h6 class="price">${price} lei</h6>
         
         <h6 class = 'discount-text'>${discount} Lei</h6>
          <p class="instrument-description">${description}</p>
          </div>`;
      } else {
        instrumentsHTML = `<div  data-instrumenttype='${type}'class="box instrument" data-price="${price}"   data-name = "${name}">
        <img class="instrument-image" src="${picture}" alt="${picture}">
       <h6 class="price">${price} lei</h6>
       <h6 class ='discount-game'></h6>
        <p class="instrument-description">${description}</p>
        </div>`;
      }
    }

    // Insert the html to the end of every iteration
    grid.insertAdjacentHTML('beforeend', instrumentsHTML);
    //make instrument array
    instrArr.push(instrument.type);

    //filter dupicated instruments

    uniqueInstrArr = instrArr.filter(function (instrument, index) {
      return instrArr.indexOf(instrument) == index;
    });
  });
}

paintInstruments(allInstruments, gameDiscount);
let instruments = Array.from(document.querySelectorAll('.instrument'));
//clean html grid
const cleanInstruments = () => {
  const grid = document.querySelector('.grid');
  grid.innerHTML = `<div class="instrument-picture-container">
  <div class="instrumnet-image-slider">
    <div class="image-slider-container" id="image-container"></div>
    <button id="btn-up">
      <i class="fas fa-arrow-up slider-buttons"></i>
    </button>
    <button class="buy"><i class="fas fa-shopping-cart"></i> Cumpară</button>
  </div>
</div>
</div>`;
};
//fliter  instruments alphabetically
const paintInstrumentsAlphabetically = (instrArr) => {
  const aZBtn = document.querySelector('.a-z');

  const filterAlphabetically = () => {
    instrArr.sort(function (i, j) {
      if (i.name < j.name) {
        return -1;
      }
      if (i.name > j.name) {
        return 1;
      }
      return 0;
    });
  };

  aZBtn.addEventListener('click', function () {
    filterAlphabetically();
    cleanInstruments();
    paintInstruments(instrArr, gameDiscount);
    resetGridToPosition();
    clickOnInstrument();
    hideCheckoutForm();
  });
};

//  filter by price
//ascending order
const paintinAscendingOrder = (instrArr) => {
  const ascendingPriceBtn = document.querySelector('.ascending-price');
  const filterByAscendingOrder = () => {
    instrArr.sort(function (i, j) {
      if (i.price < j.price) {
        return -1;
      }
      if (i.price > j.price) {
        return 1;
      }
      return 0;
    });
  };
  ascendingPriceBtn.addEventListener('click', function () {
    filterByAscendingOrder();
    cleanInstruments();
    paintInstruments(instrArr, gameDiscount);
    clickOnInstrument();
    resetGridToPosition();
    hideCheckoutForm();
  });
};

//descending order
const paintInDescendingOrder = function (instrList) {
  const filterByDescendingOrder = () => {
    instrList.sort(function (i, j) {
      if (i.price > j.price) {
        return -1;
      }
      if (i.price < j.price) {
        return 1;
      }
      return 0;
    });
  };
  const descendingPriceBtn = document.querySelector('.descending-price');
  descendingPriceBtn.addEventListener('click', function () {
    filterByDescendingOrder();
    cleanInstruments();
    paintInstruments(instrList, gameDiscount);
    clickOnInstrument();
    resetGridToPosition();
    hideCheckoutForm();
  });
};

//filter by discount
const filterByDiscount = (instrList) => {
  const grid = document.querySelector('.grid');
  const discountBtn = document.querySelector('.discount');
  const paintDiscountedInstruments = function () {
    instrList.forEach(function (instrument) {
      let price = instrument.price;
      let discount = instrument.discount;
      let type = instrument.type;
      let description = instrument.description;
      let picture = instrument.picture;
      let name = instrument.name;
      // HTML
      if (discount !== undefined) {
        instrumentsHTML = `<div  data-instrumenttype='${type}'class="box instrument" data-price="${price}"  data-discount="${discount}LEI " data-name = "${name}">
        <img class="instrument-image" src="${picture}" alt="${picture}">
       <h6 class="price">${price} lei</h6>
       <h6 class = 'discount-text'>${discount} Lei</h6>
        <p class="instrument-description">${description}</p>
        </div>
        `;
        // Insert the html to the end of every iteration
        grid.insertAdjacentHTML('beforeend', instrumentsHTML);
      } else return;
    });
  };

  discountBtn.addEventListener('click', function () {
    cleanInstruments();
    paintDiscountedInstruments(allInstruments);
    clickOnInstrument();
    resetGridToPosition();
  });
};

//insert checkboxes into HTML

const makeCheckboxes = function (types) {
  const checkboxContainer = document.querySelector('.checkboxes-container');
  checkboxContainer.innerHTML = types
    .map(function (type) {
      const htmlCheckbox = ` <label class="checkbox-container"
      >${type}
      <input type="radio" name="radio"  filter="${type}"/>
      <span class="checkmark"></span>
    </label>`;

      return htmlCheckbox;
    })
    .join('');
};
makeCheckboxes(uniqueInstrArr);

//get min and max price
const minPrice = Math.min(...allInstruments.map((instrument) => instrument.price));
const maxPrice = Math.max(...allInstruments.map((instrument) => instrument.price));
//slider function

const sliderFunction = function () {
  let doubleHandleSlider = document.querySelector('.double-handle-slider');
  let minValInput = document.querySelector('.min-value');
  let maxValInput = document.querySelector('.max-value');
  noUiSlider.create(doubleHandleSlider, {
    start: [minPrice, maxPrice],
    connect: true,
    tooltip: 0,
    step: 10,
    range: {
      min: [minPrice],
      max: [maxPrice],
    },
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return value;
      },
    },
  });

  doubleHandleSlider.noUiSlider.on('change', function (values, handle) {
    var val = values[handle]; // 0 or 1

    if (handle) {
      maxValInput.value = Math.round(val);
    } else {
      minValInput.value = Math.round(val);
    }
  });

  minValInput.addEventListener('change', function () {
    doubleHandleSlider.noUiSlider.set([this.value, null]);
  });

  maxValInput.addEventListener('change', function () {
    doubleHandleSlider.noUiSlider.set([null, this.value]);
  });
};
sliderFunction();

let matchedInstruments = [];
const checkmark = document.querySelectorAll('.checkmark');
//Array of matched intruments
let matchedPictures = [];
//function that filters instruments

const filteredInstruments = function (event) {
  // see if checkbox = checked
  const searchBtn = document.querySelector('.search-btn');
  const checkboxChecked = event.target.getAttribute('filter');
  let doubleHandleSlider = document.querySelector('.double-handle-slider');

  if (!checkboxChecked) {
    return;
  } else {
    //resset array of matched instruments
    matchedInstruments = [];

    searchBtn.addEventListener('click', () => {
      let minWantedPrice = Math.round(Math.min(...doubleHandleSlider.noUiSlider.get([0, null])));
      let maxWantedPrice = Math.round(Math.max(...doubleHandleSlider.noUiSlider.get([null, 1])));
      // filter Instruments by type
      allInstruments.forEach((instrument) => {
        if (
          event.target.checked &&
          checkboxChecked === instrument.type &&
          instrument.price >= minWantedPrice &&
          instrument.price <= maxWantedPrice
        ) {
          instrument;
          matchedInstruments.push(instrument);
        }
        cleanInstruments();
        paintInstruments(matchedInstruments, gameDiscount);

        pageScroll(500);
        filterTab.classList.remove('visible');
        showGrid();
        hideNav();
        showOrderBy();

        matchedInstruments.forEach((element) => {
          matchedInstruments = matchedInstruments.filter(function (instrument, index) {
            return matchedInstruments.indexOf(instrument) == index;
          });
        });
      });

      filterinstrumentsTab();
      clickOnInstrument();
    });

    resetGridToPosition();
  }
};
filterTab.addEventListener('click', (event) => {
  filteredInstruments(event);
});

//filtering tabs
const filterinstrumentsTab = () => {
  if (matchedInstruments.length === 0) {
    filterByDiscount(allInstruments);
    paintInDescendingOrder(allInstruments);
    paintInstrumentsAlphabetically(allInstruments, gameDiscount);
    paintinAscendingOrder(allInstruments);
  } else {
    filterByDiscount(matchedInstruments);
    paintInDescendingOrder(matchedInstruments);
    paintInstrumentsAlphabetically(matchedInstruments, gameDiscount);
    paintinAscendingOrder(matchedInstruments);
  }
};

const checkoutFormContainer = document.querySelector('.checkout-form-container');
const checkoutForm = checkoutFormContainer.querySelector('#checkout-form');

const clickOnBuy = () => {
  const buyBtn = document.querySelector('.buy');
  buyBtn.addEventListener('click', () => {
    //show checkout form

    showCheckoutForm();

    //hide testimonials
    testimonialContainer.style.display = 'none';
    //hide instruments from grid
    const instruments = document.querySelectorAll('.instrument');
    instruments.forEach(function (instrument) {
      if (!instrument.classList.contains('active')) {
        instrument.setAttribute('hidden', 'true');
      } else {
        autoAddInstrumentToCheckoutForm(instrument);
      }
    });
    pageScroll(1200);
  });
};
clickOnBuy();
// add instrument to form
const autoAddInstrumentToCheckoutForm = (instr) => {
  let instrument = document.querySelector('#instrumentBought');
  let transportPrice = document.querySelector('#transportPrice');
  let instrPrice = document.querySelector('#boughtInstrumentPrice');
  const totalPrice = document.querySelector('#totalPrice');

  instrument.value = `${instr.dataset.instrumenttype}:  ${instr.dataset.name} `;
  transportPrice.value = 40 + ' lei';
  instrPrice.value = `${instr.dataset.price} lei`;
  totalPrice.innerHTML = `${Number(instr.dataset.price) + 40} lei`;
};

const clickOnInstrument = () => {
  let instruments = document.querySelectorAll('.instrument');
  const morePictures = document.querySelector('.instrument-picture-container');
  const imageSliderContainer = document.querySelector('.image-slider-container');
  const sliderBtnUp = document.querySelector('#btn-up');

  instruments.forEach(function (instrument) {
    let showActiveInstrument = function () {
      instrument.addEventListener('click', (event) => {
        event.stopPropagation();

        removeInstrumentActiveClass();

        // imagesArray

        const moreImages = [
          {
            name: 'Stradivarius',
            picture1:
              'https://images.pexels.com/photos/210854/pexels-photo-210854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/752535/pexels-photo-752535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/963113/pexels-photo-963113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/752535/pexels-photo-752535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'Hora model 1',
            picture1:
              'https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/3613954/pexels-photo-3613954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/306081/pexels-photo-306081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'Hora model 22',
            picture1:
              'https://images.pexels.com/photos/5855909/pexels-photo-5855909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.unsplash.com/photo-1460036521480-ff49c08c2781?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
            picture3:
              'https://images.unsplash.com/photo-1604057982108-e9a1a47ad80a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
            picture4:
              'https://images.unsplash.com/photo-1528032947483-4e1df543253a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
          },
          {
            name: 'Alexander-MODEL-20',
            picture1:
              'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/french-horn-isolated-on-back-m-k-miller.jpg',
            picture2: 'https://i.pinimg.com/236x/52/56/ac/5256ac8ee724861d5a0dcca98a8b4879--mellophone-brass-instrument.jpg',
            picture3: 'https://wallpapercave.com/wp/wp4134034.jpg',
            picture4: 'https://cdn.wallpapersafari.com/84/6/iwFjyL.jpg',
          },
          {
            name: 'Alexander-MODEL-90',
            picture1: 'https://wallpaperaccess.com/full/3411744.jpg',
            picture2: 'https://thumbs.dreamstime.com/b/french-horn-black-background-6240504.jpg',
            picture3: 'https://cdn.wallpapersafari.com/94/43/WZAbYq.jpg',
            picture4:
              'https://images.unsplash.com/photo-1590054387835-ab72678fef01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          },
          {
            name: 'yamaha211',
            picture1:
              'https://res.cloudinary.com/flute-specialists-inc/images/e_auto_brightness/e_auto_color/e_auto_contrast/c_crop,e_vibrance:20,g_face:center,h_550,w_1000/f_auto,q_auto/v1603306617/New%20Flutes%20Photography/Muramatsu%20New%209K%2095026/Muramatsu_9K-3/Muramatsu_9K-3.jpg',
            picture2: 'http://cdn.shopify.com/s/files/1/0379/9369/products/IMG_8331_grande.jpg?v=1533153032',
            picture3: 'https://cdn.shopify.com/s/files/1/0379/9369/products/IMG_8327_large.jpg?v=1533153032',
            picture4: 'https://cdn.shopify.com/s/files/1/0379/9369/products/IMG_8330_large.jpg?v=1533153032',
          },
          {
            name: 'yamaha881',
            picture1: 'https://wallpapercave.com/wp/wp1851549.jpg',
            picture2: 'https://wallpapercave.com/wp/wp1851550.jpg',
            picture3: 'https://wallpapercave.com/wp/wp1851562.jpg',
            picture4: 'https://wallpapercave.com/wp/wp1851565.jpg',
          },
          {
            name: 'muramatsuheavy',
            picture1:
              'https://previews.123rf.com/images/flynt/flynt0805/flynt080500069/3070404-flute-lay-diagonally-across-sheet-music-notes.jpg',
            picture2: 'https://thumbs.dreamstime.com/b/flute-instrument-notes-29449236.jpg',
            picture3: 'https://i.pinimg.com/originals/0d/2a/62/0d2a6206710e1f84d616c0ce2e1b0cfe.jpg',
            picture4: 'https://cdn.shopify.com/s/files/1/0206/0816/products/9kMura91290_1024x1024.jpg?v=1571439138',
          },
          {
            name: 'sankyo84567',
            picture1: 'https://wallpapercave.com/wp/wp1851514.jpg',
            picture2: 'https://wallpapercave.com/wp/wp1851526.jpg',
            picture3: 'https://wallpapercave.com/wp/wp1851543.jpg',
            picture4: 'https://64.media.tumblr.com/862692547e508a9620fa7db2a932ffa2/tumblr_nlki7yu03a1tvvk6fo5_1280.jpg',
          },
          {
            name: 'selmer22',
            picture1:
              'https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/359995/pexels-photo-359995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'selmer165',
            picture1:
              'https://images.pexels.com/photos/164934/pexels-photo-164934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/2347916/pexels-photo-2347916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/4786236/pexels-photo-4786236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'BufetCrampon222',
            picture1:
              'https://images.pexels.com/photos/5650687/pexels-photo-5650687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/5657273/pexels-photo-5657273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/4709816/pexels-photo-4709816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/4786240/pexels-photo-4786240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'BufetCramponProfesioal',
            picture1: 'https://images.pexels.com/photos/3984800/pexels-photo-3984800.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            picture2:
              'https://images.pexels.com/photos/3857365/pexels-photo-3857365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3: 'https://media.istockphoto.com/photos/saxophone-player-picture-id649639094',
            picture4: 'https://media.istockphoto.com/photos/music-picture-id1063339278',
          },
          {
            name: 'Alhambra-z',
            picture1:
              'https://images.pexels.com/photos/3714523/pexels-photo-3714523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/3733338/pexels-photo-3733338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/4471892/pexels-photo-4471892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'Alhambra-726',
            picture1:
              'https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/4472061/pexels-photo-4472061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/3984814/pexels-photo-3984814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'Alhambra-Profesional-2',
            picture1:
              'https://images.pexels.com/photos/3977174/pexels-photo-3977174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/1696832/pexels-photo-1696832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/3922579/pexels-photo-3922579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/4079260/pexels-photo-4079260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'Alhambra-Profesional-44',
            picture1:
              'https://images.pexels.com/photos/1047796/pexels-photo-1047796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture2:
              'https://images.pexels.com/photos/417451/pexels-photo-417451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture3:
              'https://images.pexels.com/photos/3660866/pexels-photo-3660866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            picture4:
              'https://images.pexels.com/photos/1539789/pexels-photo-1539789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            name: 'BufetCrampon224',
            picture1: 'https://www.kesslerandsons.com/wp-content/uploads/leblanc-serenade-l225se-clarinet-19-lower.jpg',
            picture2:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoUyIv64kNJWXufuYaRBnNBG7fi3IYXHA-WyPOaM3KrymmcLDyb6mOT3mvITa4v9MU6w&usqp=CAU',
            picture3: 'https://kesslermusic.com/SelmerLeblanc/lb120bex/set/clarinets.jpg',
            picture4: 'https://www.kesslerandsons.com/wp-content/uploads/2015/10/backun-alpha-nickel-keys-reinforce.jpg',
          },
          {
            name: 'BufetCrampon-profesional20',
            picture1: 'https://www.kesslerandsons.com/wp-content/uploads/2016/03/backun-model-f-coco-gold-reg.jpg',
            picture2: 'https://www.kesslerandsons.com/wp-content/uploads/2016/03/backun-model-f-coco-gold-trills.jpg',
            picture3: 'https://www.kesslerandsons.com/wp-content/uploads/2016/03/backun-model-f-coco-gold-bell.jpg',
            picture4: 'https://assets.speakcdn.com/assets/1942/clarinet-banner-2.jpg',
          },
          {
            name: 'BufetCrampon-profesional50',
            picture1: 'https://www.mmimports.com/wp-content/uploads/2018/02/clarinet-selection-banner-1200x400.jpg',
            picture2:
              'https://media.istockphoto.com/photos/clarinet-picture-id187119065?k=6&m=187119065&s=170667a&w=0&h=NPQBCGN1LO47nPqV6hW8mUThE4r7Ok-uu_kQAMm8o4I=',
            picture3: 'https://thumbs.dreamstime.com/b/clarinet-notes-music-swing-relax-104622685.jpg',
            picture4: 'https://i.pinimg.com/originals/d6/de/09/d6de0964ebe1e71620a538aa1fb31724.jpg',
          },
          {
            name: 'BufetCrampon-profesional1',
            picture1: 'https://i.etsystatic.com/7735354/r/il/b740c9/922486948/il_570xN.922486948_8ye6.jpg',
            picture2: 'https://images.snapwi.re/2024/54c67fdee3f4a2c25f3837b9.w800.jpg',
            picture3: 'https://i.pinimg.com/736x/9c/f6/8a/9cf68aed7a68d447b48a51d84dbf79f5.jpg',
            picture4: 'https://i.pinimg.com/originals/28/91/fa/2891fab2820c8c83f6e69b04eb2d6010.jpg',
          },
        ];
        moreImages.forEach(function (image) {
          if (instrument.dataset.name === image.name) {
            matchedPictures.push(image.name);
            pic1 = image.picture1;
            pic2 = image.picture2;
            pic3 = image.picture3;
            pic4 = image.picture4;
            instrName = image.name;

            //\ HTML
            const htmlIstrumentImg = `<img src="${pic1}"data-name ="${instrName} " alt="">
        <img src="${pic2}" alt="">
        <img src="${pic3}" alt="">
        <img src="${pic4}" alt="">`;
            //insert html to the end of every iteration
            imageSliderContainer.innerHTML = htmlIstrumentImg;
            // add classlist of active
            instrument.classList.add('active');
          } else if (instrument.dataset.name !== image.name) {
            if (matchedPictures.indexOf(image.name) !== -1) {
              matchedPictures.splice(matchedPictures.indexOf(image.name), 1);
            }
          }
        });
        const image = imageSliderContainer.querySelectorAll('img');
        //Make slider move
        let sliderIndex = 0;
        sliderBtnUp.addEventListener('click', function (event) {
          event.stopPropagation();
          sliderIndex++;
          changeImage();
        });
        const changeImage = function () {
          if (sliderIndex > image.length - 1) {
            sliderIndex = 0;
          } else if (sliderIndex < 0) {
            sliderIndex = image.length - 1;
          }

          imageSliderContainer.style.transform = `translateY(${-sliderIndex * 80}vh)`;
        };
        const grid = document.querySelector('.grid');
        morePictures.style.display = 'flex';
        if (window.screen.width < 800) {
          grid.style.margin = '49rem auto';
        } else if (window.screen.width > 500) {
          grid.style.margin = '35rem auto';
        }

        pageScroll(500);
      });
    };
    showActiveInstrument();
    clickOnBuy();
  });
};
clickOnInstrument();

// click to see all instruments
seeAllInstruments.addEventListener('click', function () {
  showGrid();
  hideNav();
  hideFilterTab();
  resetGridToPosition();
  removeInstrumentActiveClass();
  showOrderBy();
  filterinstrumentsTab();
  cleanInstruments();
  paintInstruments(allInstruments, gameDiscount);
  showGridInstruments();
  clickOnInstrument();
  pageScroll(500);
});

let checked = true;

const showOtherAdress = () => {
  const otherAddress = document.querySelector('.other-address');
  if (checked === true) {
    otherAddress.style.display = 'block';
    checked = false;
    pageScroll(1600);
  } else if (checked === false) {
    otherAddress.style.display = 'none';
    checked = true;
    pageScroll(1300);
  }
};
//hide message

checkoutForm.addEventListener('submit', processCheckoutFormData);
function validateCheckoutForm() {
  const messageContainer = document.querySelector('#checkout-message-container');
  const message = document.querySelector('#checkoutMessage');
  isValid = checkoutForm.checkValidity();
   if (isValid) {
    messageContainer.classList.add('active');
    message.innerHTML = 'Comanda dumneavoastră a fost înregistrată';
    message.style.color = 'lime';
    messageContainer.style.borderColor = 'lime';
    pageScroll(1500);
  }
}

function processCheckoutFormData(event) {
  event.preventDefault();
  validateCheckoutForm();
}
