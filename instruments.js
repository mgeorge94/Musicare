//varialbes

const checkboxContainer = document.querySelector(".checkboxes-container");
const instrumentsContainer = document.querySelector(".grid")
const instrArr = []
let doubleHandleSlider = document.querySelector('.double-handle-slider');
let minValInput = document.querySelector('.min-value');
let maxValInput = document.querySelector('.max-value');

const searchBtn = document.querySelector(".search-btn")


// Instruments object aray

const allInstruments = [
    {
        type: 'Flaut',
        price: 2500,
        description: ' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://i.ebayimg.com/images/g/yVwAAOSwww1ceJOT/s-l640.jpg"
    },
    {
        type: 'Flaut',
        price: 589,
        description: ' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/336/1319/Quantz_765_6__67798.1539894738.jpg?c=2g"
    },
    {
        type: 'Flaut',
        price: 1000,
        description: ' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/199/2923/web-7Y0A0612__43924.1535649704.jpg?c=2"
    },
    {
        type: 'Flaut',
        price: 1000,
        description: ' Lorem, FLAUT dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/199/2923/web-7Y0A0612__43924.1535649704.jpg?c=2"
    },
    {
        type: 'Saxofon',
        price: 2500,
        description: ' Lorem, SAXOFON    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://d3re0f381bckq9.cloudfront.net/50704299_img-20200816-182545_1500x1125.jpg"
    },
    {
        type: 'Saxofon',
        price: 589,
        description: ' Lorem, SAXOFON    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://www.hornhospital.com/main/wp-content/uploads/king-54187.jpg"
    },
    {
        type: 'Saxofon',
        price: 1000,
        description: ' Lorem, SAXOFON    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://i.redd.it/1c5ik5drotv21.jpg"
    },
    {
        type: 'Saxofon',
        price: 1000,
        description: ' Lorem, SAXOFON    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://a1.amlimg.com/YjdjMTA1ZDZmZjJiYWNlZTBhZTFlYjYwYjY5NmM5ZTf0uzeChu6KVV7LiW2_mswTaHR0cDovL21lZGlhLmFkc2ltZy5jb20vNGI0MjBhMWZiODMxMzE0NzFkZDA1NGQ4MmY3MjAyNzdkN2I2NDM2NjFkZDYzOTlmZDhhNWNhNzhjNTAwN2ZiNi5qcGd8fHx8fHw3MDB4NDY2fGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg"
    },
    {
        type: 'Chitară',
        price: 1900,
        description: ' Lorem, CHITARĂ    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHtmVP1ck0_qZXxZfujLI57GqqwmU0yrUIw&usqp=CAU"
    },
    {
        type: 'Chitară',
        price: 567,
        description: ' Lorem, CHITARĂ    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://image.dhgate.com/0x0s/f2-albu-g10-M00-71-C4-rBVaWV4FqIaAGgtmAAL1H46kQvg382.jpg/original-body-solid-top-acoustic-guitar-with.jpg"
    },
    {
        type: 'Chitară',
        price: 100,
        description: ' Lorem, CHITARĂ    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "http://ikuzoguitars.com/wp-content/uploads/2015/01/Acoustic-Electric-Guitar-For-Sale.jpg"
    },
    {
        type: 'Chitară',
        price: 899,
        description: ' Lorem, CHITARĂ    dolor sit amet consectetur adipisicing elit. Perspiciatis odit quis aliquid iure ipsam numquam, exercitationem magni corporis esse hic aliquam minima accusantium labore a illo quasi assumenda. Ratione, dolores.',
        picture: "https://www.dhresource.com/0x0/f2/albu/g8/M01/D6/57/rBVaV1zGZtSAUm_eAAldhOyHrXQ014.jpg/green-flame-top-custom-shop-electric-guitar.jpg"
    },
];
//get instruments
function getInstruments() {
    allInstruments.forEach(function (instrument) {
    
        let price = instrument.price;
        let type = instrument.type;
        let description = instrument.description;
        let picture = instrument.picture;

        // HTML 

        let instrumentsHTML = `<div hidden instrumentType='${ type }'class="box instrument" price="${ price }">
        <img class="instrument-image" src="${ picture }" alt="${ picture }">
       <h6 class="price">${ price } lei</h6>
        <p class="instrument-description">${ description }</p>
        </div>`;
        // Insert the html to the end of every iteration
        instrumentsContainer.insertAdjacentHTML('beforeend', instrumentsHTML);
        //make instrument array
        instrArr.push(instrument.type)
        
    
        //filter dupicated instruments

        uniqueInstrArr = instrArr.filter(function (instrument, index) {
            return instrArr.indexOf(instrument) == index
        });



    });
   
};

