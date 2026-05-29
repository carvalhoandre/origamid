export type UserRole = "admin" | "editor" | "user";

export type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
  role: UserRole;
  password_hash: string;
  created: string;
  updated: string;
};

export type UserSummary = {
  id: number;
  name: string;
  created: string;
  email: string;
  total: number;
};  


export type UserCreate = Omit<UserData, "id" | "created" | "updated">;

export type SessionData = {
  sid_hash: Buffer;
  user_id: number;
  created: number;
  expires: number;
  ip: string;
  ua: string;
  revoked: number;
};

export type SessionCreate = Omit<
  SessionData,
  "created" | "revoked" | "expires"
> & { expires_ms: number };

export type Session = {
  user_id: number;
  role: UserRole;
  expires_ms: number;
};

export type SessionValidateResult = {
  valid: boolean;
  cookie: string;
  session?: Session;
};

export type SessionCreateParams = { userId: number; ip: string; ua: string };

export type ResetData = {
  token_hash: Buffer;
  user_id: number;
  created: number;
  expires: number;
  ip: string;
  ua: string;
};

export type ResetCreate = Omit<ResetCreate, "created" | "expires"> & {
  expires_ms: number;
};
