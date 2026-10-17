// ปุ่ม Say Hello
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

// Exercise 3: ปุ่ม Toggle Theme
document.querySelector('#themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});