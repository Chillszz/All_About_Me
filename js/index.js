var toggle = false;
document.getElementById('helpBtn').addEventListener('click',() => {
    if(!toggle) {
        document.getElementById('informationBox').style.right = "65%";
        toggle = true;
    } else {
        document.getElementById('informationBox').style.right = "-2000%";
        toggle = false;
    }
    
})
document.getElementById('home').addEventListener('click',() => {
    smoothScrollToDiv('IntroPage')
})
document.getElementById('aboutme').addEventListener('click',() => {
    smoothScrollToDiv('first')
})
document.getElementById('blogpost').addEventListener('click',() => {
    smoothScrollToDiv('third')
})
document.getElementById('projects').addEventListener('click',() => {
    smoothScrollToDiv('fourth')
})
document.getElementById('contactme').addEventListener('click',() => {
    smoothScrollToDiv('fifth')
})

function smoothScrollToDiv(divId) {
    const element = document.getElementById(divId);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
        });
    } else {
        console.error(`Element with ID '${divId}' not found.`);
    }
}

const images1 = document.querySelectorAll('.slider1 img');
const images2 = document.querySelectorAll('.slider2 img');
const previousImage1 = document.querySelector("#ProjectOne > div.slider1.slider > button:nth-child(4)")
const nextImage1 = document.querySelector("#ProjectOne > div.slider1.slider > button:nth-child(5)")
const previousImage2 = document.querySelector("#ProjectTwo > div.slider2.slider > button:nth-child(4)")
const nextImage2 = document.querySelector("#ProjectTwo > div.slider2.slider > button:nth-child(5)")
let currentIndex1 = 0;
let currentIndex2 = 0;

function reset1() {
    for (let i = 0; i < images1.length; i++) {
      images1[i].classList.remove('active');
    }
}

function reset2() {
    for (let i = 0; i < images2.length; i++) {
      images2[i].classList.remove('active');
    }
}


function initializeSlider1() {
    reset1();
    images1[currentIndex1].classList.add('active');
}

function initializeSlider1() {
    reset1();
    images1[currentIndex1].classList.add('active');
}

function initializeSlider2() {
    reset2();
    images2[currentIndex2].classList.add('active');
}

function initializeSlider2() {
    reset2();
    images2[currentIndex2].classList.add('active');
}


function slideLeft1() {
    reset1();
    currentIndex1--;
    if (currentIndex1 < 0) {
      currentIndex1 = images1.length - 1;
    }
    images1[currentIndex1].classList.add('active');
}
  
function slideRight1() {
    reset1();
    currentIndex1++;
    if (currentIndex1 >= images1.length) {
        currentIndex1 = 0;
    }
    images1[currentIndex1].classList.add('active');
}

function slideLeft2() {
    reset2();
    currentIndex2--;
    if (currentIndex2 < 0) {
      currentIndex2 = images2.length - 1;
    }
    images2[currentIndex2].classList.add('active');
}
  
function slideRight2() {
    reset2();
    currentIndex2++;
    if (currentIndex2 >= images2.length) {
        currentIndex2 = 0;
    }
    images2[currentIndex2].classList.add('active');
}

initializeSlider1();
initializeSlider2();

previousImage1.addEventListener('click', function() {
  slideLeft1();
});

nextImage1.addEventListener('click', function() {
  slideRight1();
});

previousImage2.addEventListener('click', function() {
    slideLeft2();
});
  
nextImage2.addEventListener('click', function() {
    slideRight2();
})

const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
    body.classList.toggle('dark-mode');

    const modeMessage = body.classList.contains('dark-mode') ? 'Dark Mode' : "Light Mode";
    document.querySelector('#Nav').classList.toggle("NavDM")
    document.querySelectorAll('.NavItem').forEach(item => {
        item.classList.toggle('NavItemDm');
    })
    document.querySelector('#first').classList.toggle('firstDM')
    document.querySelector('#fourth').classList.toggle('fourthDM')
    document.querySelector('#fifth').classList.toggle('fifthDM')
    document.querySelector('#socials').classList.toggle('socialsDM')
    document.querySelector('#darkmodeV').classList.toggle('darkmodeVDM')

}

modeToggle.addEventListener('click', toggleMode);