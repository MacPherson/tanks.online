define([
    './playground',
    './tank/index',
    'state/dict',
    './env/brick/index',
    './env/grass/index',
    './env/water/index'
], function(Playground, tank, dict, brick, grass, water) {
    var playground = new Playground();

    playground.add(tank(dict.ME, {
        draw: playground.draw,
        clear: playground.clear,
        units: playground.units
    }));

    for(var i = 0; i < 50; i += 1) {
        //playground.add(brick({
        //    draw: playground.draw,
        //    clear: playground.clear
        //}));
        playground.add(grass({
            draw: playground.draw,
            clear: playground.clear
        }));
        playground.add(water({
            draw: playground.draw,
            clear: playground.clear
        }));
    }

    document.body.appendChild(playground.el);
    playground.start();
});