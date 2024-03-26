document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validUsername = 'user';
  const validPassword = 'password';

  if (username === validUsername && password === validPassword) {
    document.getElementById('message').textContent = 'Login successful!';
  } else {
    document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
  }
});