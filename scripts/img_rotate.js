for(let i=0;i<10;i++){
    for(let j=0;j<imglabelnumber[i];j++){
        img[i][j].onmouseover = function(){
            img_main[i].src = img[i][j].src;
            img[i][j].style.border = '5px green double';
            img[i][j].style.height = '1.7cm';
        }
    }
}

for(let i=0;i<10;i++){
    for(let j=0;j<imglabelnumber[i];j++){
        img[i][j].onmouseout = function(){
            img_main[i].src = img1_src[i];
            img[i][j].style.height = '1.5cm';
            setTimeout(function(){img[i][j].style.border = '5px midnightblue double';},300);
        }
    }
}

for(let i=0;i<10;i++){
    img_main[i].onclick=function(){
        if(event.offsetX>=img_main[i].offsetWidth/2){
            right(i);
        }
        else{
            left(i);
        }
    }
}

function right(i){
    rl[i]=rl[i]%imglabelnumber[i];
    img_main[i].src = img_path[i][(++rl[i])%imglabelnumber[i]];
}
function left(i){
    if(rl[i]==0){rl[i]=imglabelnumber[i];}
    img_main[i].src = img_path[i][(--rl[i])%imglabelnumber[i]];
}

