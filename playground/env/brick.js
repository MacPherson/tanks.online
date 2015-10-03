define(function() {
    function Brick() {
        this.type = 'brick';
        this.affect = 'stop';
        this.zIndex = 2;

        this.position = {
            unit: {
                x: null,
                y: null
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
                this.playground.units.splice(this.playground.units.indexOf(this), 1);
                return;
            }

            this.position.sprite.x = 264;
            this.position.sprite.y = 165;
            this.levelDestroy += 1;
        };
    };

    return function(playground) {
        Brick.prototype.playground = playground;
        return new Brick();
    }
});