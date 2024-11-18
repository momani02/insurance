// swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Default configuration
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// filter
document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.querySelector(".btn-design:first-of-type");
  const resetButton = document.querySelector(".btn-design:last-of-type");
  const filterOptions = document.querySelector(".row.mt-2");

  function toggleFilterOptions() {
    filterOptions.classList.toggle("d-none");
  }

  function resetFilters() {
    const selects = filterOptions.querySelectorAll("select");
    selects.forEach((select) => {
      select.selectedIndex = 0;
    });
    document.getElementById("search").value = "";
  }

  filterButton.addEventListener("click", toggleFilterOptions);
  resetButton.addEventListener("click", resetFilters);
});

// pagination
let currentPage = 1;

function updateContent(page) {
  currentPage = page;

  document.querySelectorAll(".page-content").forEach((content) => {
    content.classList.remove("active");
  });

  document.getElementById("content-" + page).classList.add("active");

  document.querySelectorAll(".pagination .page-item").forEach((item) => {
    item.classList.remove("active");
  });

  document
    .querySelector(`.pagination .page-item:nth-child(${page + 1})`)
    .classList.add("active");

  document.getElementById("prevBtn").classList.toggle("disabled", page === 1);
  document.getElementById("nextBtn").classList.toggle("disabled", page === 3);
}

document.querySelectorAll(".pagination .page-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const page = parseInt(link.getAttribute("data-page"));
    if (!isNaN(page)) {
      updateContent(page);
    }
  });
});

document.getElementById("prevBtn").addEventListener("click", (event) => {
  event.preventDefault();
  if (currentPage > 1) {
    updateContent(currentPage - 1);
  }
});

document.getElementById("nextBtn").addEventListener("click", (event) => {
  event.preventDefault();
  if (currentPage < 3) {
    updateContent(currentPage + 1);
  }
});

// form validation
function showNextForm(event) {
  event.preventDefault();
  var registerForm = document.getElementById("register-form");
  var nextForm = document.getElementById("next-form");
  var valid = true;

  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => msg.remove());

  const requiredFields = registerForm.querySelectorAll("[required]");
  requiredFields.forEach((field) => {
    if (!field.value) {
      valid = false;
      field.classList.add("is-invalid");

      const errorMsg = document.createElement("div");
      errorMsg.className = "error-message text-danger";
      errorMsg.innerText = `${field.previousElementSibling.innerText} is required.`;
      field.parentNode.appendChild(errorMsg);
    } else {
      field.classList.remove("is-invalid");
    }
  });

  if (valid) {
    registerForm.classList.add("d-none");
    nextForm.classList.remove("d-none");
    nextForm.scrollIntoView({ behavior: "smooth" });
  } else {
    const firstInvalidField = registerForm.querySelector(".is-invalid");
    if (firstInvalidField) {
      firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

// form validation
function validateForm(event) {
  event.preventDefault();
  const registerForm = document.getElementById("next-form");
  const requiredFields = registerForm.querySelectorAll("[required]");
  let valid = true;

  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => msg.remove());

  requiredFields.forEach((field) => {
    if (!field.value) {
      valid = false;
      field.classList.add("is-invalid");

      const errorMsg = document.createElement("div");
      errorMsg.className = "error-message text-danger";
      errorMsg.innerText = `${field.previousElementSibling.innerText} is required.`;
      field.parentNode.appendChild(errorMsg);
    } else {
      field.classList.remove("is-invalid");
    }
  });
}

// edit
function edit() {
  if (document.getElementById("name-english").disabled == true) {
    document.getElementById("name-english").disabled = false;
    document.getElementById("name-arabic").disabled = false;
    document.getElementById("PhoneN").disabled = false;
    document.getElementById("status").disabled = false;
    document.getElementById("Address-1").disabled = false;
    document.getElementById("Policy-Holder").disabled = false;
    document.getElementById("City-").disabled = false;
    document.getElementById("status-").disabled = false;
    document.getElementById("save").classList.remove("d-none");
    document.getElementById("save").classList.add("animate__bounceInLeft");
  } else {
    document.getElementById("name-english").disabled = true;
    document.getElementById("name-arabic").disabled = true;
    document.getElementById("PhoneN").disabled = true;
    document.getElementById("status").disabled = true;
    document.getElementById("Address-1").disabled = true;
    document.getElementById("Policy-Holder").disabled = true;
    document.getElementById("City-").disabled = true;
    document.getElementById("status-").disabled = true;
    document.getElementById("save").classList.add("d-none");
  }
}