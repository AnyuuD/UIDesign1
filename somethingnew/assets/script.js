const imagesSection1 = [
  "apple.png",
  "orange.png",
  "cherry.png",
  "peach.png",
  "banana.png",
  "watermelon.png",
  "mandarin.png",
  "grape.png",
  "persimmon.png",
  "tomato.png",
  "cherrytomato.png",
  "lemon.png",
  "fig.png",
  "basil.png",
  "sesame.png",
  "mint.png",
  "darkchocolate.png",
  "whitechocolate.png",
  "blackpepper.png",
  "cheese.png",
  "raspberry.png",
  "strawberry.png",
  "mango.png",
  "cinamon.png",
  "blueberry.png",
];

const imagesSection2 = [
  "apple.png",
  "orange.png",
  "cherry.png",
  "peach.png",
  "banana.png",
  "watermelon.png",
  "mandarin.png",
  "grape.png",
  "persimmon.png",
  "tomato.png",
  "cherrytomato.png",
  "lemon.png",
  "fig.png",
  "basil.png",
  "sesame.png",
  "mint.png",
  "darkchocolate.png",
  "whitechocolate.png",
  "blackpepper.png",
  "cheese.png",
  "raspberry.png",
  "strawberry.png",
  "mango.png",
  "cinamon.png",
  "blueberry.png",
];

const button = document.querySelector(".button-with-animated-cursor");
const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
];
let isButtonHovered = false;

button.addEventListener("mouseover", () => {
  isButtonHovered = true;
});

button.addEventListener("mouseout", () => {
  isButtonHovered = false;
});

document.addEventListener("mousemove", (event) => {
  if (isButtonHovered) {
    const cursorCount = Math.floor(Math.random() * 2) + 2; // Random number of circles (2 or 3)

    for (let i = 0; i < cursorCount; i++) {
      setTimeout(() => {
        const cursor = document.createElement("div");
        cursor.className = "cursor";
        document.body.appendChild(cursor);

        const randomSize = Math.floor(Math.random() * 20) + 10;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        cursor.style.width = `${randomSize}px`;
        cursor.style.height = `${randomSize}px`;
        cursor.style.borderRadius = "50%";
        cursor.style.backgroundColor = randomColor;
        cursor.style.left = `${event.clientX - randomSize / 2}px`;
        cursor.style.top = `${event.clientY - randomSize / 2}px`;

        setTimeout(() => {
          document.body.removeChild(cursor);
        }, 1000);
      }, i * 100); // Delay between each circle (100ms)
    }
  }
});

const audioFiles = ["sound1.mp3", "sound2.mp3", "sound3.mp3"];

function generateRandomImages() {
  const randomIndex1 = Math.floor(Math.random() * imagesSection1.length);
  const randomIndex2 = Math.floor(Math.random() * imagesSection2.length);
  const randomAudioIndex = Math.floor(Math.random() * audioFiles.length);

  const imageSection1 = document.getElementById("imageSection1");
  const imageSection2 = document.getElementById("imageSection2");

  const image1 = document.createElement("img");
  image1.src = imagesSection1[randomIndex1];
  imageSection1.innerHTML = "";
  imageSection1.appendChild(image1);

  const image2 = document.createElement("img");
  image2.src = imagesSection2[randomIndex2];
  imageSection2.innerHTML = "";
  imageSection2.appendChild(image2);

  const longestImageHeight = Math.max(
    imageSection1.offsetHeight,
    imageSection2.offsetHeight
  );
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const scrollOffset = windowHeight + longestImageHeight / 2 - 100;
  window.scrollTo({ top: scrollOffset, behavior: "smooth" });

  // Generate search query
  const keyword1 = imagesSection1[randomIndex1].split(".")[0];
  const keyword2 = imagesSection2[randomIndex2].split(".")[0];
  const searchQuery = `${keyword1} ${keyword2} dessert`;
  const searchInput = document.getElementById("searchInput");
  searchInput.value = searchQuery;
}

function searchImages() {
  const searchInput = document.getElementById("searchInput");
  const searchQuery = searchInput.value.trim();
  if (searchQuery !== "") {
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(searchURL, "_blank");
  }
}
