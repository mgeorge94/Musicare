//panels

const panels = document.querySelectorAll('.panel')
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


//cards-pop-up
// document.getElementById('oboi').addEventListener("click", function () {
//         document.querySelector(".background-popup").style.display = 'flex'
// })
// document.querySelector('.background-popup').addEventListener("click", () => {
//     document.querySelector('.background-popup').style.display = "none";
// })





// removeStuff('#flaut');
        // removeStuff('#vioara');
        // removeStuff('#sax');
        // removeStuff('#trompeta');
        // removeStuff('#trombone');
        // removeStuff('#acordeon');

// let removeStuff;
const slideAnimation = function (panelClass, numClass) {
   
    
    document.getElementById(panelClass).addEventListener("click", () => {
        
            //todo: clean stuff befroe
            removeSlide();
            document.querySelector('.slide').style.display !== 'none' && document.querySelector(".content-slide").style.display !== "none"
            document.querySelector('.slide').style.display = 'flex';
            document.querySelector(numClass).style.display = "block"
            console.log('show slide');
        
        

            function pageScroll() {
                window.scroll({
                    top: 550,
                    behavior: 'smooth'

                });
            };
            pageScroll();
        }) 
};


const slide =document.querySelectorAll('.panel');
const removeSlide = () => {
    slide.forEach(panel => {
        panel.addEventListener('click', () => {
            document.querySelector('.slide').style.display = 'none';
            document.querySelector(".content-slide").style.display = "none";
            console.log("hide slide");
        })
    })
}

slideAnimation('oboi', '.two');
slideAnimation('flaut', '.one');
slideAnimation('vioara', '.three')
slideAnimation("sax", ".four")
slideAnimation("trompeta", ".five")
slideAnimation("trombone", ".six")
slideAnimation("acordeon", ".seven")



   



    // Testimonials


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
    let index = 1;
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

    



