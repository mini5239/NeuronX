/*nav*/
$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 500) {
            $("#gotop").fadeIn();
      
            $("#top-btn").click(function(){
                $(window).scrollTop(0);
            });
         }
         else {
             $("#gotop").fadeOut();
         }    
    });
});

function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    $(".mainMenu").toggleClass("active");
    $(".mainMenu a").toggleClass("active");
}



c=b.getContext('2d');
MAX =900*60;
onload = function update() {

  requestAnimationFrame(update);
  
  //init
  if (!window.time) {
    time=0;
    frame=0;
    timeNextFrame=0;
    vines = [{x:0, y:0, a:0, ai:0, w:8, p:[],l:MAX}]
  }
  
  currentTime = performance.now()/1000;
  while (time<currentTime) {
    while(time<timeNextFrame) {
      time += 1/16384;
    }
    frame++;
    timeNextFrame += 1/60;                             
  
  
    //update vine
    vines=vines.filter(v => v.l--);
    vines.forEach(v=> {
    dx = Math.cos(v.a) * v.w /2;
    dy = Math.sin(v.a) * v.w /2;
    v.x += dx;
    v.y += dy;
    v.a += v.ai/ v.w / 2;
    v.p.splice(0, v.p.length-600);
    v.p.push({x:v.x, y:v.y, dx:dx, dy:dy});
    if(frame % 30 ==0) {
    v.ai = Math.random()-.5;
    }
    if(v.w > 1 && Math.random() < v.l / 16384 / 2) {
      vines.push({x:v.x, y:v.y, a:v.a, ai:v.ai, w:v.w/2, p:[],l:Math.min(v.l, 0|v.w*32*(1+Math.random()))});    
    }
                                   
  })
}
  
  //visuals
  H = b.height=512;
  W = b.width = 0 | H * innerWidth / innerHeight;
  c.translate(W/2, H/2);
  //c.shadowBlur = 24;                                   
  vines.forEach(v => {
    c.shadowColor =
    c.strokeStyle = 'hsl('+(v.a*60|0)+',100%,'+(60+v.w*5)+'%)';
    if(v.w ==8) {
      c.translate(-v.x, -v.y); 
    }
    c.beginPath();
    l=v.p.length-1;
    for(i=l;p=v.p[i];i--) {
      c.lineTo(p.x,p.y);
    }
    c.stroke();
  })

}

/*소개 이미지*/
const deliveryImg = document.getElementById('delivery-img');

// 마우스가 이미지 위로 올라올 때
deliveryImg.addEventListener('mouseover', function() {
    deliveryImg.style.transform = 'scale(1.3, 1.2)';
});

// 마우스가 이미지에서 벗어날 때
deliveryImg.addEventListener('mouseout', function() {
    deliveryImg.style.transform = 'scale(1, 1)'; // 원래 크기로 복구
});


