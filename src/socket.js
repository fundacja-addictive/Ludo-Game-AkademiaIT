import socketio from 'socket.io-client';

class socket {
    constructor () {
        this.io = new socketio('http://10.100.102.172:8081');
    }

    emit (eventName, data) {
        return this.io.emit(eventName, data);
    }
}

export default new socket();