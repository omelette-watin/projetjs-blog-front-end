
    window.onscroll = function(e) {
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('#header');

    // scrollY <= this.lastScroll
    //     ? header.classList.toggle('.is-hidden')
    //     : header.classList.toggle('.is-hidden');
    console.log(window.innerHeight);
    if (scrollY <= 10 ) {
    header.classList.remove('is-hidden');
    header.classList.remove('is-fixed');
} else {
    if (scrollY <= this.lastScroll && scrollY >= window.innerHeight) {

    header.classList.remove("is-hidden");
    header.classList.add("is-fixed");
}
    if (scrollY >= this.lastScroll && scrollY >= window.innerHeight ) {
    header.classList.add("is-hidden")
}
}


    this.lastScroll = scrollY ;

}
