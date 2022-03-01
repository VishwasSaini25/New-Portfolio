function myfunction(){
    var preload = document.getElementById("cont");
     var rootid = document.getElementById("mainbody");
     rootid.style.display="none";
    setTimeout(() => {
    preload.style.display = "none";
    rootid.style.display = "block";
    }, 3000);
};  

// active navigation
document.getElementById("home-nav").addEventListener("click",function (){
    document.getElementById("home-nav").classList.add("active");
    document.getElementById("about-nav").classList.remove("active");
    document.getElementById("skills-nav").classList.remove("active");
    document.getElementById("contact-nav").classList.remove("active");
    document.getElementById("projects-nav").classList.remove("active");
    document.getElementById("navbar").style.background="#F90716";

})
document.getElementById("about-nav").addEventListener("click",function (){
    document.getElementById("about-nav").classList.add("active");
    document.getElementById("home-nav").classList.remove("active");
    document.getElementById("skills-nav").classList.remove("active");
    document.getElementById("contact-nav").classList.remove("active");
    document.getElementById("projects-nav").classList.remove("active");
    document.getElementById("navbar").style.background="#FF5403";
    window.scroll({
        top:650,
        left:0,
        behavior:"smooth"
    });
})
document.getElementById("skills-nav").addEventListener("click",function (){
    document.getElementById("skills-nav").classList.add("active");
    document.getElementById("home-nav").classList.remove("active");
    document.getElementById("about-nav").classList.remove("active");
    document.getElementById("contact-nav").classList.remove("active");
    document.getElementById("projects-nav").classList.remove("active");
    document.getElementById("navbar").style.background="#ff9903";
    window.scroll({
        top:1630,
        left:0,
        behavior:"smooth"
    });
})
document.getElementById("projects-nav").addEventListener("click",function (){
    document.getElementById("projects-nav").classList.add("active");
    document.getElementById("about-nav").classList.remove("active");
    document.getElementById("skills-nav").classList.remove("active");
    document.getElementById("contact-nav").classList.remove("active");
    document.getElementById("home-nav").classList.remove("active");
    document.getElementById("navbar").style.background="#FFCA03";
    window.scroll({
        top:1980,
        left:0,
        behavior:"smooth"
    });
})
document.getElementById("contact-nav").addEventListener("click",function (){
    document.getElementById("contact-nav").classList.add("active");
    document.getElementById("about-nav").classList.remove("active");
    document.getElementById("skills-nav").classList.remove("active");
    document.getElementById("home-nav").classList.remove("active");
    document.getElementById("projects-nav").classList.remove("active");
    document.getElementById("navbar").style.background="#FFF323";
    window.scroll({
        top:3150,
        left:0,
        behavior:"smooth"
    });
})
document.getElementById("hire").addEventListener("click",function(){
    document.getElementById("navbar").style.background="#FFF323";
    window.scroll({
        top:3150,
        left:0,
        behavior:"smooth"
    });
})

// navbar background
if($(window).width() > 760){
window.addEventListener("scroll",function(){
    if(window.scrollY < 595){
        document.getElementById("navbar").style.background="#F90716";
    }
    if(window.scrollY > 595){
        document.getElementById("navbar").style.background="#FF5403";
    }    
    if(window.scrollY > 1620){
    document.getElementById("navbar").style.background="#ff9903";
    }
    if(window.scrollY > 2620){
    document.getElementById("navbar").style.background="#FFCA03";
    }
    if(window.scrollY > 3720){
    document.getElementById("navbar").style.background="#FFF323";
    }
})
}

// display skills
document.getElementById("button-skills").addEventListener("click",function(){
    document.getElementById("button-skills").style.display="none";
    document.getElementById("loading-skills").style.display="flex";
    document.getElementById("icons-container").style.display = "none";
    document.getElementById("shrink-wrap").style.margin = "0";
    setInterval(() => {
    document.getElementById("loading-skills").style.display="none";
    document.getElementById("icons-container").style.display = "flex";
    document.getElementById("shrink-wrap").style.margin = "auto 3rem";
    document.getElementById("cert").style.display="block";
    document.getElementById("skills-note").style.display="block";
    },3000 );      
    });
