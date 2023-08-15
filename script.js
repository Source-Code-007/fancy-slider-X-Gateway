const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const dots = slider.querySelectorAll(".dot");

let currentSlide = 0;
let interval
const activeSlideColor = ['#CACACA', ' #DF957D', '#98DF69']

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        currentSlide = index;
        updateSlides();
        clearInterval(interval)
    });
});

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        // slide.classList.add("bg-light");
        slide.style.backgroundColor = 'white'
        const content = slide.querySelector(".content");

        if (index === currentSlide) {
            slide.classList.add("active");
            slide.style.backgroundColor = activeSlideColor[index];
            content.style.transform = "rotate(0deg)";
        } else {
            const content = slide.querySelector(".content");
            content.style.transform = "rotate(-90deg)";
        }
    });

    currentSlide = (currentSlide + 1) % slides.length;
    console.log(currentSlide);
}


// Initially call the updateSlides function
currentSlide = 0;
updateSlides();


interval = setInterval(updateSlides, 3000);