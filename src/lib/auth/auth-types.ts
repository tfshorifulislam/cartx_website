/**
 * CartX Public Website — Authentication Types
 *
 * Defines login credentials, validation contracts, and standardized API responses.
 */

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role?: string;
  storeName?: string;
  avatarUrl?: string;
}

export interface AuthSuccessResponse {
  success: true;
  user: AuthUser;
  token?: string;
  message?: string;
}

export interface AuthErrorResponse {
  success: false;
  message: string;
  errorCode?: string;
  fieldErrors?: {
    email?: string;
    password?: string;
  };
}

export type AuthResponse = AuthSuccessResponse | AuthErrorResponse;

export interface ValidationResult {
  valid: boolean;
  errors: {
    email?: string;
    password?: string;
  };
}
