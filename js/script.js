<<<<<<< HEAD:Js/script.js
// Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

if (hamburgerMenu) {
  hamburgerMenu.onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
  };
}

// Toggle class active untuk Search Form
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#search-button");

if (searchButton) {
  searchButton.onclick = (e) => {
    searchForm.classList.toggle("active");
    searchInput.focus();
    e.preventDefault();
  };
}

// Fungsi Pencarian (Google Search)
if (searchInput) {
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (query !== "") {
        window.location.href =
          "https://www.google.com/search?q=" + encodeURIComponent(query);
      }
    }
  });
}

// Toggle class active untuk Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

if (shoppingCartButton) {
  shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
  };
}

// Klik di luar elemen untuk menutup sidebar
document.addEventListener("click", function (e) {
  // Tutup Hamburger Menu jika klik di luar
  if (
    hamburgerMenu &&
    !hamburgerMenu.contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }

  // Tutup Search Form jika klik di luar
  if (
    searchButton &&
    !searchButton.contains(e.target) &&
    !searchForm.contains(e.target)
  ) {
    searchForm.classList.remove("active");
  }

  // Tutup Shopping Cart jika klik di luar
  if (
    shoppingCartButton &&
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});
=======
// Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk Search Form
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#searchInput");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchInput.focus();
  e.preventDefault();
};

// Fungsi Pencarian (Google Search)
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const query = searchInput.value.trim();
    if (query !== "") {
      window.location.href =
        "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
  }
});

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Toggle class active untuk Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  const scb = document.querySelector("#shopping-cart-button");
  if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
>>>>>>> 2dbda4c4f47d3af3b6afed4a16290749303d5ebe:js/script.js
