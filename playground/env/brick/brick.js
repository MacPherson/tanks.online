define(function() {
    return function(playground) {
        this.type = 'brick';
        this.zIndex = 2;

        this.position = {
            unit: {
                x: 100,
                y: 100
            },
            sprite: {
                x: 165,
                y: 132,
                shot: 0
            }
        };

        this.levelDestroy = 0;

        this.destroy = function() {
            if (this.levelDestroy === 1) {
                playground.units.splice(playground.units.indexOf(this), 1);
                return;
            }

            this.position.sprite.x = 264;
            this.position.sprite.y = 165;
            this.levelDestroy += 1;
        };
    }
});