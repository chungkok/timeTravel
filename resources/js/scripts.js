cssVars();

// open navigation

$('.nav-prompt').click(function () {
    if($('.nav-inner').attr('aria-expanded') == 'false') {
        $('.nav-inner').attr('aria-expanded', 'true');
    } else {
        $('.nav-inner').attr('aria-expanded', 'false');
    }

    // change the text
    if ($('.nav-prompt').text() == 'Open Navigation') {
        $('.nav-prompt').text('Close Navigation');
    } else {
        $('.nav-prompt').text('Open Navigation');
    }
})

// nav active class
function activeMenu() {
    var url = window.location.href;

    $('.nav-inner a').filter(function() {
        return this.href == url;
    }).addClass('active');
}

// run the function
activeMenu()

// image gallery
function imageGallery() {

    if (!$('.image-gallery').length) {
        return;
    }

    $('.image-gallery a').simpleLightbox();
}

imageGallery();