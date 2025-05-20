document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-menu');
  nav.innerHTML = `
    <a class="nav-logo" href="/">John Smith</a>
    <div class="nav-links">
      <a class="nav-button" href="/">Home</a>
      <a class="nav-button" href="html/about.html">About</a>
      <a class="nav-button" href="html/portfolio.html">Portfolio</a>
      <a class="nav-button" href="html/experience.html">Experience</a>
      <a class="nav-button" href="html/contact.html">Contact</a>
    </div>
  `;
});
