function searchFunction() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchValue === "home") window.location.href = "home.html";
    else if (searchValue === "about") window.location.href = "aboutt.html";
    else if (searchValue === "games") window.location.href = "coffee.html";
    else if (searchValue === "gallery") window.location.href = "gallery.html";
    else if (searchValue === "video") window.location.href = "video.html";
    else alert("Page not found!");
}

function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('hidden');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const navList = document.getElementById('nav-list');
  const menuBtn = document.getElementById('mobile-menu-btn');
  
  if (!navList.contains(event.target) && !menuBtn.contains(event.target)) {
    navList.classList.add('hidden');
  }
});