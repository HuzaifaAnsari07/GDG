// Album flipbook functionality
const pages = document.querySelectorAll(".album-page");
let currentPage = 0;
let autoTurnInterval;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove("active");
    if (i === index) page.classList.add("active");
  });
}

// Next page
function nextPage() {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
}

// Prev page
function prevPage() {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(currentPage);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  nextPage();
  resetAutoTurn();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  prevPage();
  resetAutoTurn();
});

// Auto turn every 3s
function startAutoTurn() {
  autoTurnInterval = setInterval(nextPage, 3000);
}

function resetAutoTurn() {
  clearInterval(autoTurnInterval);
  startAutoTurn();
}

// Initialize first page
showPage(currentPage);
startAutoTurn();
