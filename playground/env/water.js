define(function() {
    function Water() {
        this.type = 'water';
        this.affect = 'slow';
        this.zIndex = 0;

        this.position = {
            unit: {
                x: null,
                y: null
            },
            sprite: {
                x: 232,
                y: 132,
                shot: 0
            }
        };
    }

    return function() {
        return new Water()
    }
});