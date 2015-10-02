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
        units: playground.units
    }));

    for(var i = 0; i < 50; i += 1) {
        playground.add(brick({
            draw: playground.draw
        }));
        playground.add(grass({
            draw: playground.draw
        }));
        playground.add(water({
            draw: playground.draw
        }));
    }

    document.body.appendChild(playground.el);
    playground.start();
});