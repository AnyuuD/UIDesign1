const imagesSection1 = [
  "apple.png",
  "orange.png",
  "cherry.png",
  "peach1.png",
  "banana.png",
  "watermelon.png",
  "mandarin.png",
  "grape.png",
  "persimmon.png",
];

const imagesSection2 = [
  "apple.png",
  "orange.png",
  "cherry.png",
  "peach1.png",
  "banana.png",
  "watermelon.png",
  "mandarin.png",
  "grape.png",
  "persimmon.png",
];

const combinationMessages = {
  "apple.png grape.png": {
    message: "Apple Grape Ice Cream Recipe",
    link: "https://example.com/applegrape-recipe",
  },

  "apple.png apple.png": {
    message: "Apple Grape Ice Cream Recipe",
    link: "https://example.com/applegrape-recipe",
  },
  // Add more combinations and their corresponding messages and links
};

function generateRandomImages() {
  const randomIndex1 = Math.floor(Math.random() * imagesSection1.length);
  const randomIndex2 = Math.floor(Math.random() * imagesSection2.length);

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

  const combination =
    imagesSection1[randomIndex1] + imagesSection2[randomIndex2];
  if (combinationMessages.hasOwnProperty(combination)) {
    const { message, link } = combinationMessages[combination];
    const messageLink = document.createElement("a");
    messageLink.href = link;
    messageLink.textContent = message;
    messageSection.innerHTML = "";
    messageSection.appendChild(messageLink);
  } else {
    messageSection.textContent = "";
  }
}
