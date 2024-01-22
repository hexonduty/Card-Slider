document.addEventListener("DOMContentLoaded", function () {
  const rightSlider = document.getElementById("rightSlider");
  const leftSlider = document.getElementById("leftSlider");
  const card = document.getElementById("card");
  const cardSecond = document.getElementById("cardSecond");

  rightSlider.addEventListener("click", function () {
    cardSecond.style.display = "flex";
    card.style.display = "none";
    console.log("sağ");
  });

  leftSlider.addEventListener("click", function () {
    cardSecond.style.display = "none";
    card.style.display = "flex";
    console.log("sol");
  });
});
