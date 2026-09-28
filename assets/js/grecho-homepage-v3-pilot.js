(function () {
  'use strict';

  var root = document.querySelector('[data-grecho-v3-pilot]');
  if (!root) {
    return;
  }

  root.classList.add('grecho-v3--enhanced');

  var heroVideo = root.querySelector('[data-grecho-v3-hero-video]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var narrowViewport = window.matchMedia('(max-width: 767px)');

  function syncHeroMedia() {
    if (!heroVideo) {
      return;
    }

    var source = heroVideo.querySelector('source[data-src]');
    var shouldUseVideo = !reduceMotion.matches && !narrowViewport.matches;

    if (shouldUseVideo && source && !source.getAttribute('src')) {
      source.setAttribute('src', source.getAttribute('data-src'));
      heroVideo.load();
      var playAttempt = heroVideo.play();
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(function () {
          heroVideo.classList.add('is-poster-only');
        });
      }
      return;
    }

    if (!shouldUseVideo) {
      heroVideo.pause();
      heroVideo.classList.add('is-poster-only');
      if (source && source.getAttribute('src')) {
        source.removeAttribute('src');
        heroVideo.load();
      }
    }
  }

  syncHeroMedia();
  if (typeof reduceMotion.addEventListener === 'function') {
    reduceMotion.addEventListener('change', syncHeroMedia);
    narrowViewport.addEventListener('change', syncHeroMedia);
  }
  window.addEventListener('resize', syncHeroMedia, { passive: true });
  if (typeof ResizeObserver === 'function') {
    var viewportObserver = new ResizeObserver(syncHeroMedia);
    viewportObserver.observe(document.documentElement);
  }

  var applicationGrid = root.querySelector('.grecho-v3-application-grid');
  var applicationWideViewport = window.matchMedia('(min-width: 851px)');
  var applicationInteractionViewport = window.matchMedia('(min-width: 851px) and (hover: hover) and (pointer: fine)');
  var applicationLayoutFrame = 0;
  var applicationLayoutSignature = '';
  var applicationPointerOrder = '';
  var applicationFocusOrder = '';

  function resetApplicationLayout(cards) {
    applicationGrid.classList.remove('is-measured-columns');
    cards.forEach(function (card) {
      card.style.removeProperty('grid-column');
      card.style.removeProperty('grid-row');
    });
    applicationLayoutSignature = '';
  }

  function layoutApplications() {
    applicationLayoutFrame = 0;
    if (!applicationGrid) {
      return;
    }

    var cards = Array.prototype.slice.call(applicationGrid.querySelectorAll('.grecho-v3-application-card'));
    if (!applicationWideViewport.matches) {
      resetApplicationLayout(cards);
      applicationGrid.setAttribute('data-application-layout-state', 'normal-flow');
      return;
    }

    var rowHeight = 4;
    var gapRows = 6;
    var columnStarts = [1, 1, 1];
    var spans = cards.map(function (card) {
      return Math.max(1, Math.ceil(card.getBoundingClientRect().height / rowHeight));
    });
    var signature = Math.round(applicationGrid.getBoundingClientRect().width) + ':' + spans.join(',');
    if (signature === applicationLayoutSignature && applicationGrid.classList.contains('is-measured-columns')) {
      return;
    }
    applicationLayoutSignature = signature;

    applicationGrid.classList.add('is-measured-columns');
    cards.forEach(function (card, index) {
      var column = (index % 3) + 1;
      var start = columnStarts[column - 1];
      var span = spans[index];
      card.style.gridColumn = String(column);
      card.style.gridRow = String(start) + ' / span ' + String(span);
      columnStarts[column - 1] = start + span + gapRows;
    });
    applicationGrid.setAttribute('data-application-layout-state', 'paired-columns');
  }

  function scheduleApplicationLayout() {
    if (!applicationGrid || applicationLayoutFrame) {
      return;
    }
    applicationLayoutFrame = window.requestAnimationFrame(layoutApplications);
  }

  if (applicationGrid) {
    var applicationCards = Array.prototype.slice.call(applicationGrid.querySelectorAll('.grecho-v3-application-card'));

    function syncApplicationActiveState() {
      var activeOrder = applicationInteractionViewport.matches ? (applicationFocusOrder || applicationPointerOrder) : '';
      if (activeOrder) {
        applicationGrid.setAttribute('data-application-active', activeOrder);
      } else {
        applicationGrid.removeAttribute('data-application-active');
      }
      applicationLayoutSignature = '';
      scheduleApplicationLayout();
    }

    applicationGrid.setAttribute('data-application-default-state', 'balanced');
    applicationCards.forEach(function (card) {
      var order = card.getAttribute('data-application-order') || '';
      var media = card.querySelector('[data-application-media]');
      if (media) {
        media.addEventListener('pointerenter', function () {
          applicationPointerOrder = order;
          syncApplicationActiveState();
        });
        media.addEventListener('pointerleave', function () {
          if (applicationPointerOrder === order) {
            applicationPointerOrder = '';
            syncApplicationActiveState();
          }
        });
      }
      card.addEventListener('focusin', function () {
        applicationFocusOrder = order;
        syncApplicationActiveState();
      });
      card.addEventListener('focusout', function () {
        window.setTimeout(function () {
          var focusedCard = document.activeElement && document.activeElement.closest ? document.activeElement.closest('.grecho-v3-application-card') : null;
          applicationFocusOrder = focusedCard ? focusedCard.getAttribute('data-application-order') || '' : '';
          syncApplicationActiveState();
        }, 0);
      });
    });

    scheduleApplicationLayout();
    applicationGrid.querySelectorAll('img').forEach(function (image) {
      if (!image.complete) {
        image.addEventListener('load', scheduleApplicationLayout, { once: true });
        image.addEventListener('error', scheduleApplicationLayout, { once: true });
      }
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleApplicationLayout);
    }
    if (typeof applicationWideViewport.addEventListener === 'function') {
      applicationWideViewport.addEventListener('change', scheduleApplicationLayout);
      applicationInteractionViewport.addEventListener('change', syncApplicationActiveState);
    }
    window.addEventListener('resize', scheduleApplicationLayout, { passive: true });
    if (typeof ResizeObserver === 'function') {
      var applicationResizeObserver = new ResizeObserver(scheduleApplicationLayout);
      applicationCards.forEach(function (card) {
        applicationResizeObserver.observe(card);
      });
    }
  }

  root.querySelectorAll('[data-grecho-v3-faq]').forEach(function (faq) {
    faq.classList.add('is-enhanced');
    var buttons = faq.querySelectorAll('button[aria-controls]');

    buttons.forEach(function (button, index) {
      var panel = document.getElementById(button.getAttribute('aria-controls'));
      var expanded = index === 0;
      button.setAttribute('aria-expanded', String(expanded));
      if (panel) {
        panel.hidden = !expanded;
      }

      button.addEventListener('click', function () {
        var isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isExpanded));
        if (panel) {
          panel.hidden = isExpanded;
        }
      });
    });
  });
}());
