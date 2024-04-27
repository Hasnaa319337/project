/* eslint-disable regex/invalid */

import { env } from '@core/utils/env'
import { io } from 'socket.io-client'

const socketIns = io(
  env('VITE_WHATSAPP_SOCKET_URL', 'https://test-server.apploxa.com'),
  {
    transports: ['websocket', 'polling', 'flashsocket'],
  }
)

export default socketIns
