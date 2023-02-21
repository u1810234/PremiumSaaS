const mobile_links_toggle = document.querySelector(".mobile_links_toggle");
const mobile_links = document.querySelector(".mobile_links");

mobile_links_toggle.addEventListener("click", () => {
  mobile_links_toggle.classList.toggle("active");
  mobile_links.classList.toggle("active");
});

const features_main = document.querySelector(".features_main");

const features = [
  {
    icon: "feature_1",
    title: "User information",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "feature_2",
    title: "Deal tracking",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "feature_3",
    title: "Pipeline management",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "feature_4",
    title: "Reporting dashboard",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "feature_5",
    title: "Meeting scheduling",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "feature_6",
    title: "Email tracking",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
];

features.forEach((feature) => {
  const card = document.createElement("div");
  card.classList.add("feature");

  const card_image = document.createElement("img");
  card_image.classList.add("feature_image");
  card_image.src = `./assets/features/${feature.icon}.svg`;
  card_image.loading = "lazy";
  card_image.width = "54";
  card_image.height = "45";

  const card_title = document.createElement("span");
  card_title.classList.add("feature_title");
  card_title.innerHTML = feature.title;

  const card_description = document.createElement("span");
  card_description.classList.add("feature_description");
  card_description.innerHTML = feature.description;

  card.append(card_image, card_title, card_description);

  features_main.append(card);
});
