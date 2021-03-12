//varialbes

const checkboxContainer = document.querySelector('.checkboxes-container');
const instrumentsContainer = document.querySelector('.grid');
const instrArr = [];
let doubleHandleSlider = document.querySelector('.double-handle-slider');
let minValInput = document.querySelector('.min-value');
let maxValInput = document.querySelector('.max-value');
const searchBtn = document.querySelector('.search-btn');
const filterTab = document.querySelector('.filter-tab');
// Instruments object aray

const allInstruments = [
	{
		type: 'Clarinet',
		price: 932,
		description:
			' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://i.pinimg.com/originals/44/5b/8a/445b8a829cf2c88e83e73884671030c2.jpg',
	},
	{
		type: 'Clarinet',
		price: 589,
		description:
			' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture: 'https://sc04.alicdn.com/kf/HTB1F4NxHVXXXXbwXXXXq6xXFXXXk.jpg',
	},
	{
		type: 'Clarinet',
		price: 8300,
		description:
			' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'http://static1.squarespace.com/static/57f8eaa2f5e231f7e7a8e07f/58ca7a6c1b631b18af872428/58d04718e3df284bada517f3/1588434729879/25FEBA3B-DED0-4F26-B0B1-DF548861FF6A_1_201_a.jpeg?format=1500w',
	},
	{
		name: 'muramatsuheavy',
		type: 'Flaut',
		price: 2500,
		description:
			' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture: 'https://i.ebayimg.com/images/g/yVwAAOSwww1ceJOT/s-l640.jpg',
	},
	{
		name: 'yamaha881',
		type: 'Flaut',
		price: 589,
		description:
			' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/336/1319/Quantz_765_6__67798.1539894738.jpg?c=2g',
	},
	{
		name: 'yamaha211',
		type: 'Flaut',
		price: 1000,
		description:
			' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/199/2923/web-7Y0A0612__43924.1535649704.jpg?c=2',
	},
	{
		name: 'sankyo84567',
		type: 'Flaut',
		price: 1000,
		description:
			' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/199/2923/web-7Y0A0612__43924.1535649704.jpg?c=2',
	},
	{
		type: 'Saxofon',
		price: 2500,
		description:
			' Lorem, SAXOFON    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://d3re0f381bckq9.cloudfront.net/50704299_img-20200816-182545_1500x1125.jpg',
	},
	{
		type: 'Saxofon',
		price: 589,
		description:
			' Lorem, SAXOFON    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture: 'https://www.hornhospital.com/main/wp-content/uploads/king-54187.jpg',
	},
	{
		type: 'Saxofon',
		price: 1000,
		description:
			' Lorem, SAXOFON    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture: 'https://i.redd.it/1c5ik5drotv21.jpg',
	},
	{
		type: 'Saxofon',
		price: 1000,
		description:
			' Lorem, SAXOFON    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://a1.amlimg.com/YjdjMTA1ZDZmZjJiYWNlZTBhZTFlYjYwYjY5NmM5ZTf0uzeChu6KVV7LiW2_mswTaHR0cDovL21lZGlhLmFkc2ltZy5jb20vNGI0MjBhMWZiODMxMzE0NzFkZDA1NGQ4MmY3MjAyNzdkN2I2NDM2NjFkZDYzOTlmZDhhNWNhNzhjNTAwN2ZiNi5qcGd8fHx8fHw3MDB4NDY2fGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg',
	},
	{
		type: 'Chitară',
		price: 1900,
		description:
			' Lorem, CHITARĂ    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHtmVP1ck0_qZXxZfujLI57GqqwmU0yrUIw&usqp=CAU',
	},
	{
		type: 'Chitară',
		price: 567,
		description:
			' Lorem, CHITARĂ    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://image.dhgate.com/0x0s/f2-albu-g10-M00-71-C4-rBVaWV4FqIaAGgtmAAL1H46kQvg382.jpg/original-body-solid-top-acoustic-guitar-with.jpg',
	},
	{
		type: 'Chitară',
		price: 100,
		description:
			' Lorem, CHITARĂ    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'http://ikuzoguitars.com/wp-content/uploads/2015/01/Acoustic-Electric-Guitar-For-Sale.jpg',
	},
	{
		type: 'Chitară',
		price: 899,
		description:
			' Lorem, CHITARĂ    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
		picture:
			'https://www.dhresource.com/0x0/f2/albu/g8/M01/D6/57/rBVaV1zGZtSAUm_eAAldhOyHrXQ014.jpg/green-flame-top-custom-shop-electric-guitar.jpg',
	},
];
//get instruments
function getInstruments() {
	allInstruments.forEach(function (instrument) {
		let price = instrument.price;
		let type = instrument.type;
		let description = instrument.description;
		let picture = instrument.picture;
		let name = instrument.name;
		// HTML

		let instrumentsHTML = `<div  data-instrumentType='${type}'class="box instrument" data-price="${price}" data-name = ${name}">
        <img class="instrument-image" src="${picture}" alt="${picture}">
       <h6 class="price">${price} lei</h6>
        <p class="instrument-description">${description}</p>
        </div>`;
		// Insert the html to the end of every iteration
		instrumentsContainer.insertAdjacentHTML('afterbegin', instrumentsHTML);
		//make instrument array
		instrArr.push(instrument.type);

		//filter dupicated instruments

		uniqueInstrArr = instrArr.filter(function (instrument, index) {
			return instrArr.indexOf(instrument) == index;
		});
	});
}

