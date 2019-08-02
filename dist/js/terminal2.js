$(function() {
    //global variables
    var anim = false;

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
                        callback && callback();
                        // swap command with prompt
                        term.set_command('');
                        term.echo(message);
                        term.set_prompt('> ');
                        // set animation flag to allow keyboard input
                        anim = false
                    }, delay);
                }
            }, delay);
        }
    }

    //initialize the terminal with a 'typed' message
    var initTerminal = function(term) {
        var msg = "Justin Greenlee";
        term.set_prompt('> ');

        typed_message(term, msg, 200, function() {
            setTimeout(function() {
                typed_message(term, 'cmd', 200, function() {
                    $('.terminal').show();
                    $('.term2').hide();
                });
            }, 1000);
        });
    }

    //terminal control
    $('.term2').terminal(function(command, term) {
        // general command loop for terminal
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch (e) {
                term.error(new String(e));
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
            initTerminal(term);
        },
        keydown: function(e) {
            return false;
        }
    });
});
