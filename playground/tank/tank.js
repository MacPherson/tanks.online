define([
    'state/dict',
    './move',
    './sprite'
], function(dict, tankMove, tankSprite) {
    return function(type, playground, userControl) {
        this.type = 'tank:' + type;
        this.zIndex = 1;
        this.DEFAULT_SPEED = 3;
        this.speed = this.DEFAULT_SPEED;

        this.playground = playground;
        this.userControl = userControl;

        this.position = {
            unit: {
                x: 100,
                y: 100,
                dir: 'bottom'
            },
            sprite: {
                x: 529,
                y: 67,
                shot: 0
            }
        };

        this.draw = function() {
            playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.unit.x, this.position.unit.y);
        }.bind(this);

        this.setPosition = function(x, y) {
            this.position.unit.x = x;
            this.position.unit.y = y;
        };

        tankMove.init(this);
        tankSprite.init(this);
    }
});