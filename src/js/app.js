const collapse = document.querySelectorAll('.collapse-button');
const content = document.querySelector('.collaps-body');

for (let i = 0; i < collapse.length; i += 1) {
  collapse[i].addEventListener('click', () => {
    content.classList.toggle('active');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.border = 'none';
      content.style.radius = 'none';
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
      content.style.border = '1px solid rgba(0,0,0,.125)';
      content.style.borderRadius = '0.25rem';
    }
  });
}
