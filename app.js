const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// console.log(slides);

slides.forEach(function(eachSlide, index){
    eachSlide.style.left = `${index * 100}%`
});

let counter = 0;

nextBtn.addEventListener("click", function(){
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function(){
    counter--;
    carousel();
});


// ******** OPTION A ****************
function carousel(){
    // working with slides (when you reach to the last slide if you hit next you start again)
    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach(function(eachSlide){
        eachSlide.style.transform = `translateX(-${counter * 100}%)`
    });

    slides.forEach(function(eachSlide){
        eachSlide.style.transform = `translateX(-${counter * 100}%)`
    });
}

// ****************OPTION B ****************
// function carousel(){
//     // working with buttons (to disappear them if you reach the begining or end )
//     if (counter < slides.length - 1) {
//         nextBtn.style.display = "block";
//     } else {
//         nextBtn.style.display = "none";
//     }
//     if (counter > 0) {
//         prevBtn.style.display = "block";
//     } else {
//         prevBtn.style.display = "none";
//     }

//     slides.forEach(function(eachSlide){
//         eachSlide.style.transform = `translateX(-${counter * 100}%)`
//     });
// }
// prevBtn.style.display = "none";

