// Typewriter word rotation (used in templates/sections/home/hero.html).
// Loop: the word stays → pause → it's deleted letter by letter → the next word is typed → …
// Each letter fades (with a slight blur) in or out rather than popping, so it reads smoothly.
// The loop waits while the element is scrolled out of view or the tab is hidden, and never starts for
// visitors who ask for reduced motion. Loaded before Alpine so this registers in time.
//
// Width: by default the box follows each word's width. With fixedWidth it always keeps the widest word's width,
// so the surrounding text wraps the same way whichever word is showing.
//
// Usage: <span x-data='typewriter(["One.", "Two."], { startDelay: 720, fixedWidth: true })' class="inline-block">
//          <span class="sr-only">One.</span><span x-ref="word" aria-hidden="true" class="inline-block whitespace-nowrap">One.</span>
//        </span>
document.addEventListener('alpine:init', () => {
  Alpine.data('typewriter', (words, options = {}) => ({
    words,
    index: 0,
    widths: [],
    inView: false,
    waiters: [],
    // ms: when the loop starts, how long each word rests, and the time per typed and per deleted letter
    startDelay: options.startDelay ?? 0,
    repeatDelay: options.repeatDelay ?? 2000,
    typeSpeed: options.typeSpeed ?? 70,
    deleteSpeed: options.deleteSpeed ?? 40,
    fixedWidth: options.fixedWidth ?? false,

    init() {
      if (this.words.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      this.measure();
      document.fonts.ready.then(() => this.measure());
      // The headline's font size follows the window, so the word widths change with it
      new ResizeObserver(() => this.measure()).observe(this.$el.parentElement);
      new IntersectionObserver(([entry]) => {
        this.inView = entry.isIntersecting;
        this.update();
      }).observe(this.$el);
      document.addEventListener('visibilitychange', () => this.update());

      this.loop();
    },

    // Width of every word, from an invisible copy of the word element (same font)
    measure() {
      const ghost = this.$refs.word.cloneNode();
      Object.assign(ghost.style, { position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap', width: 'auto' });
      this.$el.parentElement.appendChild(ghost);
      this.widths = this.words.map((word) => {
        ghost.textContent = word;
        return ghost.getBoundingClientRect().width;
      });
      ghost.remove();
      this.applyWidth();
    },

    applyWidth() {
      const width = this.fixedWidth ? Math.max(...this.widths) : this.widths[this.index];
      this.$el.style.width = `${width}px`;
    },

    // The word on the page is already the first one, so the loop starts by resting on it
    async loop() {
      await this.wait(this.startDelay);
      for (;;) {
        await this.wait(this.repeatDelay);
        await this.erase();
        await this.wait(250);
        this.index = (this.index + 1) % this.words.length;
        this.applyWidth();
        await this.type(this.words[this.index]);
      }
    },

    // Fade the letters out from the end. Each one is removed once its own fade is done, so the fades overlap.
    async erase() {
      const word = this.$refs.word;
      const text = word.textContent.replace('​', '');
      const letters = [...text].map((character) => this.letter(character));
      // The zero-width space keeps the line's height and baseline while the word is empty
      word.replaceChildren('​', ...letters);
      for (const letter of letters.reverse()) {
        await this.whenActive();
        letter
          .animate([{ opacity: 1, filter: 'blur(0)' }, { opacity: 0, filter: 'blur(4px)' }], {
            duration: 160,
            easing: 'ease-in',
            fill: 'forwards',
          })
          .finished.then(() => letter.remove(), () => {});
        await this.wait(this.deleteSpeed);
      }
      await this.wait(160);
    },

    // Add the letters one by one, each fading in from a slight blur
    async type(text) {
      for (const character of text) {
        await this.whenActive();
        const letter = this.letter(character);
        this.$refs.word.append(letter);
        letter.animate([{ opacity: 0, filter: 'blur(4px)' }, { opacity: 1, filter: 'blur(0)' }], {
          duration: 220,
          easing: 'ease-out',
          fill: 'backwards',
        });
        await this.wait(this.typeSpeed);
      }
    },

    letter(character) {
      const letter = document.createElement('span');
      letter.textContent = character;
      return letter;
    },

    active() {
      return this.inView && !document.hidden;
    },

    // Resolves at once while visible; otherwise once the element is back on screen and the tab is shown
    whenActive() {
      return this.active() ? Promise.resolve() : new Promise((resolve) => this.waiters.push(resolve));
    },

    // Release the loop when it may continue
    update() {
      if (this.active()) this.waiters.splice(0).forEach((resolve) => resolve());
    },

    wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  }));
});
