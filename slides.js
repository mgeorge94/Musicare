//! Split landing page
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const landingPageContainer = document.querySelector('.landingPage-container');
const leftLandingBtn = document.querySelector('.btn-split-left');
const rightLandingBtn = document.querySelector('.btn-split-right');
const panelsContainer = document.querySelector('.container-panel');

left.addEventListener('mouseenter', () => {
  landingPageContainer.classList.add('hover-left');
});
left.addEventListener('mouseleave', () => {
  landingPageContainer.classList.remove('hover-left');
});
right.addEventListener('mouseenter', () => {
  landingPageContainer.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
  landingPageContainer.classList.remove('hover-right');
});
const removeDualLandingPage = function () {
  left.style.animation = 'leftHide .8s ease-in forwards';
  right.style.animation = 'rightHide 1s ease-in forwards';
  landingPageContainer.style.animation = 'hideLandingContainer 2s ease-in forwards';
};
leftLandingBtn.addEventListener('click', removeDualLandingPage);
rightLandingBtn.addEventListener('click', removeDualLandingPage);

slideContainer = document.querySelector('.container-slide');
//! Website pentru Instrumente reparate

const repairInstrumentWebsite = function () {
  //fixed instruments slides Object Array
  const fixedInstrumentsSlides = [
    {
      type: 'Flaut',
      tech: 'Alexandru Badea',
      techPic:
        'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/120116923_3878302778864802_8385313668396921367_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeF6RJKmEU76o5KvWE6Yf-T767_EbyLMw6nrv8RvIszDqXGIqpPELLksvULSXIPD6-qasZ3sDPK7-xhRw6ptmyct&_nc_ohc=rjTz33whsssAX8pxXi4&_nc_ht=scontent-otp1-1.xx&oh=739a73ad843f33fe57787b1a6a57a8ef&oe=6072FF00',
      about: `'Doloribus, quaerat. Accusantium provident architecto earum
        aliquid harum quis molestias iusto quaerat qui ex iure
        similique ipsa amet facilis consequuntur neque sunt nihil
        officia temporibus! Dicta quam, accusamus obcaecati quas culpa
        sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo'`,
      fixingPic1:
        'https://londonmusicco.com/wp-content/uploads/2019/12/London-Music-Co-Flute-Repair-Page-Flute-Repair-Image-01.jpg',
      experience: `quos architecto ipsam quasi doloremque. Laborum incidunt
        pariatur eveniet velit placeat quaerat deserunt, debitis
        molestiae doloremque harum et ipsum in aperiam fugiat
        recusandae illo voluptatem, blanditiis, qui ex vero`,
      fixingPic2: 'https://inhorn.files.wordpress.com/2014/08/20140805-121602-44162686.jpg',
      fixingPic3:
        'https://i1.wp.com/southfloridahorns.com/wp-content/uploads/2020/05/IMAG0005_exp_30-scaled.jpg?fit=2560%2C1505&ssl=1',
    },
    {
      type: 'Chitară',
      tech: 'Andrei Tiberiu Maria',
      techPic: 'https://smiley.ro/wp-content/uploads/2014/02/smiley_bio.jpg',
      about: `'Doloribus, quaerat. Accusantium provident architecto earum
        aliquid harum quis molestias iusto quaerat qui ex iure
        similique ipsa amet facilis consequuntur neque sunt nihil
        officia temporibus! Dicta quam, accusamus obcaecati quas culpa
        sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo'`,
      fixingPic1: 'http://steellemon.com/files/2012/06/broken-guitar-strings.png',
      experience: `quos architecto ipsam quasi doloremque. Laborum incidunt
        pariatur eveniet velit placeat quaerat deserunt, debitis
        molestiae doloremque harum et ipsum in aperiam fugiat
        recusandae illo voluptatem, blanditiis, qui ex vero`,
      fixingPic2: 'https://tribeza.com/wp-content/uploads/2016/05/FPO_Tribeza_guitar_smash.jpg',
      fixingPic3:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9509e16-63db-457f-ab1c-3ef059b8013c/d2zzfz9-21d6715a-6576-4cf8-9862-a19bd9df66f2.jpg/v1/fill/w_800,h_539,q_75,strp/broken_guitar_by_reening_d2zzfz9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MzkiLCJwYXRoIjoiXC9mXC9jOTUwOWUxNi02M2RiLTQ1N2YtYWIxYy0zZWYwNTliODAxM2NcL2QyenpmejktMjFkNjcxNWEtNjU3Ni00Y2Y4LTk4NjItYTE5YmQ5ZGY2NmYyLmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eTbcL9u9AgrFc6-wvfIMy6Az_8BkQhlhV6WjR8xzRp0',
    },
    {
      type: 'Oboi',
      tech: 'Corneliu Vadim Tudor',
      techPic:
        'https://media.cancan.ro/unsafe/750x750/smart/filters:contrast(5):quality(80)/https://tacataca.prosport.ro/wp-content/uploads/2020/05/vadim_tudor-1-1280x720.jpg',
      about: `'Doloribus, quaerat. Accusantium provident architecto earum
        aliquid harum quis molestias iusto quaerat qui ex iure
        similique ipsa amet facilis consequuntur neque sunt nihil
        officia temporibus! Dicta quam, accusamus obcaecati quas culpa
        sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo'`,
      fixingPic1: 'http://aaronlakota.com/wp-content/uploads/2016/08/img_1717-1.jpg',

      experience: `quos architecto ipsam quasi doloremque. Laborum incidunt
        pariatur eveniet velit placeat quaerat deserunt, debitis
        molestiae doloremque harum et ipsum in aperiam fugiat
        recusandae illo voluptatem, blanditiis, qui ex vero`,
      fixingPic2: 'https://www.onksws.com/wp-content/uploads/2011/06/Before-e1537725052673-1030x989.jpg',
      fixingPic3:
        'https://images.squarespace-cdn.com/content/v1/5d0566253dce700001855bff/1561228445281-T0NP4O1VUUFBGRF0BASB/ke17ZwdGBToddI8pDm48kJRYd4FYIcEcrh_msEIEbkZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT1ZImrvDdHZk_1-CVtB4IJW58HC3_EugqL3Iws8RTt8g0wU7-gbCzcJVB_xdsPuSg/P1000550.jpg?format=1500w',
    },
    {
      type: 'Vioară',
      tech: 'Ion Iliescu',
      techPic: 'https://oameniputereromania.org/wp-content/uploads/2020/08/ion-iliescu.jpg',
      about: `'Doloribus, quaerat. Accusantium provident architecto earum
        aliquid harum quis molestias iusto quaerat qui ex iure
        similique ipsa amet facilis consequuntur neque sunt nihil
        officia temporibus! Dicta quam, accusamus obcaecati quas culpa
        sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo'`,
      fixingPic1:
        'https://static.wixstatic.com/media/17269fc42fd4453fade5d36c1de03a66.jpg/v1/fill/w_602,h_480,al_c,q_80,usm_0.66_1.00_0.01/Fixing%20a%20Violin.webp',
      experience: `quos architecto ipsam quasi doloremque. Laborum incidunt
        pariatur eveniet velit placeat quaerat deserunt, debitis
        molestiae doloremque harum et ipsum in aperiam fugiat
        recusandae illo voluptatem, blanditiis, qui ex vero`,
      fixingPic2: 'https://trianglestrings.com/wp-content/uploads/2017/01/DSC_0248-1024x683.jpg',
      fixingPic3: 'https://i1.wp.com/violin-world.com/wp-content/uploads/2019/05/Violin-Repair.png?fit=1920%2C1080&ssl=1',
    },
    {
      type: 'Saxofon',
      tech: 'Mihai Bendeac',
      techPic:
        'https://media.bzi.ro/unsafe/1060x600/smart/filters:contrast(3):format(jpeg):blur(1):quality(80)/http://www.bzi.ro/wp-content/uploads/2020/11/mihai-bendeac.jpg',
      about: `'Doloribus, quaerat. Accusantium provident architecto earum
        aliquid harum quis molestias iusto quaerat qui ex iure
        similique ipsa amet facilis consequuntur neque sunt nihil
        officia temporibus! Dicta quam, accusamus obcaecati quas culpa
        sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo'`,
      fixingPic1: 'https://salisburymusic.files.wordpress.com/2012/02/tenorsaxrepair.jpg',
      experience: `quos architecto ipsam quasi doloremque. Laborum incidunt
        pariatur eveniet velit placeat quaerat deserunt, debitis
        molestiae doloremque harum et ipsum in aperiam fugiat
        recusandae illo voluptatem, blanditiis, qui ex vero`,
      fixingPic2: 'https://cdn.shopify.com/s/files/1/0028/7712/files/Repair_y_840x.jpg?v=1498483671',
      fixingPic3: 'https://www.ntdaily.com/wp-uploads/2018/04/IMG_4902.jpg',
    },
    {
      type: 'Trompetă',
      tech: 'Dana Budeanu',
      techPic: 'https://i.ytimg.com/vi/UpE_DwUrcs8/maxresdefault.jpg',
      about: `'Doloribus, quaerat. Accusantium provident architecto earum
        aliquid harum quis molestias iusto quaerat qui ex iure
        similique ipsa amet facilis consequuntur neque sunt nihil
        officia temporibus! Dicta quam, accusamus obcaecati quas culpa
        sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo'`,
      fixingPic1: 'https://ciomit.com/wp-content/uploads/2019/06/IMG_4553Edited-1024x768.jpg',
      experience: `quos architecto ipsam quasi doloremque. Laborum incidunt
        pariatur eveniet velit placeat quaerat deserunt, debitis
        molestiae doloremque harum et ipsum in aperiam fugiat
        recusandae illo voluptatem, blanditiis, qui ex vero`,
      fixingPic2:
        'https://images.squarespace-cdn.com/content/v1/5a8c5e9cb7411cfd6afc974e/1531857356054-K9NPR2TXWIHY776VE5RC/ke17ZwdGBToddI8pDm48kPOyYgnW7nyGjASOBc05s4cUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcmu9LPXh6MQ2js1S_zRc5FMg_8U215fhUVz0tlLN9nY9kaGBuGgADdJLkI-1Bdr5-/shutterstock_161569406+%281%29.jpg?format=2500w',
      fixingPic3: 'https://www.purtle.com/sites/default/files/images/smashed-trumpet.jpg',
    },
    {
      type: 'Trombon',
      tech: 'Dorian Popa',
      techPic:
        'https://static.monden.ro/wp-content/uploads/2021/02/Dorian-Popa-s%CC%A6i-a-fa%CC%86cut-publica%CC%86-Diploma-de-Bacalaureat-A-obt%CC%A6inut-o-nota%CC%86-impresionanta%CC%86.jpg',
      about: `'Doloribus, quaerat. Accusantium provident architecto earum
        aliquid harum quis molestias iusto quaerat qui ex iure
        similique ipsa amet facilis consequuntur neque sunt nihil
        officia temporibus! Dicta quam, accusamus obcaecati quas culpa
        sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo'`,
      fixingPic1: 'https://i.pinimg.com/originals/63/29/7e/63297e19b18cc0ce4943a2290a567c34.jpg',
      experience: `quos architecto ipsam quasi doloremque. Laborum incidunt
        pariatur eveniet velit placeat quaerat deserunt, debitis
        molestiae doloremque harum et ipsum in aperiam fugiat
        recusandae illo voluptatem, blanditiis, qui ex vero`,
      fixingPic2: 'http://folkmusic123.com/images/Trombone_fixing_1.jpg',
      fixingPic3: 'http://folkmusic123.com/images/Trombone_fixing_3.jpg',
    },
    {
      type: 'Acordeon',
      tech: 'Bidașcu Silvestru',
      techPic:
        'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/13083188_1183253418360175_165385587124781752_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGYJTKZfSo9C4kTsgzKz5xW_Snrw3Vyb9T9KevDdXJv1AGPNzf-Dkvtuo9iuox3Re315n0iuX8SwGERK0k-Uv5_&_nc_ohc=LpVS_wsUIJkAX_Wzm0y&_nc_ht=scontent-otp1-1.xx&oh=b1cba9ed03f8a4132ad424d905168cf7&oe=60759E44',
      about: `'Doloribus, quaerat. Accusantium provident architecto earum
        aliquid harum quis molestias iusto quaerat qui ex iure
        similique ipsa amet facilis consequuntur neque sunt nihil
        officia temporibus! Dicta quam, accusamus obcaecati quas culpa
        sed quo nemo. Provident quis, adipisci hic ipsum corrupti quo'`,
      fixingPic1: 'https://accordionuprising.files.wordpress.com/2017/02/repair.jpg',
      experience: `quos architecto ipsam quasi doloremque. Laborum incidunt
        pariatur eveniet velit placeat quaerat deserunt, debitis
        molestiae doloremque harum et ipsum in aperiam fugiat
        recusandae illo voluptatem, blanditiis, qui ex vero`,
      fixingPic2:
        'https://www.tornabuoniart.com/wp-content/uploads/2020/04/Arman-Accorde%CC%81on-1974-fisarmonica-rotta-incorporata-nel-cemento-in-cassa-di-legno-143x103x26-cm-Tornabuoni-Art.jpg',
      fixingPic3: 'http://georgewhitfield.co.uk/wp-content/uploads/2018/03/Recent-Galotta.jpg',
    },
  ];
  const fixedInstrumentsPanels = [
    {
      photo: '../resources/fixIt-panels/violin-panel.jpg',
      type: 'Vioară',
      name: 'Vioară',
    },
    {
      photo: '../resources/fixIt-panels/trumpet-panel.jpg',
      type: 'Trompetă',
      name: ' Trompetă',
    },
    {
      photo: '../resources/fixIt-panels/sax-panel.jpg',
      type: 'Saxofon',
      name: 'Saxofon',
    },
    {
      photo: '../resources/fixIt-panels/flute-panel.jpg',
      type: 'Flaut',
      name: 'Flaut',
    },
    // {
    //   photo: '../resources/fixIt-panels/trombone-panel.jpg',
    //   type: 'Trombon',
    //   name: 'Trombon',
    // },
    {
      photo: '../resources/fixIt-panels/oboe-panel.jpg',
      type: 'Oboi',
      name: 'Oboi',
    },
    {
      photo: '../resources/fixIt-panels/guitar-panel.jpg',
      type: 'Chitară',
      name: 'Chitară',
    },
    {
      photo: '../resources/fixIt-panels/acordeon-panel.jpg',
      type: 'Acordeon',
      name: 'Acordeon',
    },
  ];
  //paint panels
  const paintPanels = () => {
    panelsContainer.innerHTML = '';
    fixedInstrumentsPanels.forEach(function (panel) {
      let type = panel.type;
      let name = panel.name;
      let photo = panel.photo;

      //insert html
      const pannelsHTML = ` <div data-instrumentType="${type}" class="panel" id="${name}"style="background-image:url('${photo}')">
      <h3>${name}</h3></div>`;

      // Insert the html to the end of every iteration
      panelsContainer.insertAdjacentHTML('beforeend', pannelsHTML);
    });
  };
  paintPanels();
  hoverOverPannels();
  const panels = document.querySelectorAll('.panel');

  //Showing instruments
  const paintFixedInstrumentSlides = function () {
    fixedInstrumentsSlides.forEach(function (slide) {
      let matchedFixedSlides = [];

      panels.forEach(function (panel) {
        panel.addEventListener('click', () => {
          //if instrument type match, create html

          if (panel.dataset.instrumenttype === slide.type) {
            matchedFixedSlides.push(slide.name);
            matchedFixedSlides.forEach(function () {
              let type = slide.type;
              let tech = slide.tech;
              let techPic = slide.techPic;
              let about = slide.about;
              let pic1 = slide.fixingPic1;
              let pic2 = slide.fixingPic2;
              let pic3 = slide.fixingPic3;
              let experience = slide.experience;

              // html

              let leftSlideHTML = document.createElement('div');
              leftSlideHTML.setAttribute('class', 'content-slide');
              leftSlideHTML.classList.add('repair');
              leftSlideHTML.setAttribute('data-instrumentType', '${type}');
              leftSlideHTML.innerHTML = `
              <div class = "slide-overlay"></div>
               <img  class="technician" src="${techPic}";/>
                      <h3 class="technician-name"> Tehnician : ${tech}</h3>
                      
                      <img class="repair-image one" src="${pic1}"	/>
                      
                      <img class="repair-image two" src="${pic2}"	/>
                      <img class="repair-image three" src="${pic3}"	/>
                      <div class="text-content">
                      <p> ${about}</p>
                      <h4>Experiență profesională: </h4>
                      <p class ="experience">${experience}</p>
                      </div>
  
                      `;
              //insert html to the end of every iteration

              while (slideContainer.firstChild) {
                slideContainer.removeChild(slideContainer.firstChild);
              }
              slideContainer.appendChild(leftSlideHTML);

              const slideContent = document.querySelector('.content-slide');
              //display slide
              pageScroll(500);
              slideContent.style.display = 'block';
              slideContainer.style.display = 'flex';
              document;
            });
            //make image apear on scroll

            const onScrollImages = document.querySelectorAll('.repair-image');

            const showPicturesOnScroll = () => {
              const trigger = (window.innerHeight / 5) * 4;

              onScrollImages.forEach((image) => {
                const testionialPosition = testimonialContainer.getBoundingClientRect().top;
                if (testionialPosition < trigger) {
                  image.style.display = 'flex';
                }
              });
            };
            window.addEventListener('scroll', showPicturesOnScroll);
          } else if (panel.dataset.instrumenttype !== slide.name) {
            if (matchedFixedSlides.indexOf(slide.name) !== -1) {
              matchedFixedSlides.splice(matchedFixedSlides.indexOf(slide.name), 1);
            }
          }
          hideGrid();
          hideCheckoutForm();
          resetGridToPosition();
          showTestimonials();

          hideContactForm();
        });
      });
    });
  };
  paintFixedInstrumentSlides();
};

