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
    $('.sitesbyjustin').show();

    // $('.right').click(function(){
    //     $('figure').hide();
    //     $(order[++index == 4 ? index = 0 : index]).show();
    // });
    //
    // $('.left').click(function(){
    //     $('figure').hide();
    //     $(order[--index == -1 ? index = 3 : index]).show();
    // });

    //adds jQuery.on() for show and hide() events
    $.each(['show', 'hide'], function(i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function() {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });

    //getting code for header code component
    $.each(files, function(index, file) {
        $.get(file, function(response) {
            var doctype = file.substr(1, file.length).split('.').pop();
            $('.' + doctype + ' .code-content').text(response);
        }, 'text');
    });

    //get repo data from github
    $("[data-repo]").github();

    // highlight code
    hljs.initHighlightingOnLoad();
});
