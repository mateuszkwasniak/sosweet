const allLinks = document.querySelectorAll("a:link");
const logoNavigationBoxEl = document.querySelector(".logo-main-nav-box");

allLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const href = el.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.open(href, "_blank");
    }
    if (el.classList.contains("main-nav-link"))
      logoNavigationBoxEl.classList.toggle("nav-open");
  });
});

// MOBILE NAV

const menuBtn = document.querySelector(".btn-mobile-nav");

menuBtn.addEventListener("click", () => {
  logoNavigationBoxEl.classList.toggle("nav-open");
});

function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
