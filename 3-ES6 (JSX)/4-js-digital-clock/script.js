let d, h, m, s, animate;

const init => (){
  d = new Date();
  h = d.getHours();
  m=d.getMinutes();
  s=d.getSeconds();
  clock();
};

const clock => (){
  s++;
  if (s == 60) {
    s = 0;
    m++;
    if(m == 60){
      m=0;
      h++;
      if (h == 24) {
        h = 0;
      }
    }
  }
}
