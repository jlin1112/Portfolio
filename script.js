document.getElementById("portfolio-button").addEventListener("click", function () {
    window.location.href = "#projects";
  });


document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
      history.replaceState(null, null, " "); // Removes the hash without refreshing the page
    }
  });