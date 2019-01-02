
var data, count;
var rows;

var rank = -1;

//中转值
var temp13 = [];
var temp14 = [];
var temp15 = [];
var temp16 = [];
var temp17 = [];
var temp18 = [];

//之后的排序
var bfRank13 = [];
var bfRank14 = [];
var bfRank15 = [];
var bfRank16 = [];
var bfRank17 = [];
var bfRank18 = [];


//之后的排序
var afRank13 = [];
var afRank14 = [];
var afRank15 = [];
var afRank16 = [];
var afRank17 = [];
var afRank18 = [];

//每个的值 —— 影响颜色
var value13 = [];
var value14 = [];
var value15 = [];
var value16 = [];
var value17 = [];
var value18 = [];

//对象数组
var year13 = [];
var year14 = [];
var year15 = [];
var year16 = [];
var year17 = [];
var year18 = [];

var images13 = [];
var images14 = [];
var images15 = [];
var images16 = [];
var images17 = [];
var images18 = [];

var marginL;
var marginT = 120;
var spacing = 20;
var barW= 2;
var barH;

var bgcolor = 242;
var color1 = "#334d81";
var color2 = "#5071a4";
var color3 = "#6b9ac7";
var color4 = "#a1c3d3";
var color5 = "#b1b3b4";
var color6 = "#8c9395";
var color7 = "#697683"; //当天没有数据
var color8 = "#2d2d2d"; 
var index = 0;

var x = [];
var y = [];
//button
var button = "a";
var btnY = 0;
var btn1, btn2; //按钮
var btnW = 70;
var btnH = 30;
var btn1c = "#2B5788";
var btn2c = "#D3D3D3";
var btn1Color = "#2B5788";
var btn2Color = "#D3D3D3";
var txt1 = 255;
var txt2 = 60;
var txt1Color = 255;
var txt2Color = 60;

var boxw = 140;
var boxh = 60;
var imgs;

var colors = ["#334d81", "#5071a4","#6b9ac7", "#a1c3d3","#b1b3b4","#8c9395","#697683","#2d2d2d","#F2F2F2"];
var pmScale = [ 0,15,35,50,100,150,200,300,1000,10000 ];
var months = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
var degree = ["0-15：世界卫生组织标准","0-35：中国标准","0-50：过渡标准","50-100：二级良","100-150：三级污染","150-200：四级污染","200-300：五级污染","300-500：六级污染"]
var countDay = [0,32,60,91,121,152,182,213,244,274,305,335];
var days = [31,28,31,30,31,31,30,31,30,31,30,31];
var daysline = [0,31,60,91,121,152,182,213,244,274,305,335,365];
var yearDays = [365,365,365,366,365,365];
var images = [];
var bfPosX  = [];
var bfPosY  = [];
var afPosX  = [];
var afPosX  = [];
var img;


function preload(){
    data = loadTable("2013-2018.csv", "header");
}
                                                            
