// const slides = document.querySelector('.slides');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let index = 0;
// function showNextSlide() {
//     index++;
//     if (index >= slides.children.length) {
//         index = 0;
//     }
//     slides.style.transform = `translateX(${-index * 100}%)`;
// }
// function showPrevSlide() {
//     index--;
//     if (index < 0) {
//         index = slides.children.length - 1;
//     }
//     slides.style.transform = `translateX(${-index * 100}%)`;
// }
// nextButton.addEventListener('click', showNextSlide);
// prevButton.addEventListener('click', showPrevSlide);

let sliders = document.querySelectorAll(".slides")
console.log(sliders)
let count = 0;
sliders.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});
function sliderimage(){
    slider.forEach((slide) => {
        slide.style.transform = `translate(-${count * 100}%)`;
    })
}
function prev(){
    count--;
    if(count < 0){
        count = sliders.length - 1;
    }
    sliderimage();
}
function next(){
    count--;
    if(count >= sliders.length){
        count = 0;
    }
    sliderimage();
}