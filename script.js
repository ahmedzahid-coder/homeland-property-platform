const slides = [
    {
        image: "images/hero_bg_1.jpg",
        badge: "FOR RENT",
        title: "871 CRENSHAW BLVD",
        price: "$2,250,500"
    },

    {
        image: "images/hero_bg_2.jpg",
        badge: "FOR SALE",
        title: "625 S. BERENDO ST",
        price: "$1,000,500"
    },
]

// 1. Current slide track karne ke liye

let currentIndex = 0; 

const hero = document.querySelector('.hero');

function changeSlide() {

    const slide = slides[currentIndex];
    hero.style.backgroundImage = `url('${slide.image}')`;
    document.querySelector('.badge').textContent = slide.badge;
    document.querySelector('h1').textContent = slide.title;
    document.querySelector('.price').textContent = slide.price;
    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(changeSlide, 5000);


document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide();
});

document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % slides.length;
    changeSlide();
});