function setup(){
    canvas = createCanvas(windowWidth, 900);
    // canvas.position(0, 180);
    background(bgcolor);
    rows = data.getRowCount();
    cols = data.getColumnCount();
   
    if(windowWidth >= 1400){
        barW = 4;
        barH = 60;
    }else if(windowWidth < 1400 && windowWidth >= 1100){
        barW = 3;
        barH = 60;
    }else if(windowWidth < 1100 && windowWidth >= 800){
        barW = 2;
        barH = 60;
    }else if(windowWidth < 800 ){
        barW = 2;
        barH = 60;
        spacing =10;
    }

     marginL = (windowWidth-barW*365)/2;
    logo = loadImage("img/logo.jpg");
    for(var i = 0; i < 366; i++){
         images13[i] = loadImage(data.getString(i,"13img"));
         images14[i] = loadImage(data.getString(i,"14img"));
         images15[i] = loadImage(data.getString(i,"15img"));
         images16[i] = loadImage(data.getString(i,"16img"));
         images17[i] = loadImage(data.getString(i,"17img"));
         images18[i] = loadImage(data.getString(i,"18img"));
     }

    
     for(var i = 0; i < 366; i++){
         temp13[i] = data.getNum(i,"13aqi");
         temp14[i] = data.getNum(i,"14aqi");
         temp15[i] = data.getNum(i,"15aqi");
         temp16[i] = data.getNum(i,"16aqi");
         temp17[i] = data.getNum(i,"17aqi");
         temp18[i] = data.getNum(i,"18aqi");

         bfRank13[i] = i;
         bfRank14[i] = i;
         bfRank15[i] = i;
         bfRank16[i] = i;
         bfRank17[i] = i;
         bfRank18[i] = i;
     }


    for(var i = 0; i<rows;i++){
        bfPosX[i] = marginL + i*barW;
        afPosX[i] = marginL + afRank13[j]*barW;
    }


    for(var i = 0; i < 6;i++){
        bfPosY[i] = marginT+(barH+spacing)*i;
    }

     selection(temp13, rank);
     selection(temp14, rank);
     selection(temp15, rank);
     selection(temp16, rank);
     selection(temp17, rank);
     selection(temp18, rank);

     for(var j = 0; j < 366; j++){
         value13 = data.getNum(j,"13aqi");
         value14 = data.getNum(j,"14aqi");
         value15 = data.getNum(j,"15aqi");
         value16 = data.getNum(j,"16aqi");
         value17 = data.getNum(j,"17aqi");
         value18 = data.getNum(j,"18aqi");

         afRank13[j] = 365+temp13[j];
         afRank14[j] = 365+temp14[j];
         afRank15[j] = 365+temp15[j];
         afRank16[j] = 365+temp16[j];
         afRank17[j] = 365+temp17[j];
         afRank18[j] = 365+temp18[j];

         year13[j] = new SkyBar(bfPosX[j], bfPosY[0], value13, bfPosX[j], marginL+afRank13[j]*barW);                             
         year14[j] = new SkyBar(bfPosX[j], bfPosY[1], value14, bfPosX[j], marginL+afRank14[j]*barW);
         year15[j] = new SkyBar(bfPosX[j], bfPosY[2], value15, bfPosX[j], marginL+afRank15[j]*barW);
         year16[j] = new SkyBar(bfPosX[j], bfPosY[3], value16, bfPosX[j], marginL+afRank16[j]*barW);
         year17[j] = new SkyBar(bfPosX[j], bfPosY[4], value17, bfPosX[j], marginL+afRank17[j]*barW);
         year18[j] = new SkyBar(bfPosX[j], bfPosY[5], value18, bfPosX[j], marginL+afRank18[j]*barW);
     }
}


