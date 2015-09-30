define(function() {
    var img = document.createElement('img');
    img.src = 'playground/resources/sprite.png';

    return {
        get: function(callback) {
            if (img.complete) {
                callback(img)
            } else {
                img.onload = function() {
                    callback(img);
                    img.onload = null;
                }
            }
        }
    }
});