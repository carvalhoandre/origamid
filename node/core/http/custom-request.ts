import type { IncomingMessage } from 'node:http';
import { parseCookie } from '../utils/parse-cookie.ts';
import { Session } from '../../api/auth/types.ts';

export interface CustomRequest extends IncomingMessage {
  query: URLSearchParams;
  pathname: string;
  body: Record<string, any>;
  params: Record<string, any>;
  method: string;
  ip: string;
  session: Session | null;
  cookies: Record<string, string | undefined>;
}

export async function customRequest(request: IncomingMessage) {
  const req = request as CustomRequest;
  const url = new URL(req.url || '', 'http://localhost');
  req.query = url.searchParams;
  req.pathname = url.pathname;
  req.params = {};
  req.body = {};
  req.ip = req.socket.remoteAddress || '127.0.0.1';
  req.cookies = parseCookie(req.headers.cookie);
  req.session = null;
  
  return req;
}
