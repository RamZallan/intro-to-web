const transitionTime = 1;
let currScroll = 0;
$(document).keydown(function(e) {
    let key = e.which;
    if (key == 40) {
        e.preventDefault();
        var pageHeight = $(window).height();
        $('html, body').animate({
            scrollTop: currScroll + pageHeight
        }, transitionTime);
        if (currScroll >= $(document).height() - pageHeight) {
            return true;
        }
        currScroll += pageHeight;
    }
    if (key == 38) {
        e.preventDefault();
        var pageHeight = $(window).height();
        $('html, body').animate({
            scrollTop: currScroll - pageHeight
        }, transitionTime);
        if (currScroll == 0) {
            return true;
        }
        currScroll -= pageHeight;
    }
});
