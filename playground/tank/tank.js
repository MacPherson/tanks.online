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

        tankMove.init(this);
        tankSprite.init(this);
    }
});