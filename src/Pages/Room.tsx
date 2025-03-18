import { useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { SocketContext } from '../Context/SocketContext';

const Room: React.FC = () => {
    const {id} = useParams();
    const socket = useContext(SocketContext);
    // emitting this event so that either creator of room or joinee in the room
    // anyone is added the server knows that new people have been added to this room
    useEffect(() => {
        socket.emit('joined-room',{ roomId: id});
    },[])
    return (
        <div>
            room : {id}
        </div>
    )
}

export default Room;