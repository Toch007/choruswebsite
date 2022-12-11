var navLinks = document.getElementById("navLinks")
        function showMenu() {
            navLinks.style.right = "0";
        }
        function hideMenu() {
            navLinks.style.right = "-200px";
        }


const header = document.querySelector("nav")
const sectionTop = document.querySelector(".header")

const faders = document.querySelectorAll(".fade-in");

const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
    rootMargin: "0px 0px -200px 0px"
}

const topSectionObserver = new IntersectionObserver(function(
    entries, 
    topSectionObserver
    ) {
        entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav-alt");
        } else {
            header.classList.remove("nav-alt")
        }
        });
    }, 
    sectionOneOptions);
    
    topSectionObserver.observe(sectionTop);


    const appearOptions = {
       threshold: 0,
        rootMargin: "0px 0px -300px 0px"        
    }

    const appearOnScroll = new IntersectionObserver 
    (function(
        entries, 
        appearOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("appear");
                    appearOnScroll.unobserve(entry.target);
                }
            });
        },
        appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });

        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
        