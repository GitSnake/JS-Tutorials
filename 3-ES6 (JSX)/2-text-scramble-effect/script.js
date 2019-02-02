/* --------------------------------------
* TextScramble
-------------------------------------- */

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}-=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText){
    const oldText = this.el.innerText;
    const length = Math.max(oldText).length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = []
    for (let i = 0; 1 < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0;
    this.update()
    return promise;
  }
  
}
