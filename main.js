


//!show navigation
let index = 1;
const faqContent = document.querySelector('.container-faq ');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const openBtn = document.getElementById('open');
const nav = document.querySelectorAll(".nav");
const seeInstruments = document.querySelector('.see-instruments');
const grid = document.querySelector(".grid")
const hideNav = ()=> nav.forEach(navElement => navElement.classList.remove('visible'))

openBtn.addEventListener("click", () => {
    nav.forEach(navElement => navElement.classList.add('visible'));
    faqContent.style.display = 'none';
    aboutUsContainer.style.display = 'none';
    newsContent.style.display = "none";
    instrOptBkg.classList.remove("active")
    instrOptContainer.classList.remove("active")
    grid.style.display='none'
})

content.addEventListener("click", () => {
    hideNav();
    aboutUsContainer.style.display = 'none';
})

//! panels

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener("mouseenter", () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
   
    const containerPannels = document.querySelector('.container-panel').addEventListener("mouseleave", () => {
        removeActiveClasses()
    })  
})
function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

function pageScroll() {
    window.scroll({
        top: 500,
        behavior: 'smooth'
    });
};
seeInstruments.addEventListener("click", () => {
    grid.classList.add("active");
    hideNav();
    pageScroll();
})
//!Slide-animation
const slide1 = document.querySelector('.content-slide.one');
const slide2 = document.querySelector('.content-slide.two');
const slide3 = document.querySelector('.content-slide.three');
const slide4 = document.querySelector('.content-slide.four');
const slide5 = document.querySelector('.content-slide.five');
const slide6 = document.querySelector('.content-slide.six');
const slide7 = document.querySelector('.content-slide.seven');
const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
const slideContainer = document.querySelector(".slide");

slideContainer.addEventListener('click', (event) => {
    event.stopPropagation();
})
const slideAnimation = function (panelClass, numClass) {
    
    document.getElementById(panelClass).addEventListener("click", () => {
        
        slideContainer.style.display = 'flex';
        document.querySelector(numClass).style.display = "block";
        
            pageScroll();
    }) 
    
};






const removeSlide = () => {
    
    panels.forEach(panel => {
        panel.addEventListener('click', (event) => {
            event.stopPropagation();
            slideContainer.style.display = 'none';
            slides.forEach(slide => {
                slide.style.display = "none"
                
            })
            
        });
    });
    content.addEventListener("click", ()=> {
        slides.forEach(slide => {
            slide.style.display ="none"
        })
    })
    openBtn.addEventListener("click", ()=> {
        slides.forEach(slide => {
            slide.style.display ="none"
        })
    })
    
};


removeSlide();
slideAnimation('flaut', '.one');
slideAnimation('oboi', '.two');
slideAnimation('vioara', '.three');
slideAnimation("sax", ".four")
slideAnimation("trompeta", ".five");
slideAnimation("trombone", ".six");
slideAnimation("acordeon", ".seven");



    //!FAQ

    
    
const faqButton = document.querySelector('.faq-button');
faqButton.addEventListener('click', () => {
    hideNav();

        faqContent.style.display = 'block';
        pageScroll();
      
})
    
const addFAQ = document.querySelectorAll('.faq');
addFAQ.forEach(FAQ => {
    FAQ.addEventListener("click", (event) => {
            event.stopPropagation();
            removeFAQ();
            FAQ.classList.add("active")
            
        });
    });
    content.addEventListener("click", (event) => {
        faqContent.style.display = 'none';
    })
    function removeFAQ() {
        addFAQ.forEach(faq => {
            faq.classList.remove("active")
        })
}
    

    //!contact form



const contactBtn = document.querySelector(".contact-btn");
const contactForm = document.querySelector(".form-container");
const form = document.getElementById("form");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message")
let isValid = false;

function showForm() {
    
    contactBtn.addEventListener("click", ()=>{
        contactForm.style.display = "flex"
        hideNav();
       pageScroll();
    })
}

content.addEventListener("click", () => {
    contactForm.style.display = 'none';
})
showForm();
contactForm.addEventListener("click", (event) => {
    event.stopPropagation();
})
form.addEventListener("submit", processFormData);
function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = "Vă rugăm să completați toate spațiile de mai sus"
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
    } else if (isValid) {
        message.textContent = "Mulțumim pentru interes. Vă vorm răspunde în cel mai scurt timp posibil"
        message.style.color = "#bebebe";
        messageContainer.style.borderColor = "#bebebe";
    }
}
    function storeFormData() {
        const user = {
            name: form.name.value,
            email: form.email.value,
            instrument: form.instrument.value,
            cerere:form.cerere.value
        };
        console.log(user);
};
    

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
const btnDown= document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
let activeSlideIndex = 0;
const screenWidth = window.screen.width;
if (screenWidth < 700) {
    slideLeft.style.top = `-${ (slidesLength - 1) * 60 }vh`
} else if (screenWidth > 700){
    slideLeft.style.top = `-${ (slidesLength - 1) * 90 }vh`
}

