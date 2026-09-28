(() => {
  'use strict';
  const notice = document.getElementById('preview-action-notice');
  let timer;
  const showNotice = () => {
    if (!notice) return;
    notice.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(() => { notice.hidden = true; }, 2800);
  };
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-preview-disabled="true"]');
    if (!link) return;
    event.preventDefault();
    event.stopPropagation();
    showNotice();
  }, true);
})();