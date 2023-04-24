let btnOne = document.querySelector('.seven-btn')
let modalBlock = document.querySelector(".modal")
let close = document.querySelector(".close")
let ton = document.querySelectorAll(".ton")
let iframes = document.querySelectorAll(".iframes")
let video = document.querySelector('.video')
let about = document.querySelector('.flexOne')
let open = document.querySelector('.faq')
let opensTree = document.querySelector('.opens-tree')
let svg = document.querySelector('.svg-or')
let ad = document.querySelector('.ad-one')


btnOne.addEventListener("click", () => {
    modalBlock.style.display = "block"
})
close.onclick = () =>{
    modalBlock.style.display = "none"
}
window.onclick = (e) =>{
    if (e.target === modalBlock){
        modalBlock.style.display = "none"
    }
}
ton.forEach((el) => {
    el.addEventListener("click", (event) => {
        modalBlock.style.display = "block";
    });
});
iframes.forEach((el) => {
    el.addEventListener("click", (event) => {
        video.style.display = "block";
    });
});
window.onclick = (e) =>{
    if (e.target === video){
        video.style.display = "none"
    }
}
about.onclick = () => {
    if (open.style.maxHeight === "0px" || opensTree.style.transform === "rotate(0)") {
        open.style.maxHeight = "500px"
        opensTree.style.transform ="rotate(360deg)"

    } else {
        open.style.maxHeight = "0px"
        opensTree.style.transform ="rotate(0)"
    }
}
svg.onclick = () => {
    if (ad.style.maxHeight === '40px') {
        ad.style.maxHeight = '100px'
    } else {
        ad.style.maxHeight = '40px'
    }
}




$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
});
