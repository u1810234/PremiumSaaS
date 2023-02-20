const mobile_links_toggle = document.querySelector(".mobile_links_toggle");
const mobile_links = document.querySelector(".mobile_links");

mobile_links_toggle.addEventListener("click", () => {
  mobile_links_toggle.classList.toggle("active");
  mobile_links.classList.toggle("active");
});
