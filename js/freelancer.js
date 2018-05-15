
// Yeah it's called "freelancer.js" what EVER do not @ me

// Why is it "toothbrushes"? It's "teethbrush" and you know it.
(function($) {
    "use strict";

    var limegags = {
        1: "nice one",
        2: "mmm, limey",
        3: "wow you're really turning up the zing meter",
        5: "whew, ya sure like limes",
        10: "seems like a lot but ok",
        20: "not really sure what to do with these",
        40: "maybe lemonade? limeonade? probs not",
        50: "wow you're still going",
        75: "#roadto100",
        100: "you are now logged in to the LIME REALM",
        1000: "definitely hax but ok"
    }

    $('body').sakura();
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
                console.log(i);
                // Don't go off the edge of the array.
                if (i == limePowers.length - 1) {
                    // This is DUMB.
                    $('#lime-gag').text(limegags[limePowers[limePowers.length- 1]]);
                    break;
                }
                var limePower = limePowers[i];
                var nextLimePower = limePowers[i + 1];
                console.log(limePower + "|" + nextLimePower);
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
