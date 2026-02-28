document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  function setActive(link) {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      setActive(link);
    });
  });
});

function exitToHome() {
    window.location.href = "home.html";
}
function searchFunction() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchValue === "home") window.location.href = "home.html";
    else if (searchValue === "about") window.location.href = "aboutt.html";
    else if (searchValue === "games") window.location.href = "coffee.html";
    else if (searchValue === "gallery") window.location.href = "gallery.html";
    else if (searchValue === "video") window.location.href = "video.html";
    else alert("Page not found!");
}