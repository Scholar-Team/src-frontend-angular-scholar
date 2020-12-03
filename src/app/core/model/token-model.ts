export interface Token {
  user_name?: string;
  scope?: string[];
  active?: boolean;
  person_name?: string;
  exp?: number;
  authorities?: string[];
  jti?: string;
  client_id?: string;
  person_id?: number;
}
