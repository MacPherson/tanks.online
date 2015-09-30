define(['playground/check-collisions'], function(checkCollisions) {
    return function(playground) {
        this.type = 'grass';
        this.zIndex = 1;

        this.position = {
            grass: {
                x: 100,
                y: 100
            },
            sprite: {
                x: 199,
                y: 132,
                shot: 0
            }
        };

        this.checkCollisions = function(tankPosition, triggerEvent) {
            var collisions = checkCollisions(tankPosition.x, tankPosition.y, this.position.grass.x, this.position.grass.y);
            if (collisions.is) {
                return {
                    action: 'hide',
                    matrix: collisions.matrix
                }
            }
        }.bind(this);

        this.draw = function() {
            playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.grass.x, this.position.grass.y);
        };

        this.setPosition = function(x, y) {
            this.position.grass.x = x;
            this.position.grass.y = y;
        };
    }
});