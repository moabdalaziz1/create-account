let eye = document.getElementById('eye');
let noEye = document.getElementById('noEye');
let passwordInput = document.getElementById('exampleInputPassword1');

eye.onclick = function () {
  this.style.display = 'none';
  noEye.style.display = 'block';
  passwordInput.type = 'text';
};

noEye.onclick = function () {
  this.style.display = 'none';
  eye.style.display = 'block';
  passwordInput.type = 'password';
};
