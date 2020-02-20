window.addEventListener("DOMContentLoaded", (event) => {

    let observer = new IntersectionObserver((entries => {
        entries.forEach((entrie) => {
            if (entrie.intersectionRatio > 0.7) {
                entrie.target.classList.remove('not-visible')
                entrie.target.classList.add('zoomIn')
            }
        })
    }), {
        threshold: [0.7] // 70% of vision
    })

    let items = document.querySelectorAll('.animation')
    items.forEach((item) => {
        item.classList.add('not-visible')
        observer.observe(item)
    })

    let arrow = document.querySelector(".arrow")
    arrow.addEventListener("click", function( event ) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })



})