define(function() {
    var KEYCODES = {
        38: 'top',
        39: 'right',
        40: 'bottom',
        37: 'left',
        32: 'fire'
    };

    var callbacks = [];
    var interceptors = [];

    document.addEventListener('keydown', function(event) {
        var typeEvent = KEYCODES[event.keyCode];
        if (typeEvent) {
            callbacks.forEach(function(callback) {
                if (callback.sub[typeEvent]) {
                    var interceptorBeforeResult = true;
                    interceptors.forEach(function(interceptor) {
                        if (interceptor.sub.before) {
                            var result = interceptor.sub.before.call(interceptor.context, typeEvent);
                            if (result === false) {
                                interceptorBeforeResult = result
                            }
                        }
                    });
                    if (interceptorBeforeResult) {
                        callback.sub[typeEvent].call(callback.context);
                        interceptors.forEach(function(interceptor) {
                            if (interceptor.sub.after) {
                                interceptor.sub.after.call(interceptor.context, typeEvent);
                            }
                        });
                    }
                }
            });
        }
    }, false);

    return {
        on: function(sub, context) {
            callbacks.push({
                sub: sub,
                context: context
            });
        },
        interceptor: function(sub, context) {
            interceptors.push({
                sub: sub,
                context: context
            });
        }
    };
});