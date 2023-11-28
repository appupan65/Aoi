var cursor = document.querySelector('.cursor'),
    cursorscale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0
gsap.to({},0.016,{
    repeat:-1,


    onRepeat:function(){
        gsap.set(cursor , {
            css:{
                left:mouseX,
                top:mouseY
            }
        })

    } 
});


window.addEventListener("mousemove",function(e){
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorscale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');    
        cursor.classList.remove('grow-small');

    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small1')){
            cursor.classList.add('grow-small');

        }

    });
});

 type="text/javascript"> (function(d, t) { var v = d.createElement(t),
 s = d.getElementsByTagName(t)[0]; v.onload = function() { window.voiceflow.chat.load({ verify: { projectID: '6561c1b19599e20007a2c578' }, 
 url: 'https://general-runtime.voiceflow.com', versionID: 'production' });
 } 
 v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s); })(document, 'script');
    
