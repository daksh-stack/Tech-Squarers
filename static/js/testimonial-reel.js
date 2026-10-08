// The Home testimonials reel (templates/sections/home/testimonials.html), ported from the React
// "ScrollReelTestimonials" component the user sent.
//
// Three columns of tiles slide past each other: the middle column (which holds the portraits) moves
// one portrait per step, and the outer columns move the opposite way. Beside it, the quote swaps in
// two beats: the old one lifts away as a whole, then the new one rises in character by character.
//
// Every slide is rendered by Django and stacked in the same grid cell, so the text area is always
// as tall as the longest quote and the buttons never jump. Only the current slide is visible.
//
// The quotes are split into per-character spans here, not in the template. Each split element keeps
// its full text in an sr-only span, and the character spans are aria-hidden, so screen readers read
// words rather than letters.
//
// With no JavaScript, the first testimonial shows as plain text and the reel stays still.
//
// Usage: <div x-data="testimonialReel(count)"> with x-ref="middle" on the middle column and
//        data-reel-text on each element whose text should rise in.

const EXIT_MS = 240; // The old quote lifts away, then the new one is shown
const SLIDE_MS = 800; // Column slide duration (matches duration-800 in the template); input is ignored until it ends
const CHAR_STAGGER_MS = 5; // Delay between one character and the next as the quote rises in

// Replaces an element's text with rising character spans, numbering the delays from `start`.
// Returns the next free number, so the name can carry on where the quote left off.
function splitChars(el, start) {
  const text = el.textContent.trim().replace(/\s+/g, ' ');
  let i = start;

  const readable = document.createElement('span');
  readable.className = 'sr-only';
  readable.textContent = text;

  const visual = document.createElement('span');
  visual.setAttribute('aria-hidden', 'true');
  const words = text.split(' ');
  words.forEach((word, wi) => {
    // Characters sit inside a word span that can't break, so lines still wrap between words
    const wordSpan = document.createElement('span');
    wordSpan.className = 'reel-word';
    for (const ch of word) {
      const charSpan = document.createElement('span');
      charSpan.className = 'reel-char';
      charSpan.style.animationDelay = `${i * CHAR_STAGGER_MS}ms`;
      charSpan.textContent = ch;
      wordSpan.append(charSpan);
      i++;
    }
    visual.append(wordSpan);
    if (wi < words.length - 1) {
      visual.append(' ');
      i++;
    }
  });

  el.replaceChildren(readable, visual);
  return i;
}

document.addEventListener('alpine:init', () => {
  Alpine.data('testimonialReel', (count) => ({
    index: 0, // The testimonial being navigated to; drives the reel
    shown: 0, // The testimonial whose text is on screen; trails index by EXIT_MS
    exiting: false,
    rising: false, // False until the first move, so the first quote is simply there on page load
    ready: false, // Column transitions switch on after the first paint, so the reel doesn't slide in
    busy: false,
    step: 0,

    init() {
      this.$el.querySelectorAll('[data-reel-slide]').forEach((slide) => {
        let next = 0;
        slide.querySelectorAll('[data-reel-text]').forEach((el) => {
          next = splitChars(el, next) + 6; // A short pause between the quote and the name
        });
      });

      // One step is three tiles (a portrait and the two plain tiles after it), measured rather than
      // hardcoded so it follows the tile size set in the template
      const middle = this.$refs.middle;
      const tile = middle.firstElementChild;
      this.step = 3 * (tile.offsetHeight + parseFloat(getComputedStyle(middle).rowGap));

      requestAnimationFrame(() => requestAnimationFrame(() => (this.ready = true)));
    },

    // How far the middle column moves to centre the current portrait; the outer columns use the opposite
    get offset() {
      return ((count - 1) / 2 - this.index) * this.step;
    },

    go(dir) {
      const next = this.index + dir;
      if (this.busy || next < 0 || next >= count) return;
      this.busy = true;
      this.index = next;
      this.exiting = true;

      setTimeout(() => {
        this.shown = next;
        this.exiting = false;
        this.rising = true;
      }, EXIT_MS);
      setTimeout(() => (this.busy = false), SLIDE_MS);
    },
  }));
});
