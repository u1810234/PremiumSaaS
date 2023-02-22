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
  card_image.alt = feature.title;
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

const reviews = [
  {
    image: "review_1",
    name: "Jennie",
    surname: "Martin",
    profession: "Frontend Developer",
    review:
      "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
  },
  {
    image: "review_2",
    name: "Howard",
    surname: "Esther",
    profession: "Web Designer",
    review:
      "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
  },

  {
    image: "review_3",
    name: "Tracy",
    surname: "Stewart",
    profession: "Backend Developer",
    review:
      "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
  },
  {
    image: "review_4",
    name: "Sophia",
    surname: "Torres",
    profession: "Full-Stack Developer",
    review:
      "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
  },
];

//             <div class="swiper-slide">Slide 1</div>

const swiper_wrapper = document.querySelector(".swiper-wrapper");

reviews.forEach((review) => {
  const slide = document.createElement("div");
  slide.classList.add("review_slide", "swiper-slide");

  const inner_slide = document.createElement("div");
  inner_slide.classList.add("review");

  const slide_image = document.createElement("img");
  slide_image.classList.add("reviewer");
  slide_image.src = `./assets/reviews/${review.image}.jpeg`;
  slide_image.alt = `${review.name}_${review.surname}`;
  slide_image.loading = "lazy";
  slide_image.width = "40";
  slide_image.height = "40";

  const reviewer_name = document.createElement("span");
  reviewer_name.classList.add("reviewer_name");
  reviewer_name.innerHTML = review.name + " " + review.surname;

  const reviewer_profession = document.createElement("span");
  reviewer_profession.classList.add("reviewer_profession");
  reviewer_profession.innerHTML = review.profession;

  const reviewer_info = document.createElement("div");
  reviewer_info.classList.add("reviewer_info");
  reviewer_info.append(reviewer_name, reviewer_profession);

  const review_header = document.createElement("div");
  review_header.classList.add("review_header");
  review_header.append(slide_image, reviewer_info);

  const review_description = document.createElement("span");
  review_description.classList.add("review_description");
  review_description.innerHTML = review.review;

  //   const bottom_slide = document.createElement("div");
  //   bottom_slide.classList.add("bottom_review");

  inner_slide.append(review_header, review_description);

  slide.append(inner_slide);

  swiper_wrapper.append(slide);
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
