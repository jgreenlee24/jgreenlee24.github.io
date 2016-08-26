$(function() {
    //local variables
    var anim = false;
    var hidden = true;
    var terminal = {};

    // gradually types a message in the terminal
    function typed_message(term, message, delay, callback) {
        anim = true;
        var c = 0;
        if (message.length > 0) {
            var interval = setInterval(function() {
                term.insert(message[c++]);

                if (c == message.length) {
                    clearInterval(interval);
                    // execute in next interval
                    setTimeout(function() {
                        // swap command with prompt
                        term.set_command('');
                        term.echo(message);
                        term.set_prompt('> ');
                        callback && callback();
                        // set animation flag to allow keyboard input
                        anim = false;
                    }, delay);
                }
            }, delay);
        }
    }

    function typed_html(term, html, delay, callback) {

    }

    //initialize the terminal with a 'typed' message
    var initTerminal = function(term) {
        // $('.header-social-container').show();
        $('#canvasElement').fadeIn("slow");
        $('.menu-btn').fadeIn("slow");

        var flower = "************************************************";
        var msg = "Welcome to Justin Greenlee's terminal.";
        typed_message(term, flower, 5, function() {
            typed_message(term, msg, 30, function() {
                var msg2 = "Type " + "[[gb;teal;black]" + "help" + "]" + " for commands";
                term.echo(msg2);
                typed_message(term, flower, 5);
            });
        });
    };

    $('.terminal').on('show', function() {
        hidden = false;
        setTimeout(function() {
            initTerminal(terminal);
        }, 2000);
    });

    //terminal control
    $('.terminal').terminal(function(command, term) {
        // general command loop for terminal
        if (command !== '') {
            if (command == 'showPortfolio') {
                //creativecafe.paperplane.io/#/home
                $('.terminal-output').append("<iframe src='portfolio/index.html'>Command failed; please try again.</iframe>");
            } else if (command == 'about') {
                $.get("txt/about.txt", function(response) {
                    typed_message(term, response, 20, function() {
                        $('.terminal-output').append("<iframe src='https://preview.c9users.io/jgreenlee24/my_cloud'/>");
                    });
                });
            } else if (command == 'services') {

            } else if (command == 'help') {
                // display help screen
                term.echo("Available commands");
                term.echo("===================");
                term.echo("[[gb;teal;black]" + "showPortfolio] - shows previous portfolio.");
                term.echo("[[gb;teal;black]" + "about] - shows about page");
                term.echo("[[gb;teal;black]" + "clear] - clears the terminal");
            } else if (command == 'clear') {
                $('terminal-output').empty();
            } else {
                try {
                    var result = window.eval(command);
                    if (result !== undefined) {
                        term.echo(new String(result));
                    }
                } catch (e) {
                    term.error(new String(e));
                }
            }
        } else {
            term.echo('');
        }
    }, {
        name: 'xxx',
        greetings: null,
        width: 500,
        height: 300,
        onInit: function(term) {
            terminal = term;
            $('.terminal').hide();
        },
        keydown: function(e) {
            //disable keyboard when animating
            if (anim || hidden) {
                return false;
            }
        }
    });
});
