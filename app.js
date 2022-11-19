const slides = document.querySelectorAll(".slide");
const slides2 = document.querySelectorAll(".slide2");
const nextBtn = document.querySelector(".next1");
const prevBtn = document.querySelector(".prev1");
const nextBtn2 = document.querySelector(".next2");
const prevBtn2 = document.querySelector(".prev2");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
  console.log(slide);
});
slides2.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
  console.log(slide);
});

counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  if (counter > slides.length - 1) {
    counter = slides.length - 1;
  }
  //   if (counter > 0) {
  //     prevBtn.style.display = "block";
  //   }
  carousel();
});
nextBtn2.addEventListener("click", function () {
  counter++;
  if (counter > slides.length - 1) {
    counter = slides.length - 1;
  }
  //   if (counter > 0) {
  //     prevBtn2.style.display = "block";
  //   }
  carousel2();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
  if (counter <= 0) {
    counter = 0;
  }
});
prevBtn2.addEventListener("click", function () {
  counter--;
  carousel2();
  if (counter <= 0) {
    counter = 0;
  }
});

function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
function carousel2() {
  slides2.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
// prevBtn.style.display = "none";
