import React, { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";

const CreateRoom: React.FC = () => {
    const socket = useContext(SocketContext);
    const initRoom = () => {
        socket.emit('create-room');
    }
    return (
        <button className="btn btn-secondary" onClick={initRoom}>
            Start New Meeting !
        </button>
    )
}

export default CreateRoom;