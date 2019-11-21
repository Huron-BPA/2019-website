$(function () {
    jQuery.each($('[data-load]'), function () {
        // this refers to the element
        $(this).load("/" + $(this).data("load"))
    })
})

$(function () {
    $(document).scroll(function () {
        // toggle if greater than height
        $(".navbar").toggleClass('navbar-dark bg-dark see-through transition', $(window).scrollTop() > $(window).height() * .8);
    });
});