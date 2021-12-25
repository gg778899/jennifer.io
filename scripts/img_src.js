const imglabel = ['image/gfbd/1_','image/gfbd/2_','image/gfbd/3_','image/gfbd/4_','image/gfbd/5_','image/gfbd/6_','image/gfbd/7_','image/gfbd/8_','image/gfbd/9_','image/gfbd/10_'];
const imglabelnumber = [4,10,6,9,15,38,9,2,14,11];
const num = [1,2,3,4,5,6,7,8,9,10];
var img1_src = ['image/gfbd/1_1.jpg','image/gfbd/2_1.jpg','image/gfbd/3_1.jpg','image/gfbd/4_1.jpg','image/gfbd/5_1.jpg','image/gfbd/6_1.jpg','image/gfbd/7_1.jpg','image/gfbd/8_1.jpg','image/gfbd/9_1.jpg','image/gfbd/10_1.jpg'];
var img1 = [];var imgg1 = [];var imggg1 = [];
var img2 = [];var imgg2 = [];var imggg2 = [];
var img3 = [];var imgg3 = [];var imggg3 = [];
var img4 = [];var imgg4 = [];var imggg4 = [];
var img5 = [];var imgg5 = [];var imggg5 = [];
var img6 = [];var imgg6 = [];var imggg6 = [];
var img7 = [];var imgg7 = [];var imggg7 = [];
var img8 = [];var imgg8 = [];var imggg8 = [];
var img9 = [];var imgg9 = [];var imggg9 = [];
var img10 = [];var imgg10 = [];var imggg10 = [];

var img_path = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
var img_id = [imgg1,imgg2,imgg3,imgg4,imgg5,imgg6,imgg7,imgg8,imgg9,imgg10];
var img = [imggg1,imggg2,imggg3,imggg4,imggg5,imggg6,imggg7,imggg8,imggg9,imggg10];

for(let imgcount=0;imgcount<10;imgcount++){
    for(let img_number=0;img_number<imglabelnumber[imgcount];img_number++){
        img_path[imgcount][img_number]=imglabel[imgcount]+(img_number+1)+'.jpg';
    }
}
for(let j=0;j<10;j++){
    for(let i=0;i<imglabelnumber[j];i++){
        img_id[j][i]='img_'+(j+1)+'_'+(i+1);
    }
}
//console.log(imglabel[0]);