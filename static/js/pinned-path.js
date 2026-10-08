// Draws the dashed line that joins the pinned cards in the "What we do" section
// (templates/sections/home/what-we-do.html).
//
// The line runs straight from the centre of each card to the centre of the next. Wherever the
// cards move — a different screen width, the text wrapping to more lines, the web fonts arriving —
// the line is redrawn from where they actually are, which is what keeps it on the cards at every
// size. (The React original hardcoded curve coordinates for fixed card positions, so the line
// drifted off the cards at any width but the one it was drawn for.)
//
// The corners where one segment meets the next are at card centres, hidden behind the cards.
//
// Decorative, and fails quietly: with no JavaScript the path is simply empty — the cards, which carry
// all the content, are unaffected. The dashes' flow is CSS (.pinned-path in input.css).
//
// Usage: <div x-data="pinnedPath" class="relative"> with an <svg><path x-ref="path"></svg> and the
//        cards marked data-pin, in order.
document.addEventListener('alpine:init', () => {
  Alpine.data('pinnedPath', () => ({
    init() {
      const draw = () => {
        const box = this.$el.getBoundingClientRect();
        const centres = [...this.$el.querySelectorAll('[data-pin]')].map((card) => {
          // The bounding box of a rotated card is centred on the card, so its centre is the card's
          const r = card.getBoundingClientRect();
          return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
        });
        if (centres.length < 2) return;

        // Straight segments from centre to centre
        const d = centres.map((c, i) => `${i ? 'L' : 'M'} ${c.x} ${c.y}`).join(' ');

        // Drawn in the container's own pixels, so nothing is stretched and the dashes stay even
        this.$refs.path.closest('svg').setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
        this.$refs.path.setAttribute('d', d);
      };

      draw();
      // Card heights change with width and with the fonts loading; both resize this container
      new ResizeObserver(draw).observe(this.$el);
      document.fonts.ready.then(draw);
    },
  }));
});
