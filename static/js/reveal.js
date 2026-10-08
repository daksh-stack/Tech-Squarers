// Blur-rise reveal for sections (first used on Explore our courses, templates/sections/home/courses.html).
// Every [data-reveal] element inside the component fades up out of a soft blur as it comes into view,
// in the same style as the hero headline (static/js/scroll-text.js). Each element is watched on its own,
// so a tall stack of cards on a phone arrives card by card; elements that come into view together (a
// row of cards) are staggered 100ms apart in page order. It plays once per element.
// Without JS, or for visitors who ask for reduced motion, everything is simply shown. Styles in input.css.
// Loaded before Alpine so this registers in time.
//
// Usage: <section x-data="reveal">
//          <h2 data-reveal>…</h2>
//          <li data-reveal>…</li>
//        </section>
// Put data-reveal on a wrapper rather than on something with its own translate or transition (a hover
// lift, say), since the reveal sets both.
document.addEventListener('alpine:init', () => {
  Alpine.data('reveal', () => ({
    init() {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const items = this.$el.querySelectorAll('[data-reveal]');

      // Starts once an element is a little way up from the bottom edge, so the reveal is actually seen
      const observer = new IntersectionObserver((entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target)
          .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
          .forEach((item, n) => {
            item.style.setProperty('--reveal-delay', `${n * 100}ms`);
            item.dataset.reveal = 'shown';
            observer.unobserve(item);
          });
      }, { rootMargin: '0px 0px -10% 0px' });

      items.forEach((item) => {
        item.dataset.reveal = 'hidden';
        observer.observe(item);
      });
    },
  }));
});
