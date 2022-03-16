document.querySelectorAll('.faq-toggle').forEach(btnEl => {
  btnEl.addEventListener('click', (evt) => {
    console.log('clicked');
    btnEl.parentElement.classList.toggle('active');
  })
})
