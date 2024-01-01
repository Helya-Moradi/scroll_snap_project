const navbarItems = document.querySelectorAll('nav div')
const slides = document.querySelectorAll('.slides a')

navbarItems.forEach(item => {

    item.addEventListener('click', (e) => {
        if (e.target.tagName === "DIV") {

            navbarItems.forEach(nav=>{
                nav.classList.remove('select')
            })

            e.target.classList.add('select')

            const id=e.target.dataset.id;
            document.getElementById(id).scrollIntoView({behavior:'smooth'})
        }
    })
})

slides.forEach(slide => {

    slide.addEventListener('click', (e) => {
        if (e.target.tagName === "A") {
            slides.forEach(s=>{
                s.classList.remove('select')
            })

            e.target.classList.add('select')

            const id=e.target.dataset.id;
            document.getElementById(id).scrollIntoView({behavior:'smooth'})
        }
    })
})

// const pictures=document.querySelector('.pictures')
//
// let to;
// pictures.addEventListener('scroll',()=>{
//     clearTimeout(to);
//     to = setTimeout(() => {
//         pictures.style.gap='100vw'
//         Array.from(pictures.children).forEach((el) => {
//             const {left: l} = el.getBoundingClientRect();
//
//             el.classList.toggle('snapped', l > 0 && l < window.innerWidth);
//         });
//         pictures.style.gap=null
//     }, 100)
// })