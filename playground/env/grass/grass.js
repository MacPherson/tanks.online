define(['playground/check-collisions'], function(checkCollisions) {
    return function(playground) {
        this.type = 'grass';
        this.zIndex = 2;

        this.position = {
            unit: {
                x: 100,
                y: 100
            },
            sprite: {
                x: 199,
                y: 132,
                shot: 0
            }
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