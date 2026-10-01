(() => {
  'use strict';
  const notice = document.getElementById('preview-action-notice');
  let timer;
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-preview-disabled="true"]');
    if (!link) return;
    event.preventDefault();
    event.stopPropagation();
    notice.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(() => { notice.hidden = true; }, 4500);
  }, true);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') notice.hidden = true;
  });
})();