btnDown.addEventListener("click", ()=>changeSlide('up'))
const changeSlide = (direction) => {
    const sliderHeight = aboutUsContainer.clientHeight
    if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        } 
        
    } else if (direction === "up"){
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        } 
    }
    slideRight.style.transform = `translateY(-${ activeSlideIndex * sliderHeight }px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
aboutBtn.addEventListener("click", () => {
    hideNav();
    
    aboutUsContainer.style.display = 'flex';
    pageScroll();
})
aboutUsContainer.addEventListener("click", (event) => {
    event.stopPropagation();
    
})


//!NEWS
    
const newsBtn = document.querySelector('.news-btn');
const newsContent = document.querySelector('.card-container');
newsBtn.addEventListener("click", () => {
    hideNav();
    pageScroll();
   
    newsContent.style.display = "block";
    
})
content.addEventListener('click', () => {
    newsContent.style.display = "none";
})
newsContent.addEventListener("click", (event)=>{
    event.stopPropagation();
})
 
//!INSTRUMENTE
const instrOptBkg = document.querySelector(".instr-options-background");
const instrOptContainer =document.querySelector(".instr-options-container")
const instrBtn = document.querySelector(".instruments-btn")
const cautaBtn = document.querySelector(".filter") 
instrBtn.addEventListener("click", ()=>{
    instrOptBkg.classList.add("active")
    instrOptContainer.classList.add("active")
})



if (screenWidth < 700) {
    cautaBtn.addEventListener("click", () => { 
        
        hideNav();
        document.querySelector(".filter-tab").classList.add("visible")
        console.log("clicked small screen");
        
    })  
}
else  if (screenWidth > 700) {
    cautaBtn.addEventListener("click", () => { 
        nav.forEach(navElement => navElement.classList.add('visible'));
        document.querySelector(".filter-tab").classList.add("visible")
    })
}
container.addEventListener("click", () => {
    document.querySelector(".filter-tab").classList.remove("visible")
})

//! FILTER INSTRUMENTS


let doubleHandleSlider = document.querySelector('.double-handle-slider');
let minValInput = document.querySelector('.min-value');
let maxValInput = document.querySelector('.max-value');

const instruments = Array.from(document.querySelectorAll(".instrument"));

const searchBtn = document.querySelector(".search-btn")
const getInstrumentType = function () {

    let instrumentType = instruments.map(function (type) {
        return type.getAttribute('instrumentType');
    })
    return instrumentType.filter(function (type, index) {
        return instrumentType.indexOf(type) === index;
    })
}



const filterTab = document.querySelector(".checkboxes-container");
const renderChecklist = function (types) {
    filterTab.innerHTML = types.map(function (type) {
        const htmlCheckbox =
            `<label class="checkbox-container">
            <input type="checkbox" filter="${type}"> ${type}<span class="checkmark"></span></label>`;
       
        return htmlCheckbox;
       
    }).join('');
};
const types = getInstrumentType();

renderChecklist(types);


const clickHandler = function (event) {
    const filter = event.target.getAttribute('filter');
    if (!filter) return;
   const grid = document.querySelector(".grid")
    const instrumentsByType = grid.querySelectorAll(`div[instrumentType="${ filter }"]`)
    searchBtn.addEventListener("click", () => {
        if (event.target.checked) {
            let filtered = instruments.filter(function (instrument) {
                return instrument.getAttribute('instrumentType')===filter
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

(function (price) {
  
    return Number(price.innerHTML);
})


const prices = Array.from(document.querySelectorAll('.instrument>h6'));
let priceList = prices.map(function (price) {
    price.setAttribute('price',`${Number(price.innerHTML)}`)
    return Number(price.innerHTML);
})

const priceAttribute = function () {
    for (let j = 0; j < priceAtr.length; j++){
        priceAtr[j].setAttribute('price', `${curr}`)
   
    for (let i = 0; i < priceList.length; i++){
        const curr = priceList[i];
        let priceAtr = Array.from(document.querySelectorAll(".instrument"))
        
    }
       
    }
}
priceAttribute();
//////////////////////////////

// const renderChecklist = function (types) {
//     filterTab.innerHTML = types.map(function (type) {
//         const htmlCheckbox =
//             `<label class="checkbox-container">
//             <input type="checkbox" filter="${type}"> ${type}<span class="checkmark"></span></label>`;
       
