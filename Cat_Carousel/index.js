function handleCatClicks() {
    $('.thumbnail').on('click', e => { //UPON CLCKING THUNBNAIL
        const imgSource = $(event.currentTarget).find("img").attr("src"); //FIND IMAGE ANd ATTRIBUTE SRC DESCRIPTOR
        const imgAlternate = $(event.currentTarget).find('img').attr("alt"); //FIND IMAGE AND ATTRIBUTE ALT DESCRIPTOR
        $(".hero img").attr("src", imgSource).attr("alt", imgAlternate); //REPLACES IMAGE AND ALT ATTRIBUTES WHEN IT GOES INTO LARGE CONTAINER, USES IMAGE CLICKED ON BY USER.
    });
}

$(handleCatClicks);