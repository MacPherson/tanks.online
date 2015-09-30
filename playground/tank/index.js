define([
    './tank',
    './control'
], function(Tank, userControl) {
    return function(type, playground) {
        return new Tank(type, playground, new userControl());
    }
});