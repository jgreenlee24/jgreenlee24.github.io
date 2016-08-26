var file_index = 1;
var files = ['./index.html', './js/source.js', './pre-compile/sass/index.scss'];
var imgs = {'html': './img/dev/html5-original.png',
            'angular': './img/dev/angularjs-original.png',
            'csharp': './img/dev/csharp-original.png',
            'scss': './img/dev/sass-original.png',
            'js': './img/dev/nodejs-original.png'};

$(document).ready(function() {

    // initialize page
    $('#fixed-top').hide();
    $('#fixed-left').hide();
    $('.fixed-left-button').hide();
    $('code').hide();
    $('.html').show();
    $('.html .code-content').show();

    //getting code for header code component
    $.each(files, function(index, file) {
        $.get(file, function(response) {
            var doctype = file.substr(1, file.length).split('.').pop();
            $('.' + doctype + ' .code-content').text(response);
        });
    });

    //adds jQuery.on() for show and hide() events
    $.each(['show', 'hide'], function(i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function() {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });

    //click events
    $('.menu-square').click(function() {
        $('#fixed-left').fadeToggle('slow');
    });

    //scroll events
    $(window).scroll(function() {
        // enable only after about section has been reached
        if ($(this).scrollTop() >= $('#about').position().top) {
            $('#fixed-top').show();
            $('.fixed-left-button').show();
            setTimeout(function() {
                $('#fixed-top').hide();
            }, 5000);
        } else {
            $('fixed-top').hide();
            $('.fixed-left-button').hide();
        }
        /* Check the location of each desired element */
        $('.hideme').each( function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });

    // highlight code
    hljs.initHighlightingOnLoad();

    // start code switch animation
    // repeat();
});

var repeat = function() {
    // load next code-content
    var file = files[file_index++];
    var doctype = file.substr(1, file.length).split('.').pop();
    if (file_index > files.length - 1) file_index = 0;
    $('code').hide();
    $('.' + doctype).show();
    $('.' + doctype + ' .code-content').show();
    $('.code-lang').attr("src", imgs[doctype]);
    // progress bar animation
    $('#bar').width(0);
    $('#bar').animate({width: '100%'}, 10000, repeat);
};

var scrollTo = function(eID) {
    $('html, body').animate({
        scrollTop: $("#" + eID).offset().top
    }, 2000);
};
