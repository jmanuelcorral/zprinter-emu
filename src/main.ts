import * as net from 'net'
import * as http from 'http'
import { onHttpRequest } from './http.js'
import { onRawRequest } from './socket.js'

export async function run(): Promise<number> {
  try {
    const httpServer = http.createServer(onHttpRequest)
    const httpPort = process.env.HTTP_PORT ? Number(process.env.HTTP_PORT) : 80
    httpServer.listen(httpPort, () =>
      console.log(`HTTP server listening on port ${httpPort}`)
    )

    const rawServer = net.createServer(onRawRequest)
    const rawPort = process.env.RAW_PORT ? Number(process.env.RAW_PORT) : 9100
    rawServer.listen(rawPort, () =>
      console.log(`Raw socket server listening on port ${rawPort}`)
    )
    return 0
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) return -1
    return -2
  }
}
