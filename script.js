const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleSkewOnMovement(){
    // define deFAULT scale value 
    var xscale=1;
    var yscale=1;
    var Xprevious=0;
    var Yprevious =0;
     
    window.addEventListener("mousemove",function(dets){
        var Xdiff=dets.clientX-Xprevious;
        var Ydiff=dets.clientY-Yprevious;
        xscale=gsap.utils.clamp(.8,1.2,Xdiff);
        yscale= gsap.utils.clamp(.8,1.2,Ydiff);
        Xprevious=dets.clientX;

        Yprevious=dets.clientY;
        // convert to range---> clamp function



circleMouseFollower(xscale,yscale);


    })
}

function firstPageAnim(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: "expo.easeInOut"
    })

      .to(".boundingelem",{
        y:'-10',
        duration:1.5,
        ease: "expo.easeInOut",
                delay:-1,

        stagger:0.2//delay from others
    })
    .from("#landingpage-footer",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: "expo.easeInOut"
    })


}


function circleMouseFollower(xscale,yscale){
    window.addEventListener('mousemove',function(dets){
document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })

}
circleSkewOnMovement();

circleMouseFollower();
firstPageAnim();




document.querySelectorAll('.element').forEach(function(element){
    var Rotate=0;
    var diffForRotate=0;


  element.addEventListener("mouseleave", function (dets) {
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: "power3.out" ,
      duration: 0.5,
    });
  });


    element.addEventListener("mousemove",function(details){


// to get details of position of  any element = getBoundingClientRect



            diffForRotate=details.clientX-Rotate;
            Rotate=details.clientX;



        var completeMouseDistance=details.clientY;
        var TopElementDistance=element.getBoundingClientRect().top;

        var ImageTopDistance= completeMouseDistance-TopElementDistance;
       


        


        gsap.to(element.querySelector('img'),
    {
        opacity:1,
        ease: "power1.out",
        top:ImageTopDistance,
        left:details.clientX,
        rotate:gsap.utils.clamp(-20,20,diffForRotate),

    })
       details.clientX;
       details.clientY; 
         
    })
})








