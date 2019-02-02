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
  update(){
    let output = '';
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++){
      let {from, to, start, end, char } = this.queue[i]
      if(this.frame >= end){
        complete++;
        output += to;
      } else if (this.frame >= ) {

      }
    }
  }
}