function draw(){    
    background(bgcolor);       
    imageMode(CENTER);
    image(logo,width/2,marginT+barH*9,400,50);
    drawYear();
    if (button == "a") {
      drawMonth();

      for(var j = 0; j<6; j++){  
        for(var i = 0; i < yearDays[j]; i++){
               year13[i].bfShow();
               year14[i].bfShow();
               year15[i].bfShow();
               year16[i].bfShow();
               year17[i].bfShow();      
               year18[i].bfShow();       
            }
        }
        if(windowWidth >= 800){
           for(var j = 0; j<6; j++){  
                for(var i = 0; i < yearDays[j];i++){     
                    if(j==3){
                        bfBox(bfPosY[j], j, 2, (j+2013)); 
                    }else{
                        bfBox(bfPosY[j], j, 1, (j+2013)); 
                    }    
                                      
                    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                }       
                 showImg(bfPosX);
            }      
    }else if(button == "b") {
        drawDay();	
        for(var i = 0; i < 366; i++){
           noStroke();
           year13[i].afShow();
           year14[i].afShow();
           year15[i].afShow();
           year16[i].afShow();
           year17[i].afShow();
           year18[i].afShow();
           
        }
         if(windowWidth >= 800){
           for(var j = 0; j<6; j++){  
                for(var i = 0; i < yearDays[j];i++){         
                        // bfBox(bfPosY[j], j, 2, (j+2013));                   
                    } 
                }       
                 // showImg(afPosX);
            }                 
    }
    noStroke();
    drawBtn(btnY);   
    drawLegend(50,100);
}


//everyday aqi bar
function SkyBar(x, y, value, bfX, afX){
    this.pos = createVector(x, y);
    this.easing = 0.1;
    this.bfX = bfX;
    this.afX = afX;

    this.bfShow = function(){  
        for(var i =0; i<pmScale.length-1; i++){
            if (value >= pmScale[i] && value < pmScale[i+1]) {
                fill(colors[i]);      
            }
        }
        //没有这天的数据
        if (value >= 10000) {
            fill(bgcolor);
        }  	
        this.pos.x += (this.bfX-this.pos.x)*this.easing;
        if(windowWidth<800){
            rect(this.pos.y-50,this.pos.x+220,barH,barW);
        }else{
            rect(this.pos.x, this.pos.y, barW, barH);
        }
        
    }

    this.afShow = function(){
    	for(var i =0; i<pmScale.length-1; i++){
            if (value >= pmScale[i] && value < pmScale[i+1]) {
                fill(colors[i]);             
            }
        }
        //没有这天的数据
        if (value >= 10000) {
            fill(bgcolor);
        } 
        this.pos.x += (this.afX-this.pos.x)*this.easing       
        if(windowWidth<800){
            rect(this.pos.y-50,this.pos.x+220,barH,barW);
        }else{
            rect(this.pos.x+barW, this.pos.y, barW, barH);
        }
    }
}


function showImg(posX){
    for(var j = 0; j<6;j++){
        for(var i = 0; i<yearDays[j]; i++){   
            if(mouseX >  posX[i] && mouseX <  posX[i]+barW && mouseY > bfPosY[0] && mouseY < bfPosY[0]+ barH && j == 0){
                image(images13[i],mouseX,bfPosY[0]+barH*0.7+80,120,160);
            }else if( mouseX > posX[i] && mouseX < posX[i]+barW &&mouseY > bfPosY[1] && mouseY < bfPosY[1]+ barH && j == 1){
                image(images14[i],mouseX,bfPosY[1]+barH*0.7+80,120,160);
            }else if( mouseX > posX[i] && mouseX < posX[i]+barW &&mouseY > bfPosY[2] && mouseY < bfPosY[2]+ barH && j == 2){
                image(images15[i],mouseX,bfPosY[2]+barH*0.7+80,120,160);
            }else if( mouseX > posX[i] && mouseX < posX[i]+barW &&mouseY > bfPosY[3] && mouseY < bfPosY[3]+ barH && j == 3){
                image(images16[i],mouseX,bfPosY[3]+barH*0.7+80,120,160);
            }else if( mouseX > posX[i] && mouseX < posX[i]+barW &&mouseY > bfPosY[4] && mouseY < bfPosY[4]+ barH && j == 4){
                image(images17[i],mouseX,bfPosY[4]+barH*0.7+80,120,160);
            }else if( mouseX >  posX[i] && mouseX < posX[i]+barW &&mouseY > bfPosY[5] && mouseY < bfPosY[5]+ barH && j == 5){
                image(images18[i],mouseX,bfPosY[5]+barH*0.7+80,120,160);
            }
        }
    }
}


function bfBox(posY, n, lerp,year) {
    for(var i = 0; i< yearDays[n]; i++){  
        if (mouseX > bfPosX[i] && mouseX < bfPosX[i]+barW && mouseY > posY && mouseY < posY+ barH) {
            noStroke();
            textSize(16);
            textAlign(LEFT);
            var value = data.getNum(i, (n+1)*3+1);
            var day = data.getString(i, lerp);

            //鼠标移动到某个块，周围变白色         
            noFill();
            stroke(255);
            strokeWeight(1);
            rect( bfPosX[i], posY, barW, barH);
            fill(255, 220);
            strokeWeight(10);
            stroke(255, 220);
            rect(mouseX-60,posY+barH*0.7,120,200);

            fill(20);              
            textSize(12);
            noStroke();
            text(year + "年" + day, mouseX - 60, posY+barH*0.7 + 170);
            text("AQI: " + value, mouseX - 60, posY+barH*0.7 + 190);
            }        
        }
}


function drawBtn(btnY) {
    noStroke();
    strokeCap(ROUND);

    fill(btn1Color);
    rect(windowWidth / 2 - btnW, btnY, btnW, btnH);
    fill(btn2Color);
    rect(windowWidth / 2, btnY, btnW, btnH);

    noStroke();
    textAlign(CENTER, CENTER);
    textSize(16);

    fill(txt1Color);
    text("时间", windowWidth / 2 - btnW, btnY, btnW, btnH);

    fill(txt2Color);
    text("AQI", windowWidth / 2, btnY, btnW, btnH);
}



//排序，但不变化位置
function selection(tempX, rankX){
    for(var i = 0; i < rows; i++){
        var record = -1;
        var selectedBar = index;

        for(var j = selectedBar; j < rows; j++){
            if( tempX[j] > record ){
                selectedBar = j;
                record = tempX[j];
            }
        }
        tempX[selectedBar] = rankX;//afRank 没有变化位置，只是把value变成rank的值
        rankX--;
    }
}



function drawLegend(posY) {
    var w_ = 30;
    var posX = windowWidth / 2 - 4 * w_;
    var h = 12;

    noStroke();

    for(var i = 0; i<colors.length-1;i++){
        fill(colors[i]);
        rect(posX+ w_*i, posY, w_, h);
    }

    fill(50);
    textSize(12);
    textAlign(RIGHT);
    text("优", posX - 2, posY+5);
    textAlign(LEFT);
    text("严重污染", posX + 8 * w_ + 2, posY+5);

    if(mouseX > posX  && mouseX <posX + 8 * w_  && mouseY > posY -10 && mouseY < posY +10){
        fill(255,230);
        stroke(220);
        strokeWeight(1);
        rect(width/2-w_*4,posY+20,w_*8,180);

        if(windowWidth > 800){
            for(var i = 0; i<colors.length-1;i++){
                fill(colors[i]);
                noStroke();
                rect(width/2-80, posY + 35+20*i, 10, 10);
                textAlign(LEFT);
                text(degree[i], width/2-60, posY + 35+20*i+5);
            }
        }

    }
}


function drawDay() {
    var b = 7;
    var c = 12;
    if(windowWidth > 800){
        for (var i = 0; i < 366; i += 25) {
        stroke(100);
        strokeWeight(1);
        line(marginL + i * barW, marginT - b, marginL + i * barW, marginT - c);
    }

    line(marginL + 366 * barW, marginT - b, marginL + 366 * barW, marginT - c);

    for (var j = 0; j < 366; j += 50) {
        fill(100);
        noStroke();
        textSize(14);
        textAlign(CENTER);
        text(j, marginL + j * barW, marginT - c - b);
    }
    text(366 + "天", marginL + 366 * barW, marginT - c - b);
    }
}


function drawMonth() {
    fill(100);
    textSize(14);
    textAlign(CENTER);

    stroke(100);
    strokeWeight(1);
    var b = 7;
    var c = 17; 
    if(windowWidth > 800 ){
        for(var i = 0; i < daysline.length;i++){
         line(marginL+(barW)*daysline[i], marginT - b, marginL+(barW)*daysline[i], marginT - c);
         }
    }

     var a = 12;
     noStroke();
     for(var i = 0; i < countDay.length;i++){
        if(windowWidth <= 800 ){
            // text(months[i], marginT,marginL + (barW) * countDay[i]+ ((barW) * days[i]) / 2);
        } else{
            text(months[i],marginL + (barW) * countDay[i]+ ((barW) * days[i]) / 2, marginT - a);
        }  
    }
}

function drawYear() {
    textAlign(RIGHT);
    textSize(14);
    fill(100);
    var b = 5;

    for (var i = 0; i < 6; i++) {
        if(windowWidth <= 800 ){
            text(2013 + i, marginT + barH+i*(barH+spacing)-50,marginL+200);
        }else{
            text(2013 + i, marginL - b, marginT + (2 * i + 1) * (barH / 2) + spacing * i);
        }      
    }
}


function mousePressed() {
    if (mouseX > windowWidth / 2 - btnW && mouseX < windowWidth / 2 &&
        mouseY > btnY && mouseY < btnY + btnH) {
        button = "a";
        btn1Color = color(btn1c);
        btn2Color = color(btn2c);
        txt1Color = color(txt1);
        txt2Color = color(txt2);
    } else if (mouseX > windowWidth / 2 && mouseX < windowWidth / 2 + btnW &&
        mouseY > btnY && mouseY < btnY + btnH) {
        button = "b";
        btn2Color = color(btn1c);
        btn1Color = color(btn2c);
        txt2Color = color(txt1);
        txt1Color = color(txt2);
    }
}