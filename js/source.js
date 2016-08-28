var file_index = 1;
var files = ['./index.html', './js/source.js',
            './pre-compile/sass/index.scss'];
var imgs = {'html': './img/dev/html5-original.png',
            'angular': './img/dev/angularjs-original.png',
            'csharp': './img/dev/csharp-original.png',
            'scss': './img/dev/sass-original.png',
            'js': './img/dev/nodejs-original.png'};

$(document).ready(function() {

    $('figure').hide();
    var order = ['.amishfurniture', '.clocksnthings',
                 '.forbiddentruth', '.rockwallfcm'];
    var index = 0;
    $('.amishfurniture').show();

    $('.right').click(function(){
        $('figure').hide();
        $(order[++index == 4 ? index = 0 : index]).show();
    });

    $('.left').click(function(){
        $('figure').hide();
        $(order[--index == -1 ? index = 3 : index]).show();
    });

    //adds jQuery.on() for show and hide() events
    $.each(['show', 'hide'], function(i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function() {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
});
