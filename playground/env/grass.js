define(function() {
    function Grass() {
        this.type = 'grass';
        this.zIndex = 2;

        this.position = {
            unit: {
                x: null,
                y: null
            },
            sprite: {
                x: 199,
                y: 132,
                shot: 0
            }
        };
    };

    return function() {
        return new Grass();
    }
});