define(['playground/check-collisions'], function(checkCollisions) {
    return function(playground) {
        this.type = 'water';
        this.zIndex = 0;

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
            if (checkCollisions(triggerEvent, tankPosition.x, tankPosition.y, this.position.water.x, this.position.water.y)) {
                return {
                    action: 'slow'
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