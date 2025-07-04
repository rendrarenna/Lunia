function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const errorText = document.getElementById("error");
  if (password === "23") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("reasonPage").classList.remove("hidden");
    setTimeout(showMainContent, 10000);
  } else {
    errorText.textContent = "Password salah! 😢";
  }
}

function showMainContent() {
  document.getElementById("reasonPage").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");
}

function jawab(pilihan) {
  alert("Jawaban dia: " + pilihan);
}

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.getElementById("flowerRain").appendChild(flower);
  setTimeout(() => flower.remove(), 5000);
}

setInterval(createFlower, 300);
