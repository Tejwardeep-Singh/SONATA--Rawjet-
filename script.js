window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".pg0-queue",{
            animationName:"anime"
        })
    }

    else{
        gsap.to(".pg0-queue",{
            animationName:"anime2"
        })
    }
})
window.addEventListener("wheel",function(){
    gsap.to("nav",{
        backgroundColor:"#433326c8"
    })
    gsap.to(".nl-img",{
        backgroundColor:"white",
        borderRadius:"20px"
    })
    gsap.to("#magnifying-glass , #menu,.nr-1,#nr span",{
        color:"wheat"
    })
})
window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to("#watch-queue2",{
            animationName:"anime2"
        })
    }

    else{
        gsap.to("#watch-queue2",{
            animationName:"anime"
        })
    }
})
window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to("#pg1-container",{
            transform:"scale(1.2)",
        })
    }

    else{
        gsap.to("#pg1-container",{
            transform:"scale(1)"
        })
    }
})
function nav(){
    tl = gsap.timeline();

    tl.from("#menu",{
        x:100,
        opacity:0,
        duration:1,
        stagger:0.5
    }) 

    tl.from("#nl img,#search-bar,.nl img ,.nr span,.nr i",{
        y:-100,
        duration:1,
        delay:0.5,
        opacity:0,
        stagger:0.5
    })

    var box2 = document.querySelector("#menu")

    box2.addEventListener("click",function(){
        gsap.to("#nr",{
            display:"flex"
        })
    })

    box2.addEventListener("mouseleave",function(){
        gsap.to("#nr",{
            display:"none",
            delay:3
        })
    })

}
nav()
function page1(){
    var tl=gsap.timeline()
    tl.from("#page1 #text",{
        x:-1000,
        y:-500,
        duration:1,
        opacity:0
    })
    tl.from("#page1 #pg1-image-container",{
        x:1000,
        y:500,
        duration:1,
        opacity:0
    })
}
page1()
function page2(){
    gsap.from(".category",{
        opacity:0,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page2 h1",
            scroller:"body",
            start:"top bottom",
            end:"bottom top"
        }
    })
}
page2()
function page3(){
    gsap.from("#watch-container img,#watch-queue1",{
        scale:0,
        opacity:0,
        duration:2,
        stagger:0.5,
        scrollTrigger:{
            trigger:"#watch-container img ,watch-queue1",
            scroller:"body",
        }
    })
}
page3()
function page4(){
    var tl=gsap.timeline();
    tl.from("#pg4-container h1",{
        opacity:0,
        duration:1,
        delay:0.5,
        scrollTrigger:{
            trigger:"#pg4-container h1",
            scroller:"body",
            start:"top 100%"
        }
    })
    tl.from("#page4 .collection",{
        opacity:0,
        duration:2,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page4 .collection",
            scroller:"body",
            start:"top 100%"
        }
    })
}
page4()
function page5(){
    gsap.from(".slide",{
        opacity:0,
        duration:1,
        stagger:0.5,
        scrollTrigger:{
            trigger:".slide",
            scroller:"body",
        }
    })
}
page5()
function page6(){
    gsap.from("#page6 #video",{
        opacity:0,
        duration:1,
        scale:"0",
        scrollTrigger:{
            trigger:"#page6 #video",
            scroller:"body"
        }
    })
    var vid=document.querySelector("#page6 video");
    vid.addEventListener("mouseenter",function(){
        vid.play();
    })
    vid.addEventListener("mouseleave",function(){
        vid.pause();
    })
}
page6()
function page7(){
    gsap.from("#pg7-container .trending",{
        opacity:0,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#pg7-container .trending",
            scroller:"body",
        }
    })
}
page7()
function page9(){
    gsap.from("#pg9-container a",{
        opacity:0,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#pg9-container a",
            scroller:"body",
        }
    })
}
page9()
function footer(){
    gsap.from("#footer .fl,#footer .fc,#footer .fr",{
        opacity:0,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#footer .fl,#footer .fc,#footer .fr",
            scroller:"body",
        }
    })
}
footer()
function footer_p(){
    var tl2=gsap.timeline();
    gsap.from("#horizontal-ruler",{
        opacity:0,
        duration:0.5,
        delay:0.5,
        scrollTrigger:{
            trigger:"#horizontal-ruler",
            scroller:"body"
        }
    })
    tl2.from("#footer-p h1",{
        x:-1000,
        opacity:0,
        duration:0.5,
        delay:0.5,
        scrollTrigger:{
            trigger:"#footer-p h1",
            scroller:"body"
        }
    })
    tl2.from("#footer-p h5",{
        x:1000, 
        opacity:0,
        duration:0.5,
        delay:0.5,
        scrollTrigger:{
            trigger:"#footer-p h5",
            scroller:"body"
        }
    })
}
footer_p()