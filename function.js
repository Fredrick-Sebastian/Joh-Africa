const sidebar = document.querySelector('.sidebar')

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slides').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slides').prepend(items[items.length - 1])
})

var swiper = new Swiper(".swiper",{
    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:4,
        slideShadows:true
    },
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    keyboard:{
        enabled:true
    },
    mousewheel:{
        thresholDelta:70
    },
    breakpoints:{
        560:{
            slidesPerView: 2.5
        },
        768:{
            slidesPerView: 3
        },
        1024:{
            slidePerView: 3
        }
    }
});

function showSidebar(){
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    sidebar.style.display = 'none'
}

