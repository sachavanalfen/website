document.querySelectorAll('.scroller')[0].addEventListener("scroll", function(e){
    const currentScrollPos = e.currentTarget.scrollTop;
    const currentColumnHeight = document.querySelectorAll('.scrolling-pane1 .timeline')[0].clientHeight;
    const otherColumnHeight = document.querySelectorAll('.scrolling-pane2 .timeline2')[0].clientHeight;

    document.querySelectorAll('.scrolling-pane2')[0].scrollTop = currentScrollPos * (otherColumnHeight / currentColumnHeight);
});
