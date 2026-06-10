import type { IncomingMessage } from 'node:http';
import { parseCookie } from '../utils/parse-cookie.ts';
import type { Session } from '../../api/auth/types.ts';
import { SERVER_NAME } from '../../env.js';

export interface CustomRequest extends IncomingMessage {
  query: URLSearchParams;
  pathname: string;
  body: Record<string, unknown>;
  params: Record<string, string>;
  method: string;
  ip: string;
  session: Session | null;
  cookies: Record<string, string | undefined>;
  baseUrl: string;
}

function getIp(ip: string | string[] | undefined): string {
  if (ip === undefined) return '';
  
  if (typeof ip === 'string') {
    return ip.split(',')[0].trim();
  }

  if (Array.isArray(ip) && typeof ip[0] === 'string') {
    return ip[0].split(',')[0].trim();
  }
  return '';
}


export async function customRequest(request: IncomingMessage) {
  const req = request as CustomRequest;
  req.baseUrl = `https://${SERVER_NAME}`;
  const url = new URL(req.url || '', req.baseUrl);
  req.query = url.searchParams;
  req.pathname = url.pathname;
  req.params = {};
  req.body = {};
  req.ip = getIp(req.headers['x-forwarded-for']);
  req.cookies = parseCookie(req.headers.cookie);
  req.session = null;
  
  return req;
}
