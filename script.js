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
function page2(){
    gsap.from(".category",{
        opacity:0,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page2 h1",
            scroller:"body",
            start:"top 50%"
        }
    })
}
page2()
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
function page3(){
    gsap.from("#watch-container img",{
        scale:0,
        opacity:0,
        duration:2,
        delay:0.5,
        scrollTrigger:{
            trigger:"#watch-container img",
            scroller:"body"
        }
    })
}
page3()
page4()
function page5(){
}
page5()
function page6(){
    var vid=document.querySelector("#page6 video");
    vid.addEventListener("mouseenter",function(){
        vid.play();
    })
    vid.addEventListener("mouseleave",function(){
        vid.pause();
    })
}
page6()
function footer(){
    var tl=gsap.timeline();
    tl.from(".fl,.fc,.fr",{
        opacity:0,
        duration:2,
        delay:0.1,
        stagger:0.4,
        scrollTrigger:{
            trigger:".fl,.fc,.fr",
            scroller:"body"
        }
    })
    tl.from("#horizontal-ruler,#footer-p h1,#footer-p h5",{
        opacity:0,
        duration:2,
        delay:0.1,
        stagger:0.4,
        scrollTrigger:{
            trigger:".fl,.fc,.fr",
            scroller:"body"
        }
    })
}
footer()
