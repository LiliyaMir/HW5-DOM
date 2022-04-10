function stopDefAction(evt) {
  evt.preventDefault();
}

let button = document.querySelector('.form-button');
let input = document.querySelectorAll('.form-input');

button.addEventListener('click', stopDefAction, false);

button.addEventListener('click', function () {
  console.log(input[0].value);
  localStorage.setItem('login', input[0].value);
  console.log(input[1].value);
  localStorage.setItem('password', input[1].value);
})

