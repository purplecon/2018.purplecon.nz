
// "Juuuuuust kidding"

(function($) {
    "use strict";

    console.log("uh oh, looks like somebody's........ [low voice] hacking")

    var limegags = {
        1: "nice",
        2: "oh ok",
        3: "wow you're really turning up the zing meter",
        5: "zinngggggggg",
        10: "seems like a lot but ok",
        20: "not really sure what to do with these",
        40: "too many to carry, maybe use a wheelbarrow",
        50: "wow you're still going",
        75: "#roadto100",
        100: "you are now logged in to the LIME REALM",
        1000: "definitely hax but ok"
    }

    // don't cryptomine on every page
    if (window.location.pathname === '/') {
        $('body').sakura('start', {
            maxSize: 25,
            minSize: 15,
            newOn: 200
        });
    }
    if (window.location.pathname.startsWith('/blank')) {
        $('body').sakura('start', {
            maxSize: 25,
            minSize: 15,
            newOn: 100
        });
    }
    if (window.location.pathname.startsWith('/haiku')) {
        $('body').sakura('start', {
            maxSize: 25,
            minSize: 15,
            newOn: 100
        });
    }

    var limes = 0;

    var save = function() {
        document.cookie = "limes=" + Number(limes);
    }

    var load = function() {
        var getCookie = function(name) {
          var value = "; " + document.cookie;
          var parts = value.split("; " + name + "=");
          if (parts.length == 2) {
              return parts.pop().split(";").shift();
          }
        }

        var cookieLimes = getCookie('limes');
        if (cookieLimes) {
            limes = Number(cookieLimes);
        }
        return limes
    }

    limes = load();
    var update = function() {
        if (limes > 0) {
            if (limes == 1) { 
                $('#limeplural').html("lime");
            }
            else {
                $('#limeplural').html("limes");
            }
            $('#limebox').show();
            $('#lime-count').text(limes);

            var limePowers = Object.keys(limegags);

            for (var i = 0; i < limePowers.length; i++) {
                // Don't go off the edge of the array (this is redundant lol)
                if (i == limePowers.length - 1) {
                    // This is DUMB.
                    $('#lime-gag').text(limegags[limePowers[limePowers.length- 1]]);
                    break;
                }
                var limePower = limePowers[i];
                var nextLimePower = limePowers[i + 1];
                // If we're between two power levels
                if (limePower <= limes && limes < nextLimePower) {
                    $('#lime-gag').text(limegags[limePower]);


                    break;
                }
            }
        }
    }

    update();

    // kawaii
    $('#petals').click(function() {
        if (limes === 0) {
            $('#limebox').show();
        }
        limes = limes + 1;
        update();
        save();
    });


})(jQuery);
