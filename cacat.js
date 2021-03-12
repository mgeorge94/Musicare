function filterInstrument(instrumentList, type, priceRange) {}

searchBtn.addEventListener('click', () => {
  const filteredInstruments = filterInstrument(
    allInstruments,
    checkboxValue,
    sliderValues
  );
  document.querySelectorAll('.insturment').forEach(elem => {
    if (
      filteredInstruments.find(instr => {
        instr.dataset.type === elem.dataset.type;
      })
    ) {
      instruments.removeAttribute('hidden');
    } else {
      instruments.setAttribute('hidden');
    }
  });
});

const filterInstruments = function (
  instrumentList,
  instrumentType,
  priceRange
) {
  searchBtn.addEventListener('click', () => {
    document.querySelectorAll('.instrument').forEach(element => {
      if (
        instruments.filter(instrument => {
          instrument.type === element.type;
        })
      ) {
        instruments.removeAttribute('hidden');
      } else {
        instruments.setAttribute('hidden');
      }
    });
  });
};






















  const sliderThumbs = doubleHandleSlider.noUiSlider.on(event, function () {
    let minWantedPrice = Math.min(
      ...doubleHandleSlider.noUiSlider.get([0, null])
    );
    let maxWantedPrice = Math.max(
      ...doubleHandleSlider.noUiSlider.get([null, 1])
    );
    console.log(minWantedPrice, maxWantedPrice + 'clicked on slider');
  });
  if (!checkb