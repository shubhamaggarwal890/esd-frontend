let form = document.getElementById('form-validation');

form.addEventListener('submit', (e) => {
  console.log(form);
  if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
  }
  form.classList.add('was-validated');
});