//!Website pentru cumparat de instrumentele
const buyInstrumentWebsite = function () {
  //toBuy instrument Object array

  const toBuyInstrumentsSlides = [
    {
      type: 'Flaut',
      description: `blanditiis ut obcaecati quos, repellendus illum expedita
      iusto tempora velit nobis commodi id. Dolorem vero
      suscipit porro laudantium, dolorum maxime commodi
      blanditiis ipsam facilis pariatur est laboriosam mollitia
      atque quisquam numquam accusantium iusto, eos omnis dolore
      aliquid, eveniet soluta consequuntur nemo. Modi eligendi
      unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! Corporis eveniet enim labore cum autem velit earum
      libero quam sit omnis aspernatur amet, molestiae corrupti
      voluptatum ullam. Ducimus voluptates praesentium quos
      facere enim facilis cumque pariatur vero aliquid illum quo
      numquam commodi ut magnam, laudantium rem tenetur
      dignissimos quae. Expedita corporis officia ullam suscipit
      exercitationem earum iste ab eaque commodi perspiciatis,
      amet fuga velit deleniti.`,
      picture:
        'https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?cs=srgb&dl=pexels-teddy-yang-2254140.jpg&fm=jpg',
      advantages1: `blanditiis ut obcaecatd`,
      advantages2: `unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! `,
      advantages3: `Soluta cumque amet aliquam aut alias voluptatum
      deleniti  vero`,
      advantages4: `Corporis eveniet enim labore cum autem v
      voluptatum ullam. `,
      disadvantages1: `Expedita corporis officia ullam suscipit
      exercitationeis,`,
      disadvantages2: `Dolorem vero
      suscios omnis dolore`,
    },
    {
      type: 'Oboi',
      description: `blanditiis ut obcaecati quos, repellendus illum expedita
      iusto tempora velit nobis commodi id. Dolorem vero
      suscipit porro laudantium, dolorum maxime commodi
      blanditiis ipsam facilis pariatur est laboriosam mollitia
      atque quisquam numquam accusantium iusto, eos omnis dolore
      aliquid, eveniet soluta consequuntur nemo. Modi eligendi
      unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! Corporis eveniet enim labore cum autem velit earum
      libero quam sit omnis aspernatur amet, molestiae corrupti
      voluptatum ullam. Ducimus voluptates praesentium quos
      facere enim facilis cumque pariatur vero aliquid illum quo
      numquam commodi ut magnam, laudantium rem tenetur
      dignissimos quae. Expedita corporis officia ullam suscipit
      exercitationem earum iste ab eaque commodi perspiciatis,
      amet fuga velit deleniti.`,
      picture: 'https://i.pinimg.com/originals/e1/69/74/e16974ae56fdaa3f65ea1dbca5e79677.jpg',
      advantages1: `blanditiis ut obcaecatd`,
      advantages2: `unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! `,
      advantages3: `Soluta cumque amet aliquam aut alias voluptatum
      deleniti  vero`,
      advantages4: `Corporis eveniet enim labore cum autem v
      voluptatum ullam. `,
      disadvantages1: `Expedita corporis officia ullam suscipit
      exercitationeis,`,
      disadvantages2: `Dolorem vero
      suscios omnis dolore`,
    },
    {
      type: 'Vioară',
      description: `blanditiis ut obcaecati quos, repellendus illum expedita
      iusto tempora velit nobis commodi id. Dolorem vero
      suscipit porro laudantium, dolorum maxime commodi
      blanditiis ipsam facilis pariatur est laboriosam mollitia
      atque quisquam numquam accusantium iusto, eos omnis dolore
      aliquid, eveniet soluta consequuntur nemo. Modi eligendi
      unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! Corporis eveniet enim labore cum autem velit earum
      libero quam sit omnis aspernatur amet, molestiae corrupti
      voluptatum ullam. Ducimus voluptates praesentium quos
      facere enim facilis cumque pariatur vero aliquid illum quo
      numquam commodi ut magnam, laudantium rem tenetur
      dignissimos quae. Expedita corporis officia ullam suscipit
      exercitationem earum iste ab eaque commodi perspiciatis,
      amet fuga velit deleniti.`,
      picture: 'https://c4.wallpaperflare.com/wallpaper/682/819/765/violin-wallpaper-preview.jpg',
      advantages1: `blanditiis ut obcaecatd`,
      advantages2: `unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! `,
      advantages3: `Soluta cumque amet aliquam aut alias voluptatum
      deleniti  vero`,
      advantages4: `Corporis eveniet enim labore cum autem v
      voluptatum ullam. `,
      disadvantages1: `Expedita corporis officia ullam suscipit
      exercitationeis,`,
      disadvantages2: `Dolorem vero
      suscios omnis dolore`,
    },
    {
      type: 'Saxofon',
      description: `blanditiis ut obcaecati quos, repellendus illum expedita
      iusto tempora velit nobis commodi id. Dolorem vero
      suscipit porro laudantium, dolorum maxime commodi
      blanditiis ipsam facilis pariatur est laboriosam mollitia
      atque quisquam numquam accusantium iusto, eos omnis dolore
      aliquid, eveniet soluta consequuntur nemo. Modi eligendi
      unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! Corporis eveniet enim labore cum autem velit earum
      libero quam sit omnis aspernatur amet, molestiae corrupti
      voluptatum ullam. Ducimus voluptates praesentium quos
      facere enim facilis cumque pariatur vero aliquid illum quo
      numquam commodi ut magnam, laudantium rem tenetur
      dignissimos quae. Expedita corporis officia ullam suscipit
      exercitationem earum iste ab eaque commodi perspiciatis,
      amet fuga velit deleniti.`,
      picture:
        'https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?cs=srgb&dl=pexels-pixabay-45243.jpg&fm=jpg',
      advantages1: `blanditiis ut obcaecatd`,
      advantages2: `unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! `,
      advantages3: `Soluta cumque amet aliquam aut alias voluptatum
      deleniti  vero`,
      advantages4: `Corporis eveniet enim labore cum autem v
      voluptatum ullam. `,
      disadvantages1: `Expedita corporis officia ullam suscipit
      exercitationeis,`,
      disadvantages2: `Dolorem vero
      suscios omnis dolore`,
    },
    {
      type: 'Trompetă',
      description: `blanditiis ut obcaecati quos, repellendus illum expedita
      iusto tempora velit nobis commodi id. Dolorem vero
      suscipit porro laudantium, dolorum maxime commodi
      blanditiis ipsam facilis pariatur est laboriosam mollitia
      atque quisquam numquam accusantium iusto, eos omnis dolore
      aliquid, eveniet soluta consequuntur nemo. Modi eligendi
      unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! Corporis eveniet enim labore cum autem velit earum
      libero quam sit omnis aspernatur amet, molestiae corrupti
      voluptatum ullam. Ducimus voluptates praesentium quos
      facere enim facilis cumque pariatur vero aliquid illum quo
      numquam commodi ut magnam, laudantium rem tenetur
      dignissimos quae. Expedita corporis officia ullam suscipit
      exercitationem earum iste ab eaque commodi perspiciatis,
      amet fuga velit deleniti.`,
      picture: 'https://longbeachsymphony.org/shared/2015/10/Golden-Trumpet-on-Black-Background-Stock-image.jpg',
      advantages1: `blanditiis ut obcaecatd`,
      advantages2: `unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! `,
      advantages3: `Soluta cumque amet aliquam aut alias voluptatum
      deleniti  vero`,
      advantages4: `Corporis eveniet enim labore cum autem v
      voluptatum ullam. `,
      disadvantages1: `Expedita corporis officia ullam suscipit
      exercitationeis,`,
      disadvantages2: `Dolorem vero
      suscios omnis dolore`,
    },
    {
      type: 'Trombon',
      description: `blanditiis ut obcaecati quos, repellendus illum expedita
      iusto tempora velit nobis commodi id. Dolorem vero
      suscipit porro laudantium, dolorum maxime commodi
      blanditiis ipsam facilis pariatur est laboriosam mollitia
      atque quisquam numquam accusantium iusto, eos omnis dolore
      aliquid, eveniet soluta consequuntur nemo. Modi eligendi
      unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! Corporis eveniet enim labore cum autem velit earum
      libero quam sit omnis aspernatur amet, molestiae corrupti
      voluptatum ullam. Ducimus voluptates praesentium quos
      facere enim facilis cumque pariatur vero aliquid illum quo
      numquam commodi ut magnam, laudantium rem tenetur
      dignissimos quae. Expedita corporis officia ullam suscipit
      exercitationem earum iste ab eaque commodi perspiciatis,
      amet fuga velit deleniti.`,
      picture: 'https://i.pinimg.com/originals/8a/19/24/8a1924f2a02b849a2ab836dc41652237.jpg',
      advantages1: `blanditiis ut obcaecatd`,
      advantages2: `unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! `,
      advantages3: `Soluta cumque amet aliquam aut alias voluptatum
      deleniti  vero`,
      advantages4: `Corporis eveniet enim labore cum autem v
      voluptatum ullam. `,
      disadvantages1: `Expedita corporis officia ullam suscipit
      exercitationeis,`,
      disadvantages2: `Dolorem vero
      suscios omnis dolore`,
    },
    {
      type: 'Acordeon',
      description: `blanditiis ut obcaecati quos, repellendus illum expedita
      iusto tempora velit nobis commodi id. Dolorem vero
      suscipit porro laudantium, dolorum maxime commodi
      blanditiis ipsam facilis pariatur est laboriosam mollitia
      atque quisquam numquam accusantium iusto, eos omnis dolore
      aliquid, eveniet soluta consequuntur nemo. Modi eligendi
      unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! Corporis eveniet enim labore cum autem velit earum
      libero quam sit omnis aspernatur amet, molestiae corrupti
      voluptatum ullam. Ducimus voluptates praesentium quos
      facere enim facilis cumque pariatur vero aliquid illum quo
      numquam commodi ut magnam, laudantium rem tenetur
      dignissimos quae. Expedita corporis officia ullam suscipit
      exercitationem earum iste ab eaque commodi perspiciatis,
      amet fuga velit deleniti.`,
      picture: 'https://img3.goodfon.com/wallpaper/nbig/c/cc/msica-de-acorden-acorden.jpg',
      advantages1: `blanditiis ut obcaecatd`,
      advantages2: `unde aliquam mollitia illum, tenetur ea velit eum maiores
      eius! `,
      advantages3: `Soluta cumque amet aliquam aut alias voluptatum
      deleniti  vero`,
      advantages4: `Corporis eveniet enim labore cum autem v
      voluptatum ullam. `,
      disadvantages1: `Expedita corporis officia ullam suscipit
      exercitationeis,`,
      disadvantages2: `Dolorem vero
      suscios omnis dolore`,
    },
  ];

  const paintToBuyInstrumentSlides = function () {
    const toBuyInstrumentsPanels = [
      {
        photo: '../resources/buyIt-panels/vioara-panel.jpg',
        type: 'Vioară',
        name: 'Vioară',
      },
      {
        photo: '../resources/buyIt-panels/trompeta-panel.jpg',
        type: 'Trompetă',
        name: ' Trompetă',
      },
      {
        photo: '../resources/buyIt-panels/sax-panel.jpg',
        type: 'Saxofon',
        name: 'Saxofon',
      },
      // {
      //   photo: '../resources/buyIt-panels/corn-panel.jpg',
      //   type: 'percution',
      //   name: 'Percuție',
      // },
      {
        photo: '../resources/buyIt-panels/trombone-panel.webp',
        type: 'Trombon',
        name: 'Trombon',
      },
      // {
      //   photo: '../resources/buyIt-panels/oboe-panel.jpg',
      //   type: 'Oboi',
      //   name: 'Oboi',
      // },
      {
        photo: '../resources/buyIt-panels/flute-panel.jpg',
        type: 'Flaut',
        name: 'Flaut',
      },
      {
        photo: '../resources/buyIt-panels/acordeon-panel.jpg',
        type: 'Acordeon',
        name: 'Acordeon',
      },
    ];
    // //////////////////////////////////////////////////////////////////////////
    //paint panels
    const paintPanels = () => {
      panelsContainer.innerHTML = '';
      toBuyInstrumentsPanels.forEach(function (panel) {
        let type = panel.type;
        let name = panel.name;
        let photo = panel.photo;

        //insert html
        const pannelsHTML = ` <div data-instrumentType="${type}" class="panel" id="${name}"style="background-image:url('${photo}')">
      <h3>${name}</h3></div>`;

        // Insert the html to the end of every iteration
        panelsContainer.insertAdjacentHTML('beforeend', pannelsHTML);
      });
    };
    paintPanels();
    hoverOverPannels();
    const panels = document.querySelectorAll('.panel');
    ///////////////////////////////////////////////////////////////////////
    toBuyInstrumentsSlides.forEach(function (slide) {
      let matchedToBuySlides = [];

      panels.forEach(function (panel) {
        panel.addEventListener('click', () => {
          if (panel.dataset.instrumenttype === slide.type) {
            matchedToBuySlides.push(slide.name);
          } else {
            matchedToBuySlides.pop(slide.name);
          }
          pageScroll(500);
          matchedToBuySlides.forEach(function () {
            let type = slide.type;
            let description = slide.description;
            let picture = slide.picture;
            let advantages1 = slide.advantages1;
            let advantages2 = slide.advantages2;
            let advantages3 = slide.advantages3;
            let advantages4 = slide.advantages4;
            let disadvantages1 = slide.disadvantages1;
            let disadvantages2 = slide.disadvantages2;

            // html

            let rightSlideHTML = `
            <div data-instrumentType = "${type}" class="content-slide buy-slide">
            
            <img class="slide-banner-image"	src="${picture}"/>
            <div>
            
              <h4> Descriere</h4>
              <p>${description}</p>
             
              <p id= "avantaje">Avantaje</p>
              <p id= "dezavantaje" >Dezavantaje</p>	
              <div class="advantages-disadvantages">
              <div class ="advantages-list">
                <h4>${advantages1}</h4>
                <h4>${advantages2}</h4>
                <h4>${advantages3}</h4>
                <h4>${advantages4}</h4>
              </div>
              <div class ="disadvantages-list">
                <h4>${disadvantages1}</h4>
                <h4>${disadvantages2}</h4>
              </div>
              </div>
            </div>
            <button class="seeInstrument">Vezi  instrumentele</button>`;
            //insert html to the end of every iteration
            slideContainer.innerHTML = rightSlideHTML;
            const slideContent = document.querySelector('.content-slide');

            slideContent.style.display = 'block';
            slideContainer.style.display = 'flex';

            const seeInstrument = document.querySelector('.seeInstrument');
            seeInstrument.addEventListener('click', () => {
              instruments.forEach((element) => {
                if (element.dataset.instrumenttype === slide.type) {
                  element.removeAttribute('hidden');
                  showGrid();
                  showOrderBy();
                  slideContainer.style.display = 'none';
                  pageScroll(500);
                } else {
                  element.setAttribute('hidden', 'true');
                }
              });
            });
          });
        });
        hideGrid();
        hideOrderBy();
        hideCheckoutForm();
        resetGridToPosition();
        showTestimonials();

        hideContactForm();
      });
    });
  };
  paintToBuyInstrumentSlides();
};
//! panels
const containerPanels = document.querySelector('.container-panel');

const hoverOverPannels = () => {
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => {
      removeActiveClasses();
      panel.classList.add('active');
    });

    containerPanels.addEventListener('mouseleave', () => {
      removeActiveClasses();
    });
  });
  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  }
  function pageScroll(value) {
    window.scroll({
      top: value,
      behavior: 'smooth',
    });
  }
};
// make page scroll
function pageScroll(value) {
  window.scroll({
    top: value,
    behavior: 'smooth',
  });
}
