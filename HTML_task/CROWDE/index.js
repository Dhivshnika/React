function index(clickedImage) {
    const allImages = document.querySelectorAll('.sideScroll2 img');

    allImages.forEach(image => {
        if (image === clickedImage) {
            image.classList.add('slideImg1');
            image.classList.remove('slideImg2');
        } else {
            image.classList.add('slideImg2');
            image.classList.remove('slideImg1');
        }
    });
}