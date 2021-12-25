var img_main = [img_main_1,img_main_2,img_main_3,img_main_4,img_main_5,img_main_6,img_main_7,img_main_8,img_main_9,img_main_10,];
var img_main_id = ['img_main_1','img_main_2','img_main_3','img_main_4','img_main_5','img_main_6','img_main_7','img_main_8','img_main_9','img_main_10',]
var rl=[0,0,0,0,0,0,0,0,0,0];
for(let i=0;i<10;i++){
  img_main[i]=document.getElementById(img_main_id[i]);
}
for(let i=0;i<10;i++){
  for(let j=0;j<imglabelnumber[i];j++){
    img[i][j]=document.getElementById(img_id[i][j]);
  }
}
for(let i=0;i<10;i++){
  for(let j=0;j<imglabelnumber[i];j++){
    img[i][j].onclick = function(){
      img_main[i].src = img_path[i][j];
      img1_src[i] = img_path[i][j];
      rl[i] = j;
    }
  }
}
