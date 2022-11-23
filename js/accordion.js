const btnsAcc = document.querySelectorAll(".btn-accordion");

btnsAcc.forEach((btn) => {
  btn.addEventListener("click", function () {
    const wrapper = this.closest(".wrapper");
    wrapper
      .querySelectorAll(".card-accordion")
      .forEach((card) => card.classList.toggle("card-hidden"));

    const icon = this.querySelector(".icon-accordion");
    icon.classList.toggle("rotated");
    if (!icon.classList.contains("rotated")) {
      wrapper.closest("section").scrollIntoView();
    }
  });
});
