function filterInstrument (instrumentList, type, priceRange) {

}

searchBtn.addEventListener("click", () => {
    const filteredInstruments = filterInstrument(allInstruments, checkboxValue, sliderValues);
    document.querySelectorAll('.insturment').forEach((elem) => {
        if(filteredInstruments.find((instr) => {instr.id === elem.id})) {
            instruments.removeAttribute("hidden");
        } else {
            instruments.setAttribute("hidden");
        }
    })
});







const filterInstruments = function (instrumentList, instrumentType, priceRange) {
    searchBtn.addEventListener("click", () => {
        document.querySelectorAll(".instrument").forEach((element) => {
            if (instruments.find((instrument) => { instrument.type === element.type })) {
                instruments.removeAttribute("hidden")
            } else {
                instruments.setAttribute("hidden")
            };
                
        });
    });
};