getInstruments();
const instruments = Array.from(document.querySelectorAll('.instrument'));
//get min and max price
const minPrice = Math.min(...allInstruments.map((instrument) => instrument.price));
const maxPrice = Math.max(...allInstruments.map((instrument) => instrument.price));

//insert checkboxes into HTML

const makeCheckboxes = function (types) {
	checkboxContainer.innerHTML = types
		.map(function (type) {
			const htmlCheckbox = `<label class="checkbox-container">
            <input type="checkbox" filter="${type}"> ${type}<span class="checkmark"></span></label>`;

			return htmlCheckbox;
		})
		.join('');
};
makeCheckboxes(uniqueInstrArr);

//slider function

const sliderFunction = function () {
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

//function that filters instruments

const filteredInstruments = function (event, instrArray) {
	// see if checkbox = checked
	const checkboxChecked = event.target.getAttribute('filter');
	if (!checkboxChecked) {
		document.querySelector('.error-on-filter').style.display = 'block';
	} else {
		document.querySelector('.error-on-filter').style.display = 'none';
		searchBtn.addEventListener('click', () => {
			//! filter by price doesnt work together with filter by name
			// filterBy name
			instruments.forEach((element) => {
				if (checkboxChecked !== element.dataset.instrumenttype) {
					element.setAttribute('hidden', 'true');
				} else {
					element.removeAttribute('hidden');
				}
			});
			let minWantedPrice = Math.round(
				Math.min(...doubleHandleSlider.noUiSlider.get([0, null]))
			);
			let maxWantedPrice = Math.round(
				Math.max(...doubleHandleSlider.noUiSlider.get([null, 1]))
			);
			//filterBy price
			// instruments.forEach((element) => {
			// 	console.log(element.dataset.price);
			// 	console.log(minWantedPrice, maxWantedPrice);
			// 	if (
			// 		element.dataset.price >= minWantedPrice &&
			// 		element.dataset.price <= maxWantedPrice
			// 	) {
			// 		element.removeAttribute('hidden');
			// 		console.log('bravo tati');
			// 	} else {
			// 		console.log('sugi pula');
			// 		element.setAttribute('hidden', 'true');
			// 	}
			// });

			grid.style.display = 'flex';
			hideNav();
		});
	}
};
filterTab.addEventListener('click', filteredInstruments, allInstruments, true);
const morePictures = document.querySelector('.instrument-picture-container');
//Instrument slider on instrument card click
let wasCalled = false;
const instrumentCard = Array.from(document.querySelectorAll('.instrument'));
instrumentCard.forEach(function (instrument) {
	let onlyOnce = function () {
		instrument.addEventListener('click', () => {
			if (!wasCalled) {
				instrument.classList.add('active');

				morePictures.style.display = 'flex';
				wasCalled = true;
			}
			instrumentCard.filter(function (instrument) {
				return !instrument.classList.contains('active');
			});
			if (!instrument.classList.contains('active')) {
				instrumentCard.forEach(function (instrument) {
					instrument.setAttribute('hidden', 'true');
				});
			}
		});
	};
	onlyOnce();
});

//on click instrument image slider
const imageSliderContainer = document.querySelector('.image-slider-container');
const sliderBtnUp = document.querySelector('#btn-up');

let sliderIndex = 0;
// imagesArray
const moreImages = [
	{
		name: 'yamaha211',
		picture1:
			'https://www.garylewisflutes.com/wp-content/uploads/2020/11/Bonneville3924-1.jpg',
		picture2:
			'https://res.cloudinary.com/flute-specialists-inc/images/f_auto,q_auto/w_500,h_298,c_fill,g_auto/v1586819476/Armstrong-80N3663-Retake-1-1/Armstrong-80N3663-Retake-1-1-500x298.jpg',
		picture3: 'https://d3re0f381bckq9.cloudfront.net/3586509_flute_1600x1200.jpg',
		picture4: 'https://d3re0f381bckq9.cloudfront.net/3586509_flute_1600x1200.jpg',
	},
	{
		name: 'yamaha881',
		picture1:
			'https://www.garylewisflutes.com/wp-content/uploads/2020/11/Bonneville3924-1.jpg',
		picture2:
			'https://res.cloudinary.com/flute-specialists-inc/images/f_auto,q_auto/w_500,h_298,c_fill,g_auto/v1586819476/Armstrong-80N3663-Retake-1-1/Armstrong-80N3663-Retake-1-1-500x298.jpg',
		picture3: 'https://d3re0f381bckq9.cloudfront.net/3586509_flute_1600x1200.jpg',
		picture4: 'https://d3re0f381bckq9.cloudfront.net/3586509_flute_1600x1200.jpg',
	},
	{
		name: 'muramatsuheavy',
		picture1:
			'https://www.garylewisflutes.com/wp-content/uploads/2020/11/Bonneville3924-1.jpg',
		picture2:
			'https://res.cloudinary.com/flute-specialists-inc/images/f_auto,q_auto/w_500,h_298,c_fill,g_auto/v1586819476/Armstrong-80N3663-Retake-1-1/Armstrong-80N3663-Retake-1-1-500x298.jpg',
		picture3: 'https://d3re0f381bckq9.cloudfront.net/3586509_flute_1600x1200.jpg',
		picture4: 'https://d3re0f381bckq9.cloudfront.net/3586509_flute_1600x1200.jpg',
	},
	{
		name: 'sankyo84567',
		picture1:
			'https://www.garylewisflutes.com/wp-content/uploads/2020/11/Bonneville3924-1.jpg',
		picture2:
			'https://res.cloudinary.com/flute-specialists-inc/images/f_auto,q_auto/w_500,h_298,c_fill,g_auto/v1586819476/Armstrong-80N3663-Retake-1-1/Armstrong-80N3663-Retake-1-1-500x298.jpg',
		picture3: 'https://d3re0f381bckq9.cloudfront.net/3586509_flute_1600x1200.jpg',
		picture4: 'https://d3re0f381bckq9.cloudfront.net/3586509_flute_1600x1200.jpg',
	},
];
moreImages.forEach(function (image) {
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
	//insertt html to the end of every iteration
	imageSliderContainer.insertAdjacentHTML('beforeend', htmlIstrumentImg);
});
const image = imageSliderContainer.querySelectorAll('img');

//Make slider move
sliderBtnUp.addEventListener('click', function () {
	sliderIndex++;
	changeImage();
});
const changeImage = function () {
	if (sliderIndex > image.length - 1) {
		sliderIndex = 0;
	} else if (sliderIndex < 0) {
		sliderIndex = image.length - 1;
	}
	if (window.screen.width < 700) {
		imageSliderContainer.style.transform = `translateY(${-sliderIndex * 60}vh)`;
	} else if (window.screen.width > 700) {
		imageSliderContainer.style.transform = `translateY(${-sliderIndex * 90}vh)`;
	}
};
