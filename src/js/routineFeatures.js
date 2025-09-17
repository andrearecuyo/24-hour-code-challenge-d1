const features = [
  { icon: "./src/images/icons/d1-check-icon.webp", text: "Lightweight formulas" },
  { icon: "./src/images/icons/d1-check-icon.webp", text: "Easy to use formats" },
  { icon: "./src/images/icons/d1-check-icon.webp", text: "Clean Ingredients" },
  { icon: "./src/images/icons/d1-check-icon.webp", text: "Everything you need, nothing you don’t" }
];

const ul = document.getElementById("features");

features.forEach(feature => {
  const li = document.createElement("li");
  li.innerHTML = `<img src="${feature.icon}" alt="Check Icon"> ${feature.text}`;
  ul.appendChild(li);
});