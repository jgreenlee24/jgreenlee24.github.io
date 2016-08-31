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
    $('.project_pic').show();

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

    var projects = [
        { name: 'sitesbyjustin.com',
          desc: "This website underwent 5 different design phases. \
          The site was created using <span style='color: #CF649A'>Sass</span> and \
          <span style='color: #C1272D'> Jade </span> as pre-compiled languages, \
          <span style='color: #E44D26'> HTML5 </span> and \
          <span style='color: #007DC6'> CSS3 </span> after compilation, \
          <span style='color: #116AAE'> jQuery </span> for DOM manipulation, \
          and is hosted via <span style='color: #800080'> Git Pages</span>.",
          techs: ['git', 'html5', 'css3', 'javascript', 'jquery', 'sass'],
          img: 'sites-by-justin'},
        { name: "Amish Furniture",
          desc: "This was my first freelance project. The website was created using a Flash-based \
          CMS called Wix. The user experience for this project included wireframing, prototyping, \
          and continuously re-checking her objective and showing my work. I also managed the content \
          that went on the site as well as the hosting.",
          techs: ['flash'],
          img: 'amish-furniture'},
        { name: "Pichu's Cloud",
          desc: "This file server (cloud) was created using AngularJS, Express, and Multer",
          techs: ['cloud9', 'angular', 'javascript', 'nodejs_small', 'html5', 'css3'],
          img: 'pichu_cloud'},
    ];

    var project_index = 0;
    //control header project component
    var switchProject = function() {
        var p = projects[project_index];
        var img = './img/websites/' + p.img + '.png';

        //update devicons
        $('.technologies').empty();
        for(let tech of p.techs) {
            $('.technologies').append("<span class='devicons devicons-" + tech + "'></span>");
        }

        //update button

        //update project data
        $('.project_name').text(p.name);
        $('.project_desc').html(p.desc);
        $('.project_pic figcaption').text(p.name);
        $('.project_pic img')
            .attr('src', img)
            .width('450px')
            .height('300px')

        //animate everything
        $(".project_name, .project_desc, .technologies, \
          .technologies, .right .button.github, .right .button.cloud9, \
          .right, .project_pic img")
            .animate({'opacity': 1}, 2000)
            .delay(8000)
            .animate({'opacity': 0}, 2000);

        //update index
        if (project_index == projects.length - 1) project_index = 0;
        else project_index++;
    };

    switchProject();
    setInterval(function() {
        switchProject();
    }, 12000);

    //get repo data from github
    $("[data-repo]").github();

    // highlight code
    hljs.initHighlightingOnLoad();
});
