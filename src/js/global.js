$('.icon,.wooden').hover(function() {
    const a = Math.random() * 15 - 5;
    $(this).css('transform', 'rotate(' + a + 'deg) scale(1.07)');
}, function() {
    $(this).css('transform', 'none');
});

$(document).ready(function() {
    const currentYear = new Date().getFullYear();
    $('#copyright-date').text('est. 2023 - ' + currentYear);
});