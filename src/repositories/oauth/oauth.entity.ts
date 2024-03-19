export interface ILoginPayload {
  email: string;
  password: string;
}
export interface ILoginResponse {
  id: string;
  name: string;
  email: string;
  address: string;
  token: string;
  discord: string;
  twitter: string;
}
export interface IOauthLoginResponse {
  id: string;
  seq_id: number;
  email: string;
  token: string;
}
