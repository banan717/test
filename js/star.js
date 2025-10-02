document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reviews-stars").forEach(block => {
    const stars = block.querySelectorAll(".star");
    let rating = block.dataset.rating || 0;

    function paintStars(r) {
      stars.forEach((s, i) => s.classList.toggle("active", i < r));
    }
    
    paintStars(rating);
    stars.forEach((star, i) => {
      star.addEventListener("mouseover", () => paintStars(i + 1));
      star.addEventListener("mouseout", () => paintStars(rating));
      star.addEventListener("click", () => {
        rating = i + 1;
        block.dataset.rating = rating;
        paintStars(rating);
      });
    });
  });
});
