+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';
    var SENSOR_WABOT = 0x2A;
    var self;
    var proto;
    var Module = scope.Module;

    function wabot(board, rx, tx) {
        Module.call(this);
        this._board = board;
        self = this;
        self.callback = {};
        board.send([0xF0, 0x04, SENSOR_WABOT, 0x01 /*standard*/ , 0xF7]);
        board.on(webduino.BoardEvent.SYSEX_MESSAGE, function(event) {
            var m = event.message;
            if (m[0] == 0x04 && m[1] == SENSOR_WABOT) {
                var callbackType = m[2];
                switch (callbackType) {
                    case 0:
                        console.log("waBot create OK");
                        break;
                        /*walk done*/
                    case 2:
                        console.log("walk callback:", m[3]);
                        if ('walk' in self.callback) {
                            self.callback['walk']();
                        }
                        break;
                }
            }
        });
    }

    wabot.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: wabot
        }
    });

    proto.standard = function(step, callback) {
        this.callback['standard'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x01, 0, 0xF7];
        this._board.send(cmd);
    }

    proto.walk = function(step, callback) {
        this.callback['walk'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x02, step, 0xF7];
        this._board.send(cmd);
    }

    proto.run = function(step, callback) {
        this.callback['run'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x03, step, 0xF7];
        this._board.send(cmd);
    }

    proto.backyard = function(step, callback) {
        this.callback['backyard'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x04, step, 0xF7];
        this._board.send(cmd);
    }

    proto.backyardSlow = function(step, callback) {
        this.callback['backyardSlow'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x05, step, 0xF7];
        this._board.send(cmd);
    }

    proto.turnLeft = function(step, callback) {
        this.callback['turnLeft'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x07, step, 0xF7];
        this._board.send(cmd);
    }

    proto.turnRight = function(step, callback) {
        this.callback['turnRight'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x06, step, 0xF7];
        this._board.send(cmd);
    }

    proto.moonWalkLeft = function(step, callback) {
        this.callback['moonWalkLeft'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x08, step, 0xF7];
        this._board.send(cmd);
    }

    proto.moonWalkRight = function(step, callback) {
        this.callback['moonWalkRight'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x09, step, 0xF7];
        this._board.send(cmd);
    }

    proto.crusaito = function(step, callback) {
        this.callback['crusaito'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x0A, step, 0xF7];
        this._board.send(cmd);
    }

    proto.swing = function(step, callback) {
        this.callback['swing'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x0B, step, 0xF7];
        this._board.send(cmd);
    }

    proto.upDown = function(step, callback) {
        this.callback['upDown'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x0C, step, 0xF7];
        this._board.send(cmd);
    }

    proto.flapping = function(step, callback) {
        this.callback['swing'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x0D, step, 0xF7];
        this._board.send(cmd);
    }
    proto.dance = function(step, callback) {
        this.callback['dance'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x0E, 0, 0xF7];
        this._board.send(cmd);
    }
    proto.kickLeft = function(tempo, callback) {
        this.callback['kickLeft'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x0F, tempo, 0xF7];
        this._board.send(cmd);
    }
    proto.kickRight = function(tempo, callback) {
        this.callback['kickRight'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x10, tempo, 0xF7];
        this._board.send(cmd);
    }
    proto.goingUp = function(tempo, callback) {
        this.callback['goingUp'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x11, tempo, 0xF7];
        this._board.send(cmd);
    }
    proto.noGravity = function(tempo, callback) {
        this.callback['noGravity'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x12, tempo, 0xF7];
        this._board.send(cmd);
    }
    proto.drunk = function(tempo, callback) {
        this.callback['drunk'] = callback;
        var cmd = [0xF0, 0x04, SENSOR_WABOT, 0x13, tempo, 0xF7];
        this._board.send(cmd);
    }


    scope.module.wabot = wabot;
}));