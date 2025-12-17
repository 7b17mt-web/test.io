const button = document.getElementById("areaButton");
const menu = document.getElementById("areaMenu");

button.addEventListener("click", () => {
  const isOpen = !menu.classList.contains("hidden");

  menu.classList.toggle("hidden");
  button.textContent = isOpen ? "Area ▼" : "Area ▲";
  button.setAttribute("aria-expanded", String(!isOpen));
});

// エリアクリック時（必要なら）
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    button.textContent = `Area：${e.target.textContent} ▼`;
    menu.classList.add("hidden");
    button.setAttribute("aria-expanded", "false");
  }
});