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
    const length = Math.max(oldText).length
  }
}
