const btn = document.getElementsByClassName("cta-button")[0];

const observerFunction = (enteries) => {
  const entry = enteries[0];
  if (entry.isIntersecting) {
    btn.classList.add("shake-animation");
  } else btn.classList.remove("shake-animation");
};

const intersectorObserver = new IntersectionObserver(observerFunction);

if (btn) {
  intersectorObserver.observe(btn);
}
