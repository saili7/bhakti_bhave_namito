const sections = document.querySelectorAll('.book-page, .about-swami');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = () => {
    scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
      ? "block"
      : "none";
  };

  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

