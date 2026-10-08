// Sliding highlight for the desktop nav links (templates/partials/navbar.html).
// The pill rests on the current page, follows hover and keyboard focus, and returns to the
// current page when both leave the links. Loaded before Alpine so this registers in time.
document.addEventListener('alpine:init', () => {
  Alpine.data('navPill', (current) => ({
    current,
    active: current,
    // false until Alpine has measured the links; until then the server-rendered highlight shows
    ready: false,
    pill: { x: 0, y: 0, w: 0, h: 0, shown: false, animate: false },

    init() {
      this.move(this.current, false);
      this.ready = true;
      // The links measure 0 while hidden below lg, and shift when the window resizes. Watching the
      // container's own size catches both, including a page loaded on a phone and then widened.
      new ResizeObserver(() => this.move(this.active, false)).observe(this.$el);
    },

    // Put the pill under the link with x-ref="name". Pages outside the nav have no such link,
    // so the pill hides until something is hovered.
    move(name, animate = true) {
      this.active = name;
      const link = this.$refs[name];
      if (!link) {
        this.pill.shown = false;
        return;
      }
      // Only glide between two visible spots; appearing from hidden should not slide in from the edge
      this.pill.animate = animate && this.pill.shown;
      Object.assign(this.pill, {
        x: link.offsetLeft,
        y: link.offsetTop,
        w: link.offsetWidth,
        h: link.offsetHeight,
        shown: true,
      });
    },

    reset() {
      this.move(this.current);
    },
  }));
});
