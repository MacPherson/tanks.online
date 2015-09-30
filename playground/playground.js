define([
    'state/dict',
    './resources/index'
], function(dict, resources) {
    return function() {
        var canvas = document.createElement('canvas');
        var canvasContext = canvas.getContext('2d');
        canvas.width = dict.canvas.WIDTH;
        canvas.height = dict.canvas.HEIGHT;
        playground = this;

        function render() {
            requestAnimationFrame(render.bind(this));
            this.units.sort(function(prev, next) {
                return prev.zIndex - next.zIndex
            }).forEach(function(unit) {
                unit.draw();
            });
        }

        function applyFirstPositions() {
            var positionMatrix = new Array(parseInt((dict.canvas.WIDTH / 45) * (dict.canvas.HEIGHT / 45)) - this.units.length).join(0).split('').map(Number);
            positionMatrix = positionMatrix.concat(this.units);
            positionMatrix = positionMatrix.sort(function() {
                return Math.random() - 0.5
            });
            positionMatrix.forEach(function(pos, index) {
                if (pos) {
                    pos.setPosition(
                        Math.floor(index % (dict.canvas.WIDTH / 45)) * 45,
                        Math.floor(index / (dict.canvas.WIDTH / 45)) * 45
                    );
                    if (pos.type.indexOf('tank') > -1) {
                        pos.position.tank.dir = ['top', 'right', 'bottom', 'left'][parseInt(Math.random() * 4)];
                        pos.changeSpritePosition(pos.position.tank.dir);
                    }
                }
            });
        }

        this.el = canvas;
        this.units = [];
        this.add = function(unit) {
            this.units.push(unit);
        };
        this.start = function() {
            applyFirstPositions.call(this);
            render.call(this);
        }.bind(this);
        this.clear = function(positionX, positionY, width, height) {
            canvasContext.clearRect(positionX, positionY, width, height);
        };
        this.draw = function(spriteX, spriteY, positionX, positionY) {
            resources.get(function(sprite) {
                canvasContext.drawImage(sprite, spriteX, spriteY, 30, 30, positionX, positionY, 45, 45);
                canvasContext.clip()
            });
        };
    };
});