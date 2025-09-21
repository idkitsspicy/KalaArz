window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card__inner");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("is-flipped");
    }, i * 600); // staggered delay for nicer effect
  });
});
