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
        units: playground.units,
        draw: playground.draw
    }));

    for(var i = 0; i < 50; i += 1) {
        playground.add(brick({
            units: playground.units
        }));
        playground.add(grass());
        playground.add(water());
    }

    document.body.appendChild(playground.el);
    playground.start();
});