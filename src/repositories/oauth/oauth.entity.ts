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
}
