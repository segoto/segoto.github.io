const descriptions = [
  "Software developer",
  "Guitar and bass player",
  "Competitive programmer",
  "Football lover",
];

const timeOuts = [0, 1200, 2600, 4000];
function typeWriterEffect() {
  setTimeout(function () {
    let p = document.getElementById("text");
    p.innerHTML = "";
    let n = 0;
    let str = "Welcome I'm Sebastián Gómez";
    let typeTimer = setInterval(function () {
      n = n + 1;
      p.innerHTML = str.slice(0, n);
      if (n === str.length) {
        clearInterval(typeTimer);
        p.innerHTML = str;
        n = 0;
        let timer = setInterval(function () {
          if (n === 0) {
            p.innerHTML = str;
            n = 1;
            clearInterval(timer);
          } else {
            p.innerHTML = str;
            n = 0;
          }
        }, 500);
      }
    }, 60);
  }, 2000);

  setTimeout(function () {
    let ul = document.getElementById("descriptions");
    let listItems = ul.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; ++i) {
      setTimeout(function () {
        listItems[i].innerHTML = "";
        let str2 = descriptions[i];
        let n2 = 0;
        let typeTimer2 = setInterval(function () {
          n2 = n2 + 1;
          listItems[i].innerHTML = str2.slice(0, n2);
          if (n2 === str2.length) {
            clearInterval(typeTimer2);
            listItems[i].innerHTML = str2;
            n2 = 0;
            setInterval(function () {
              if (n2 === 0) {
                if (i === 3) listItems[i].innerHTML = str2 + "|";
                else listItems[i].innerHTML = str2;
                n2 = 1;
              } else {
                listItems[i].innerHTML = str2;
                n2 = 0;
              }
            }, 500);
          }
        }, 60);
      }, timeOuts[i]);
    }
  }, 3675);
}
function appearCallToAction(){
    setTimeout(function(){
        document.getElementsByClassName('call-to-action')[0].style.display="block";
    },7500);
}
appearCallToAction();
typeWriterEffect();
