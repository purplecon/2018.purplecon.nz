
// Yeah it's called "freelancer.js" what EVER do not @ me

(function($) {
    "use strict";

    // Why is it "toothbrushes"? It's "teethbrush" and you know it.

    // kawaii
    var peaceful = false;
    $('#petals').click(function() {
        if (!peaceful) {
            $('body').sakura();
            peaceful = true;
        }
        else {
            // =[
            $('body').sakura('stop');
            peaceful = false;
        }
    });


})(jQuery);
