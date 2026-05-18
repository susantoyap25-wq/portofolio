const body = document.getElementsByTagName("body");

// Messages array containing all message content
const messagesArray = [
  '"Setiap detik di sini adalah pertemuan sekali seumur hidup. Jangan menyesali masa lalu, jangan mencemaskan masa depan. Mari kita sambut hari esok dengan senyuman dan langkah yang lebih berani"',
  '"Mendapatkan pengalaman berharga teman dan guru yang luar biasa, semoga sekolah ini semakin maju dan terus mencetak generasi yang sukses"',
  '"Terima kasih telah memberikan yang terbaik selama 3 tahun ini. Untuk Bapak dan Ibu guru, mohon maaf jika selama 3 tahun ini saya menyulitkan kalian. Kemudian untuk semua yang telah membantu saya selama ini, terima kasih juga telah membuat kenangan yang berkesan selama bersekolah. Bagi semua teman-teman pasti bisa menggapai cita-cita dan semua doanya terkabul menjadi kenyataan. Jika belum ada mencapai apa yang diinginkan itu masih belum bisa saja kita untuk mewujudkan nya."',
  '"Banyak momen sederhana yang ternyata jadi paling dirindukan. Jangan sia-siakan waktu, karena yang biasa hari ini bisa jadi yang paling berharga nanti."',
  '"Terima kasih atas kebersamaan, dukungan, dan kenangan yang tidak akan pernah tergantikan. Kalian bukan hanya teman, tetapi sudah menjadi bagian penting dalam hidup saya, meskipun hari ini kita berpisah, semoga tali persahabatan yang telah kita bangun tidak akan pernah terputus. Semoga kita semua bisa meraih cita-cita dan sukses di jalan masing-masing."',
  '"Banyak kenangan, tawa, dan pelajaran berharga yang tak akan terlupakan. Teruslah menjadi tempat yang menginspirasi dan membentuk masa depan yang lebih baik."',
  '"Setiap sudut sekolah menyimpan cerita yang berarti. Semoga kenangan indah terus tercipta untuk adik-adik selanjutnya."',
];

let berkasFoto = [
  {
    foto: "foto1.jpeg",
    class: "foto-sekolah1",
  },
  {
    foto: "foto2.jpeg",
    class: "foto-sekolah2",
  },
  {
    foto: "foto3.jpeg",
    class: "foto-sekolah3",
  },
  {
    foto: "foto4.jpeg",
    class: "foto-sekolah4",
  },
  {
    foto: "foto5.jpeg",
    class: "foto-sekolah5",
  },
  {
    foto: "foto6.jpeg",
    class: "foto-sekolah6",
  },
  {
    foto: "foto7.jpeg",
    class: "foto-sekolah7",
  },
  {
    foto: "foto8.jpeg",
    class: "foto-sekolah8",
  },
  {
    foto: "foto9.jpeg",
    class: "foto-sekolah9",
  },
  {
    foto: "foto10.jpeg",
    class: "foto-sekolah10",
  },
  {
    foto: "foto11.jpeg",
    class: "foto-sekolah11",
  },
  {
    foto: "foto11.jpeg",
    class: "foto-sekolah12",
  },
];

let berkasFoto2 = [
  {
    foto: "foto1.jpeg",
    class: "foto-sekolah1",
  },
  {
    foto: "foto2.jpeg",
    class: "foto-sekolah2",
  },
  {
    foto: "foto3.jpeg",
    class: "foto-sekolah3",
  },
  {
    foto: "foto4.jpeg",
    class: "foto-sekolah4",
  },
  {
    foto: "foto5.jpeg",
    class: "foto-sekolah5",
  },
  {
    foto: "foto6.jpeg",
    class: "foto-sekolah6",
  },
  {
    foto: "foto7.jpeg",
    class: "foto-sekolah7",
  },
  {
    foto: "foto8.jpeg",
    class: "foto-sekolah8",
  },
  {
    foto: "foto9.jpeg",
    class: "foto-sekolah9",
  },
  {
    foto: "foto10.jpeg",
    class: "foto-sekolah10",
  },
  {
    foto: "foto11.jpeg",
    class: "foto-sekolah11",
  },
  {
    foto: "foto11.jpeg",
    class: "foto-sekolah12",
  },
];

// const galleryGrid = document.querySelector(".gallery-grid");
const lightMode = document.getElementById("light-toggle");
const Light = document.getElementById("dark-icon");
let isDarkMode = false;

lightMode.addEventListener("click", function () {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);

  // Switch icon based on mode
  const lightIcon = document.getElementById("light-icon");

  if (isDarkMode) {
    lightIcon.classList.remove("fa-moon");
    lightIcon.classList.add("fa-sun");
  } else {
    lightIcon.classList.remove("fa-sun");
    lightIcon.classList.add("fa-moon");
  }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('toggle');
    navMenu.classList.toggle('nav-active');
  });

  // Close menu when clicking on a link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('toggle');
      navMenu.classList.remove('nav-active');
    });
  });
}

