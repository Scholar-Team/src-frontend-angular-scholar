export interface CreatedTokenEntity {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
  person_name?: string;
  person_id?: number;
  jti?: string;
}
