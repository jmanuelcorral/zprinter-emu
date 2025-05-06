import { Socket } from 'net'

export function onRawRequest(socket: Socket) {
  socket.on('data', data => {
    // Process incoming data from the socket
    console.log('Received data:', data.toString())

    // Here you can add logic to handle the data received
    // For example, you might want to send a response back to the socket
    socket.write('Data received')
  })

  socket.on('error', err => {
    console.error('Socket error:', err)
  })

  socket.on('end', () => {
    console.log('Socket connection ended')
  })
}
