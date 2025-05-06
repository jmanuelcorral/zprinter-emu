import { IncomingMessage, ServerResponse } from 'http'

export function onHttpRequest(req: IncomingMessage, res: ServerResponse): void {
  // Process the incoming HTTP request and send an appropriate response
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from zprinter emulator!')
}
