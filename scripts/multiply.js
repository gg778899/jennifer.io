var myImage = document.querySelector('img');
var i=0;
var c=['image/1ddf33ffe16e4228a25edb0774ade44d.jpeg','image/55f0a9f91b510bda993f5225d8b7ef36.JPG','image/21268.jpg','image/745607.png','image/889541.png'];
myImage.onclick = function() {
  if(i===5){i=0};
  i=i+1;
  let d=i%5;
  myImage.setAttribute('src',c[d]);
}
