define(['playground/check-collisions'], function(checkCollisions) {
    return function(playground) {
        this.type = 'water';
        this.zIndex = 1;

        this.position = {
            water: {
                x: 100,
                y: 100
            },
            sprite: {
                x: 232,
                y: 132,
                shot: 0
            }
        };

        this.checkCollisions = function(tankPosition, triggerEvent) {
            var collisions = checkCollisions(tankPosition.x, tankPosition.y, this.position.water.x, this.position.water.y);
            if (collisions.is) {
                return {
                    action: 'slow',
                    matrix: collisions.matrix
                }
            }
        }.bind(this);

        this.draw = function() {
            playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.water.x, this.position.water.y);
        };

        this.setPosition = function(x, y) {
            this.position.water.x = x;
            this.position.water.y = y;
        };
    }
});