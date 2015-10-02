define(['playground/check-collisions'], function(checkCollisions) {
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

        this.draw = function() {
            playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.unit.x, this.position.unit.y);
        };

        this.setPosition = function(x, y) {
            this.position.unit.x = x;
            this.position.unit.y = y;
        };
    }
});