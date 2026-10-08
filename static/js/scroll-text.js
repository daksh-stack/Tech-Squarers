// Scroll text reveal (used on the hero headline, templates/sections/home/hero.html, and the CTA heading,
// templates/partials/footer.html). Ported from a React/Motion scroll-text component: when the text comes
// into view, its words come in one after another, fading up out of a blur. It plays once.
// The words are wrapped where they are, so the heading reads the same to screen readers. A nested Alpine
// component (the hero's typewriter word) changes its own contents, so it moves as one piece.
// Without JS, or for visitors who ask for reduced motion, the text is simply shown. Styles in input.css.
// Loaded before Alpine so this registers in time.
//
// Usage: <h2 x-data="scrollText">Have questions?</h2>
//        <h1 x-data="scrollText({ delay: 600 })" data-scroll-text-cloak>…</h1>
//   delay: ms before the first word starts (default 0)
//   data-scroll-text-cloak: for text already on screen at load, keeps it hidden until it's split so the
//   finished text never flashes first (input.css shows it after 2s anyway if the script never runs)
document.addEventListener('alpine:init', () => {
  Alpine.data('scrollText', (options = {}) => ({
    index: 0,

    init() {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const el = this.$el;
      this.split(el);
      el.style.setProperty('--scroll-text-delay', `${options.delay ?? 0}ms`);
      el.dataset.scrollText = 'hidden';
      el.removeAttribute('data-scroll-text-cloak');

      // Starts once the text is a little way up from the bottom edge, so the reveal is actually seen
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.scrollText = 'shown';
        observer.disconnect();
      }, { rootMargin: '0px 0px -15% 0px' });
      observer.observe(el);
    },

    // Wraps each word in a .scroll-text-piece numbered in reading order (--i), keeping the spaces between
    split(parent) {
      [...parent.childNodes].forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.replaceWith(...node.textContent.split(/(\s+)/).filter(Boolean)
            .map((part) => (/^\s+$/.test(part) ? part : this.piece(document.createElement('span'), part))));
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.hasAttribute('x-data')) this.piece(node);
          else this.split(node);
        }
      });
    },

    piece(span, text) {
      span.classList.add('scroll-text-piece');
      span.style.setProperty('--i', this.index++);
      if (text) span.textContent = text;
      return span;
    },
  }));
});
