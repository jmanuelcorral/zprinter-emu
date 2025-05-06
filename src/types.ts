export interface HttpRequest {
  method: string
  url: string
  headers: Record<string, string>
  body?: any
}

export interface HttpResponse {
  statusCode: number
  headers: Record<string, string>
  body?: any
}

import { Buffer } from 'buffer'

export interface RawRequest {
  data: Buffer
}

export interface RawResponse {
  data: Buffer
}
