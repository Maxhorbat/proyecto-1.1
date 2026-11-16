/**
 * ============================================================================
 * STARK INDUSTRIES — MAIN SCRIPT & HUD TELEMETRY CONTROLLER
 * JavaScript ES6+ Architecture
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // State Management
  const state = {
    cartCount: 0,
    equippedItems: [],
    soundEnabled: true
  };

  /* --------------------------------------------------------------------------
     01. WEB AUDIO API — SCI-FI HUD ACOUSTIC SYNTHESIZER
     -------------------------------------------------------------------------- */
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playHudChirp(freqStart = 880, freqEnd = 1760, duration = 0.08, type = 'sine') {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked, silently continue
    }
  }

  function playHudSuccess() {
    playHudChirp(523.25, 1046.5, 0.15, 'triangle');
    setTimeout(() => playHudChirp(1046.5, 2093.0, 0.2, 'sine'), 100);
  }

  /* --------------------------------------------------------------------------
     02. STICKY HEADER & NAVBAR EFFECTS
     -------------------------------------------------------------------------- */
  const siteHeader = document.querySelector('.site-header');
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      playHudChirp(440, 880, 0.05);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  /* --------------------------------------------------------------------------
     03. SMOOTH SCROLLING & ACTIVE SECTION HIGHLIGHTING
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* --------------------------------------------------------------------------
     04. TELEMETRY NUMBER COUNT-UP ANIMATION
     -------------------------------------------------------------------------- */
  const nodeCountElem = document.getElementById('telemetry-nodes');
  let animatedNodes = false;

  function animateTelemetry() {
    if (!nodeCountElem || animatedNodes) return;

    const rect = nodeCountElem.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animatedNodes = true;
      let count = 0;
      const target = 42900;
      const step = 715;
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
          nodeCountElem.textContent = '42,900+';
        } else {
          nodeCountElem.textContent = count.toLocaleString('en-US') + '+';
        }
      }, 25);
    }
  }

  window.addEventListener('scroll', animateTelemetry, { passive: true });
  animateTelemetry();

  /* --------------------------------------------------------------------------
     05. HUD TOAST NOTIFICATION SYSTEM
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('hud-toast-container');

  function showHudToast(title, message, iconType = 'check') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'hud-toast';

    const iconSvg = iconType === 'check' 
      ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <div class="toast-content">
        <span class="toast-title">${title}</span>
        <span class="toast-message">${message}</span>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3.8s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }

  /* --------------------------------------------------------------------------
     06. PRODUCT REQUISITION / EQUIP INTERACTIONS
     -------------------------------------------------------------------------- */
  const cartCounter = document.getElementById('cart-counter');
  const equipButtons = document.querySelectorAll('[data-action="equip"], [data-action="order"], [data-action="acquire"]');

  equipButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productCard = btn.closest('.product-card');
      const productName = productCard ? productCard.querySelector('.product-title')?.textContent.trim() : 'Classified Unit';
      const actionType = btn.getAttribute('data-action') || 'equip';

      state.cartCount += 1;
      state.equippedItems.push(productName);

      if (cartCounter) {
        cartCounter.textContent = state.cartCount;
        cartCounter.style.transform = 'scale(1.4)';
        setTimeout(() => cartCounter.style.transform = 'scale(1)', 200);
      }

      playHudChirp(700, 1400, 0.12);

      const actionVerbs = {
        equip: 'EQUIPMENT PROTOCOL INITIALIZED',
        order: 'LOGISTICS ORDER REGISTERED',
        acquire: 'QUANTUM CLEARANCE GRANTED'
      };

      showHudToast(actionVerbs[actionType] || 'STARK LOGISTICS', `${productName} added to requisition manifest.`);
    });
  });

  /* --------------------------------------------------------------------------
     07. TECH KEYNOTE PRESENTATION MODAL
     -------------------------------------------------------------------------- */
  const keynoteBtn = document.getElementById('btn-watch-keynote');
  const keynoteModal = document.getElementById('keynote-modal');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');

  function openKeynoteModal() {
    if (keynoteModal) {
      keynoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      playHudChirp(440, 880, 0.1);
    }
  }

  function closeKeynoteModal() {
    if (keynoteModal) {
      keynoteModal.classList.remove('active');
      document.body.style.overflow = '';
      playHudChirp(880, 440, 0.08);
    }
  }

  if (keynoteBtn) {
    keynoteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openKeynoteModal();
    });
  }

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeKeynoteModal);
  });

  if (keynoteModal) {
    keynoteModal.addEventListener('click', (e) => {
      if (e.target === keynoteModal) {
        closeKeynoteModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeKeynoteModal();
    }
  });

  /* --------------------------------------------------------------------------
     08. ARMOR DROPS NEWSLETTER SUBSCRIPTION
     -------------------------------------------------------------------------- */
  const dropsForm = document.getElementById('drops-form');
  const dropsInput = document.getElementById('drops-email');

  if (dropsForm && dropsInput) {
    dropsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = dropsInput.value.trim();

      if (!email || !email.includes('@')) {
        playHudChirp(300, 200, 0.15, 'sawtooth');
        showHudToast('AUTHENTICATION ERROR', 'Please enter a valid corporate email format.', 'alert');
        return;
      }

      playHudSuccess();
      showHudToast('ACCESS PROTOCOL GRANTED', `Encrypted Mark LXXXV firmware link dispatched to ${email}.`, 'check');
      dropsInput.value = '';
    });
  }

  /* --------------------------------------------------------------------------
     09. QUICK SEARCH INTERACTION
     -------------------------------------------------------------------------- */
  const searchBtn = document.getElementById('btn-search-toggle');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      playHudChirp(900, 1200, 0.08);
      const query = prompt('STARK HUD SEARCH // Query terminal database:');
      if (query) {
        const matchingCard = Array.from(document.querySelectorAll('.product-card')).find(c => 
          c.textContent.toLowerCase().includes(query.toLowerCase())
        );
        if (matchingCard) {
          matchingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          matchingCard.style.outline = '2px solid var(--cyan-primary)';
          matchingCard.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.8)';
          setTimeout(() => {
            matchingCard.style.outline = '';
            matchingCard.style.boxShadow = '';
          }, 2500);
          showHudToast('SEARCH MATRIX', `Found match: ${query}`);
        } else {
          showHudToast('SEARCH MATRIX', `No records found for: "${query}"`, 'alert');
        }
      }
    });
  }

  // Console Telemetry Stamp
  console.log(
    '%c STARK INDUSTRIES %c SYSTEM INITIALIZED // LEVEL 4 CLEARANCE ',
    'background: #FFB800; color: #06080C; font-weight: bold; padding: 4px 8px; border-radius: 2px;',
    'background: #0E1420; color: #00E5FF; padding: 4px 8px; border: 1px solid #00E5FF; border-radius: 2px;'
  );
});