document.getElementById("left-text-btn").addEventListener("click",function(){
    window.scroll({
        top:1980,
        left:0,
        behavior:"smooth"
    });
    document.getElementById("navbar").style.background="#FFCA03";
})
document.getElementById("get-in-touch").addEventListener("click",function(){
    window.scroll({
        top:3500,
        left:0,
        behavior:"smooth"
    });
    document.getElementById("navbar").style.background="#FFF323";
})
// skill percentage
document.getElementById("html").addEventListener("mouseenter",function(){
    document.getElementById("html").innerHTML = "100%";
})
document.getElementById("html").addEventListener("mouseleave",function(){
    document.getElementById("html").innerHTML = "HTML5"
})
document.getElementById("css").addEventListener("mouseenter",function(){
    document.getElementById("css").innerHTML = "100%";
})
document.getElementById("css").addEventListener("mouseleave",function(){
    document.getElementById("css").innerHTML = "CSS"
})
document.getElementById("js").addEventListener("mouseenter",function(){
    document.getElementById("js").innerHTML = "95%";
})
document.getElementById("js").addEventListener("mouseleave",function(){
    document.getElementById("js").innerHTML = "Javascript"
})
document.getElementById("jq").addEventListener("mouseenter",function(){
    document.getElementById("jq").innerHTML = "90%";
})
document.getElementById("jq").addEventListener("mouseleave",function(){
    document.getElementById("jq").innerHTML = "Jquery"
})
document.getElementById("mn").addEventListener("mouseenter",function(){
    document.getElementById("mn").innerHTML = "90%";
})
document.getElementById("mn").addEventListener("mouseleave",function(){
    document.getElementById("mn").innerHTML = "MONGO DB"
})
document.getElementById("node").addEventListener("mouseenter",function(){
    document.getElementById("node").innerHTML = "100%";
})
document.getElementById("node").addEventListener("mouseleave",function(){
    document.getElementById("node").innerHTML = "Node js"
})
document.getElementById("exp").addEventListener("mouseenter",function(){
    document.getElementById("exp").innerHTML = "90%";
})
document.getElementById("exp").addEventListener("mouseleave",function(){
    document.getElementById("exp").innerHTML = "Express js"
})
document.getElementById("react").addEventListener("mouseenter",function(){
    document.getElementById("react").innerHTML = "90%";
})
document.getElementById("react").addEventListener("mouseleave",function(){
    document.getElementById("react").innerHTML = "React js"
})
document.getElementById("gith").addEventListener("mouseenter",function(){
    document.getElementById("gith").innerHTML = "80%";
})
document.getElementById("gith").addEventListener("mouseleave",function(){
    document.getElementById("gith").innerHTML = "Github"
})
document.getElementById("git").addEventListener("mouseenter",function(){
    document.getElementById("git").innerHTML = "80%";
})
document.getElementById("git").addEventListener("mouseleave",function(){
    document.getElementById("git").innerHTML = "Git"
})
document.getElementById("hype").addEventListener("mouseenter",function(){
    document.getElementById("hype").innerHTML = "100%";
})
document.getElementById("hype").addEventListener("mouseleave",function(){
    document.getElementById("hype").innerHTML = "Hyper Terminal"
})
document.getElementById("vs").addEventListener("mouseenter",function(){
    document.getElementById("vs").innerHTML = "100%";
})
document.getElementById("vs").addEventListener("mouseleave",function(){
    document.getElementById("vs").innerHTML = "VS Code"
})
document.getElementById("sub").addEventListener("mouseenter",function(){
    document.getElementById("sub").innerHTML = "100%";
})
document.getElementById("sub").addEventListener("mouseleave",function(){
    document.getElementById("sub").innerHTML = "Sublime"
})
document.getElementById("res").addEventListener("mouseenter",function(){
    document.getElementById("res").innerHTML = "100%";
})
document.getElementById("res").addEventListener("mouseleave",function(){
    document.getElementById("res").innerHTML = "Responsive Websites"
})

// project hover

document.getElementById("card-project1").addEventListener("mouseenter",function(){
    document.getElementById("card-project1").style.height="63.5%";
    document.getElementById("card-project1").style.opacity= "1";
})
document.getElementById("card-project1").addEventListener("mouseleave",function(){
    document.getElementById("card-project1").style.height="0";
    document.getElementById("card-project1").style.opacity= "0";
})

document.getElementById("card-project2").addEventListener("mouseenter",function(){
    document.getElementById("card-project2").style.height="100%";
    document.getElementById("card-project2").style.opacity= "1";
})
document.getElementById("card-project2").addEventListener("mouseleave",function(){
    document.getElementById("card-project2").style.height="0";
    document.getElementById("card-project2").style.opacity= "0";
})

document.getElementById("card-project3").addEventListener("mouseenter",function(){
    document.getElementById("card-project3").style.height="100%";
    document.getElementById("card-project3").style.opacity= "1";
})
document.getElementById("card-project3").addEventListener("mouseleave",function(){
    document.getElementById("card-project3").style.height="0";
    document.getElementById("card-project3").style.opacity= "0";
})

document.getElementById("card-project4").addEventListener("mouseenter",function(){
    document.getElementById("card-project4").style.height="100%";
    document.getElementById("card-project4").style.opacity= "1";
})
document.getElementById("card-project4").addEventListener("mouseleave",function(){
    document.getElementById("card-project4").style.height="0";
    document.getElementById("card-project4").style.opacity= "0";
})

// scroll animation
window.addEventListener("scroll",function (){
    document.getElementById("about").style.visibility="none";
    if(window.scrollY > 300){
        document.getElementById("about").style.visibility="visible";
        document.getElementById("about-title").classList.add("slide-in-right");
        document.getElementById("about-ques").classList.add("slide-in-right");
        document.getElementById("about-image").classList.add("slide-in-right");
        document.getElementById("about-text").classList.add("fadein"); 
    }
    });

window.addEventListener("scroll",function (){
    document.getElementById("shrink-wrap").style.visibility="none";
    if(window.scrollY > 1000){
    document.getElementById("shrink-wrap").style.visibility="visible";
    document.getElementById("skills-title").classList.add("slide-in-right");
        document.getElementById("skills-posses").classList.add("slide-in-right");
        document.getElementById("skills-known").classList.add("slide-in-right");
        document.getElementById("button-skills").classList.add("fadein");
    }
});
window.addEventListener("scroll",function (){
    document.getElementById("project-wrap").style.visibility="none";
    if(window.scrollY > 1730){
    document.getElementById("project-wrap").style.visibility="visible";
        document.getElementById("project-title").classList.add("slide-in-right");
        document.getElementById("projecth3").classList.add("slide-in-right");
        document.getElementById("project1").classList.add("slide-in-right");
        document.getElementById("project2").classList.add("slide-in-left");
        document.getElementById("project3").classList.add("slide-in-right");
        document.getElementById("project4").classList.add("slide-in-left");
    }
});
window.addEventListener("scroll",function(){
    if(window.scrollY > 2500){
        document.getElementById("contact-title").classList.add("slide-in-right");
        document.getElementById("contact-h3").classList.add("slide-in-right");
        document.getElementById("contact-p").classList.add("slide-in-right");
    }
    if(window.scrollY > 2600){
        document.getElementById("form").classList.add("fadein");
        document.getElementById("socials").classList.add("fadein");
    }
});