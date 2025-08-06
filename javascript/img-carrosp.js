document.querySelectorAll(".img-list-carrosp").forEach((carrossel) => {
  let currentIndex = 0;
  const images = carrossel.querySelectorAll(".img-test");
  const btnLeft = carrossel.querySelector(".btnleft");
  const btnRight = carrossel.querySelector(".btnright");

  function updateImages() {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === currentIndex);
    });
  }

  btnRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
  });

  btnLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImages();
  });

  updateImages(); // mostra a primeira imagem ao carregar
});

document.getElementsByClassName(".botao-img-test");
