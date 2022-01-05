$( document ).ready(function() {
    $('#maintitle').html(localStorage.getItem('name'))
    $('#mainvideo').attr('src',localStorage.getItem('link'))
});
    
