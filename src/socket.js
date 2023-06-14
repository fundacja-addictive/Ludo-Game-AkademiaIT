import socketio from 'socket.io-client';

class socket {
    constructor () {
        this.io = new socketio('http://localhost:8081');
    }

    emit (eventName, data) {
        return this.io.emit(eventName, data);
    }
}

export default new socket();