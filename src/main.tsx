import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SocketProvider } from './Context/SocketContext.tsx'

createRoot(document.getElementById('root')!).render(
 <SocketProvider>
    <App/>
 </SocketProvider>
)
