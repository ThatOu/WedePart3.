/* ==========================================================================
   Aqua Tropics - Master JavaScript File (Part 3)
   Dynamic Interactive Enhancements, Search/Filter, Lightbox, Validation, Leaflet
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Set Current Copyright Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('show');
    });
  }

  // 1. Accordion Component (Home / FAQ Page)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('active');
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
      if (!isOpen) content.classList.add('active');
    });
  });

  // 2. Lightbox Gallery Component
  const galleryImages = document.querySelectorAll('.gallery-thumb');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (galleryImages && lightbox) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.getAttribute('data-fullsize') || img.src;
        lightboxImg.alt = img.alt;
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });
  }

  // 3. Search and Category Filter (Products Page)
  const searchInput = document.getElementById('product-search');
  const categoryFilter = document.getElementById('category-filter');
  const productCards = document.querySelectorAll('.product-card');

  function filterProducts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const category = categoryFilter ? categoryFilter.value.toLowerCase() : 'all';

    productCards.forEach(card => {
      const title = card.querySelector('.product-title').textContent.toLowerCase();
      const cardCategory = card.getAttribute('data-category').toLowerCase();

      const matchesSearch = title.includes(searchTerm);
      const matchesCategory = category === 'all' || cardCategory === category;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);

  // 4. Dynamic Price Calculation (Enquiry Form)
  const itemSelect = document.getElementById('enquiry-item');
  const qtyInput = document.getElementById('enquiry-qty');
  const priceDisplay = document.getElementById('estimated-price');

  function updatePrice() {
    if (!itemSelect || !qtyInput || !priceDisplay) return;
    const pricePerUnit = parseFloat(itemSelect.options[itemSelect.selectedIndex].getAttribute('data-price') || 0);
    const qty = parseInt(qtyInput.value) || 1;
    const total = pricePerUnit * qty;
    priceDisplay.textContent = `R ${total.toFixed(2)}`;
  }

  if (itemSelect) itemSelect.addEventListener('change', updatePrice);
  if (qtyInput) qtyInput.addEventListener('input', updatePrice);

  // 5. Form Validation & AJAX Handler (Enquiry & Contact Forms)
  const enquiryForm = document.getElementById('enquiry-form');
  const contactForm = document.getElementById('contact-form');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^(\+27|0)[6-8][0-9]{8}$/.test(phone);
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('enq-name');
      const email = document.getElementById('enq-email');
      const feedback = document.getElementById('enquiry-feedback');

      if (!name.value.trim()) {
        name.parentElement.classList.add('invalid');
        isValid = false;
      } else {
        name.parentElement.classList.remove('invalid');
      }

      if (!validateEmail(email.value)) {
        email.parentElement.classList.add('invalid');
        isValid = false;
      } else {
        email.parentElement.classList.remove('invalid');
      }

      if (isValid) {
        feedback.style.color = 'var(--success-green)';
        feedback.innerHTML = '✔ Generating enquiry cost breakdown... Sending request via AJAX...';
        setTimeout(() => {
          feedback.innerHTML = '✔ Success! Your enquiry has been sent. Our team will contact you within 24 hours.';
          enquiryForm.reset();
          updatePrice();
        }, 1500);
      } else {
        feedback.style.color = 'var(--error-red)';
        feedback.textContent = '✖ Please fix the highlighted errors above.';
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('cnt-name');
      const email = document.getElementById('cnt-email');
      const phone = document.getElementById('cnt-phone');
      const message = document.getElementById('cnt-message');
      const feedback = document.getElementById('contact-feedback');

      if (!name.value.trim()) {
        name.parentElement.classList.add('invalid');
        isValid = false;
      }

      if (!validateEmail(email.value)) {
        email.parentElement.classList.add('invalid');
        isValid = false;
      }

      if (phone.value && !validatePhone(phone.value)) {
        phone.parentElement.classList.add('invalid');
        isValid = false;
      }

      if (!message.value.trim()) {
        message.parentElement.classList.add('invalid');
        isValid = false;
      }

      if (isValid) {
        feedback.style.color = 'var(--success-green)';
        feedback.textContent = '✔ Compiling email client connection... Message sent successfully!';
        
        // Form mailto trigger simulation
        const mailtoUri = `mailto:info@aquatropics.co.za?subject=Contact%20Inquiry%20from%20${encodeURIComponent(name.value)}&body=${encodeURIComponent(message.value)}`;
        console.log("Compiled Mailto URI:", mailtoUri);

        setTimeout(() => {
          contactForm.reset();
        }, 1500);
      } else {
        feedback.style.color = 'var(--error-red)';
        feedback.textContent = '✖ Please complete all required fields with valid input.';
      }
    });
  }

  // 6. Interactive Leaflet Map Setup
  const mapElement = document.getElementById('map');
  if (mapElement && typeof L !== 'undefined') {
    // Durban Coordinates: -29.8587, 31.0218
    const map = L.map('map').setView([-29.8587, 31.0218], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-29.8587, 31.0218]).addTo(map)
      .bindPopup('<b>Aqua Tropics Durban Flagship Store</b><br>12 Marine Parade, Durban CBD.')
      .openPopup();
  }
});
