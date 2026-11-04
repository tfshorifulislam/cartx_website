/**
 * CartX Public Website — Authentication Types
 *
 * Defines login and registration credentials, validation contracts,
 * and standardized API responses.
 */

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  termsAccepted: boolean;
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
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    termsAccepted?: string;
  };
}

export type AuthResponse = AuthSuccessResponse | AuthErrorResponse;

export interface ValidationResult {
  valid: boolean;
  errors: {
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    termsAccepted?: string;
  };
}