//         return htmlCheckbox;
//     }).join('');

    ////////////////////////////////////

const maxPrice = Math.max(...priceList);
const minPrice = Math.min(...priceList)





const sliderFunction =function() {
	noUiSlider.create(doubleHandleSlider, {
		start: [ minPrice, maxPrice],
		connect: true,
		tooltips:false,
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
    let priceRange = prices.filter(function (price) {
     return  price.getAttribute("price")>minWantedPrice &&  price.getAttribute("price")<maxWantedPrice
    })
    console.log(priceRange);
})



//! Testimonials




    const tesimonialContainer = document.querySelector(".testimonial-container")
    const testimonial = document.querySelector(".testimonial")
    const userImage = document.querySelector(".user-image")
    const username = document.querySelector(".username")
    const role = document.querySelector(".role")

    const testimoniale = [
        {
            name: 'Georgiana Mihailă',
            position: 'flautist',
            photo: 'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/56487413_2257920850897455_2596757585306583040_o.jpg?_nc_cat=111&ccb=3&_nc_sid=174925&_nc_eui2=AeHQLgF2iYQUE1AVuFSpuSlmpYSAi8A5MDClhICLwDkwMLanwDEbD588NgVJmMJUNOWF1yr5ld1Em3GOGH7pfw1B&_nc_ohc=YCkuLFQuHXUAX9ZAg_6&_nc_ht=scontent-otp1-1.xx&oh=3052387e9b6c4d34bd89457751b6481e&oe=60571C69',
            text:
                '  Dicta quam, accusamus obcaecati quas culpa sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo atque error similique rerum quae iure explicabo. Asperiores quos architecto ipsam quasi doloremque. Laborum incidunt pariatur eveniet velit placeat quaerat deserunt, debitis molestiae doloremque harum et ipsum in aperiam fugiat recusandae illo voluptatem, blanditiis, qui ex vero!!'
    
        },
        {
            name: 'Oprica Petru Stefan',
            position: 'trombonist',
            photo: 'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/53706662_2368643599853041_3053857021745954816_o.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHcfZ7-VAYL5qMxftEWqNTbDAJ36Rx_610MAnfpHH_rXeC9ViGVkRog7TzTygM6xClP5F4m28JVFYusBEX1BX9X&_nc_ohc=qaGJshYdY6QAX_vzWXJ&_nc_ht=scontent-otp1-1.xx&oh=16bd8b100078c910cc355fde334a8aab&oe=60575427',
            text:
                ' Architecto, nesciunt praesentium odio corporis sit nisi maiores possimus! Reprehenderit cum eaque odio saepe explicabo? Temporibus, numquam optio. Voluptates nostrum, debitis quo nihil magni commodi natus ducimus velit corporis ea perspiciatis voluptas.!!'
    
        },
        {
            name: 'Ciprian Oravet',
            position: 'violonist',
            photo: 'https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/10476574_783316538367529_491711609418754151_o.jpg?_nc_cat=101&ccb=3&_nc_sid=174925&_nc_eui2=AeEn0iqocPSNMZ_zR-cC8HeisSn96YX9xOixKf3phf3E6CIPq2IjUZwIXOAPrSgUAohsxaNaVEsC7Li7v9Oa7ong&_nc_ohc=gjGEv6vZXvwAX8A5s1O&_nc_ht=scontent-otp1-1.xx&oh=606c0353859eab2cf3c16c250754de68&oe=60590235',
            text:
                ' Ipsuminum dolores sitaro, ametist consectetur adipisicing elit. Iure, excepturi. Voluptatibus tempore dolorem voluptatem et inventore iusto error perferendis obcaecati beatae velit dolorum, asperiores aperiam, sapiente voluptatum, perspiciatis labore praesentium quam maiores. '
    
        }
    ]
    
    function updateTestimonial() {
        const { name, position, photo, text } = testimoniale[index];
        testimonial.innerHTML = text
        userImage.src = photo;
        username.innerHTML = name;
        role.innerHTML = position;
        index++;
        if (index > testimoniale.length - 1) {
            index = 0;
        }
    }
    setInterval(updateTestimonial, 10000)











