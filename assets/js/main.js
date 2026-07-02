// مهندسون من أجل الاستدامة — فرع الإسكندرية
// سكريبت مشترك: تبديل قائمة الموبايل + تأثير الظهور عند التمرير

(function () {
  // Mobile nav toggle
  const header = document.getElementById('site-header');
  const burger = document.getElementById('burger');
  if (header && burger) {
    burger.addEventListener('click', () => header.classList.toggle('open'));
    document.querySelectorAll('nav a').forEach((a) =>
      a.addEventListener('click', () => header.classList.remove('open'))
    );
  }

  // Reveal on scroll
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in-view'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  }
})();