getInstruments();




        //get min and max price
        const minPrice = Math.min(...allInstruments.map(instrument => instrument.price))
        const maxPrice = Math.max(...allInstruments.map(instrument => instrument.price))
        


//insert checkboxes into HTML

const makeCheckboxes = function (types) {
    checkboxContainer.innerHTML = types.map(function (type) {
        const htmlCheckbox =
            `<label class="checkbox-container">
            <input type="checkbox" filter="${type}"> ${type}<span class="checkmark"></span></label>`;
               
        return htmlCheckbox;
               
    }).join('');
};
makeCheckboxes(uniqueInstrArr);



//handle click events 
const instruments = Array.from(document.querySelectorAll("div.instrument"));
const clickHandler = function (event) {
    const filter = event.target.getAttribute('filter');
    if (!filter) return;
    const instruments = Array.from(document.querySelectorAll("div.instrument"));
    const instrumentsByType = instrumentsContainer.querySelectorAll(`div[instrumentType="${ filter }"]`)
    searchBtn.addEventListener("click", () => {
        if (event.target.checked) {
            let filtered = instruments.filter(function (instrument) {
                return instrument.getAttribute('instrumenttype')===filter
            })
            filtered.forEach(function(instruments){
    instruments.removeAttribute("hidden")
            })        
        }
        else {
            instrumentsByType.forEach(instrument => {
                instrument.setAttribute("hidden", 'true')
            });
        };
        grid.style.display='flex'
        hideNav();
        pageScroll();
    })
};

document.documentElement.addEventListener("click", clickHandler, false);

    
  

const sliderFunction =function() {
	noUiSlider.create(doubleHandleSlider, {
		start: [ minPrice,maxPrice],
		connect: true,
		tooltip:0,
		step: 10,
		range: {
			'min': [minPrice],
			'max': [maxPrice]
		},
		format: {
			to: function(value) {
				return value;
			},
			from: function(value) {
				return value;
			}
		},
      
	});
	
	doubleHandleSlider.noUiSlider.on('change', function( values, handle ) { 

		var val = values[handle]; // 0 or 1
		
		if(handle) {
			maxValInput.value = Math.round(val) ;
		} else {
            minValInput.value = Math.round(val);
		}
	});

        minValInput.addEventListener('change', function () {
            doubleHandleSlider.noUiSlider.set([this.value, null]
               
            );
    });
	
        maxValInput.addEventListener('change', function () {
    
	doubleHandleSlider.noUiSlider.set([null, this.value]);
        });
      
};
sliderFunction();

doubleHandleSlider.addEventListener("click", () => {
    let minWantedPrice = Math.min(...doubleHandleSlider.noUiSlider.get([0, null]));
    let maxWantedPrice = Math.max(...doubleHandleSlider.noUiSlider.get([null, 1]));

    //filterByPrice
    // searchBtn.addEventListener("click", function () {
    //     const priceFilter = function () {
    //         allInstruments.forEach(function (instrument) {
                
    //             if (instrument.price <= maxWantedPrice && instrument.price >= minWantedPrice) {
    //                 instruments.forEach(function (instrument) {
    //                     instrument.removeAttribute("hidden")
    //                     console.log("instrument");
    //                 })
                        
                        
                  
    //             } else {
    //               return
                        
    //             }
               
                
    //        })
            
    //     };
    //     priceFilter();
    //     grid.style.display='flex'
    //     hideNav();
    //     pageScroll();
    // })

    
})