const messagecard = document.querySelectorAll(".message-card");
messagecard.forEach((card) => {
  card.addEventListener("click", function () {
    const name = card.getAttribute("data-name");
    const photos = JSON.parse(card.getAttribute("data-photos"));
    const messageIndex = parseInt(card.getAttribute("data-message-index"));
    const message = messagesArray[messageIndex];

    // Hide header when modal is open
    const header = document.querySelector("header, nav.navbar");
    header.classList.add("header-hidden");

    // Create modal overlay
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("message-modal-overlay");

    // Create modal content
    const modalContent = document.createElement("div");
    modalContent.classList.add("message-modal-content");

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("message-modal-close");
    closeBtn.innerHTML = "×";
    closeBtn.addEventListener("click", function () {
      modalOverlay.remove();
      header.classList.remove("header-hidden");
      clearInterval(autoSlideInterval);
    });

    // Left side - Carousel
    const carouselDiv = document.createElement("div");
    carouselDiv.classList.add("message-modal-carousel");

    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("message-carousel-container");

    let currentSlide = 0;

    // Create slides
    photos.forEach((photo, index) => {
      const slide = document.createElement("div");
      slide.classList.add("message-carousel-slide");
      if (index === 0) slide.classList.add("active");

      const img = document.createElement("img");
      img.src = photo;
      img.alt = "Photo " + (index + 1);

      slide.appendChild(img);
      carouselContainer.appendChild(slide);
    });

    // Indicators
    const indicatorsDiv = document.createElement("div");
    indicatorsDiv.classList.add("message-carousel-indicators");

    photos.forEach((_, index) => {
      const indicator = document.createElement("button");
      indicator.classList.add("message-carousel-indicator");
      if (index === 0) indicator.classList.add("active");
      indicator.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        goToSlide(index);
        startAutoSlide();
      });
      indicatorsDiv.appendChild(indicator);
    });

    // Carousel functions
    function changeSlide(direction) {
      const slides = document.querySelectorAll(".message-carousel-slide");
      const indicators = document.querySelectorAll(
        ".message-carousel-indicator",
      );

      slides[currentSlide].classList.remove("active");

      currentSlide = (currentSlide + direction + photos.length) % photos.length;

      slides[currentSlide].classList.add("active");
    }

    function goToSlide(index) {
      const slides = document.querySelectorAll(".message-carousel-slide");
      const indicators = document.querySelectorAll(
        ".message-carousel-indicator",
      );

      slides[currentSlide].classList.remove("active");
      indicators[currentSlide].classList.remove("active");

      currentSlide = index;

      slides[currentSlide].classList.add("active");
    }

    // Auto slide
    let autoSlideInterval;

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        changeSlide(1);
      }, 3000); // Change slide every 3 seconds
    }

    // Start auto slide
    startAutoSlide();

    // Assemble carousel
    carouselDiv.appendChild(carouselContainer);
    carouselDiv.appendChild(indicatorsDiv);

    // Right side - Info
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("message-modal-info");

    const nameH4 = document.createElement("h4");
    nameH4.classList.add("message-modal-name");
    nameH4.textContent = name;

    const jurusan = document.createElement("h5");
    jurusan.classList.add("message-jurusan");
    jurusan.textContent = "Jurusan Akuntansi";

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-modal-text-container");

    const messageP = document.createElement("p");
    messageP.classList.add("message-modal-text");
    messageP.textContent = message;

    // Assemble message container
    messageContainer.appendChild(messageP);

    // Assemble info
    infoDiv.appendChild(nameH4);
    infoDiv.appendChild(jurusan);
    infoDiv.appendChild(messageContainer);

    // Assemble modal
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(carouselDiv);
    modalContent.appendChild(infoDiv);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Close modal when clicking outside
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.remove();
        header.classList.remove("header-hidden");
        clearInterval(autoSlideInterval);
      }
    });

    // Close on Escape key
    const escapeHandler = function (e) {
      if (e.key === "Escape") {
        modalOverlay.remove();
        header.classList.remove("header-hidden");
        clearInterval(autoSlideInterval);
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header, nav.navbar");

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Data foto untuk setiap tombol
const fotoData = {
  1: berkasFoto,
  2: berkasFoto2,
  3: berkasFoto2,
};

// Audio Player Functionality
const audioPlayer = document.getElementById("audioPlayer");
const audioPlayBtn = document.getElementById("audioPlayBtn");
const audioElement = document.getElementById("audioElement");
const playIcon = document.getElementById("playIcon");
let isPlaying = false;

// Auto-play music on page load
window.addEventListener("load", function () {
  // Set volume to a comfortable level
  audioElement.volume = 0.5;
  
  // Try to play audio (may be blocked by browser)
  audioElement.play()
    .then(function () {
      // Playback started successfully
      isPlaying = true;
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
      console.log("Audio autoplay started successfully");
    })
    .catch(function (error) {
      // Autoplay was prevented by browser
      console.log("Audio autoplay prevented:", error);
      // User will need to click to start playback
    });
});

if (audioPlayBtn && audioElement) {
  audioPlayBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    if (isPlaying) {
      audioElement.pause();
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
      isPlaying = false;
    } else {
      audioElement.play();
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
      isPlaying = true;
    }
  });

  // Update icon when audio ends
  audioElement.addEventListener("ended", function () {
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    isPlaying = false;
  });
}
