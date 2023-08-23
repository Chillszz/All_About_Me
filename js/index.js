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
document.getElementById('contactme').addEventListener('click',() => {
    smoothScrollToDiv('fourth')
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