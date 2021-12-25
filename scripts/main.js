var a=document.querySelector('img');

a.onclick=function(){
    let b=a.getAttribute('src');
    if(b==='image/21268.jpg'){
        a.setAttribute('src','image/55f0a9f91b510bda993f5225d8b7ef36.JPG');
    }
    else{
        a.setAttribute('src','image\21268.jpg');
    }
}