window.onload  = function () {
    AppJS.ready();
};

var AppJS = {

    ready: function () {
        AppJS.handlers();
        AppJS.sliderInit();
    },

    handlers: function () {
        // $('.choiceMethod .methodItem').on(              'click',   function()  { AppJS.sliderInit(); });
    },

    sliderInit: function () {
        $(".slider").slider({
            orientation: "vertical",
            min: 0,
            max: 100,
            step: 5,
            values: [ 25, 50, 75, 100 ],
            start: function (event, ui) {
                // console.log("start");
            },
            stop: function (event, ui) {
                // console.log("stop");
            },
            change: function(event, ui) {
                // console.log('change', ui.values);
            },
            slide: function( event, ui ) {
                if (ui.handleIndex == ui.values.length - 1) {
                    event.preventDefault();
                    return;
                }
                var realVal = ui.value;
                var prev = ui.values[ui.handleIndex - 1];
                var next = ui.values[ui.handleIndex + 1];
                if (ui.value <= prev) {
                    event.preventDefault();
                    realVal = prev + 5;
                } else if (ui.value >= next) {
                    event.preventDefault();
                    realVal = next - 5;
                }
                console.log(realVal, ui);
            }
        });
    }
};


