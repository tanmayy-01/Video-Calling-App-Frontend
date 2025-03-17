import socketioClient from 'socket.io-client';
import { createContext } from 'react';

const WB_Server = 'http://localhost:5500';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocketContext = createContext<any | null>(null);

const socket = socketioClient(WB_Server);

interface Props {
    children: React.ReactNode;
}

export const SocketProvider: React.FC<Props> = ({children}) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}