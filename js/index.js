
//Attaching navbar to every page
const navbar = document.querySelector('.custom-navbar');
fetch("../assets/header.html")
.then(res => res.text())
.then(data =>{
    navbar.innerHTML = data;
})


//Attaching footer to every page
const footer = document.querySelector('.custom-footer');
fetch("../assets/footer.html")
.then(res => res.text())
.then(data =>{
    footer.innerHTML = data;
})

//Implementing responsive behaviour of navbar
function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
function closeSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}


// Carousel animation
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// Back-to-top
$(window).on('scroll', function() {
    //back to top button control
    if ($(window).scrollTop() > 300) {
        $('#back-to-top').addClass('back-btn-shown');
    } else {
        $('#back-to-top').removeClass('back-btn-shown');
    }

});

/*===== back to top button click control ======*/
$(document).on("click", '#back-to-top', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 3);
    return false;
});


// Function for counters
// let counts = setInterval(updated);
// let upto = 0;
// function updated() {
//     let count = document.querySelector(".counter-total");
//     count.innerHTML = ++upto;
//     if (upto === 1000) {
//         clearInterval(counts);
//     }
// }