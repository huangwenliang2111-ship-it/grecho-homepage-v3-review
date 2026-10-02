(() => {
  'use strict';
  const notice = document.getElementById('preview-action-notice');
  let timer;
  document.addEventListener('click', event => {
    const link = event.target.closest('[data-preview-disabled="true"]');
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

(() => {
 const directory=document.querySelector('.review-directory');
 document.addEventListener('click',event=>{if(directory?.open&&!directory.contains(event.target))directory.open=false;});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&directory?.open){directory.open=false;directory.querySelector('summary')?.focus();}});
 document.addEventListener('submit',event=>event.preventDefault(),true);
})();
