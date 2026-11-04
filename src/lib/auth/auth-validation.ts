/**
 * CartX Public Website — Authentication Validation
 *
 * Implements client and pre-flight validation rules for login and registration inputs.
 * Ensures consistent email format, password length, and confirmation matching.
 */

import {
  LoginCredentials,
  RegisterCredentials,
  ValidationResult,
} from "./auth-types";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function validateFullName(name: string, isBn = false): string | null {
  const trimmed = name ? name.trim() : "";
  if (!trimmed) {
    return isBn ? "পুরো নাম আবশ্যক।" : "Full name is required.";
  }
  if (trimmed.length < 2) {
    return isBn
      ? "নাম কমপক্ষে ২ অক্ষরের হতে হবে।"
      : "Full name must be at least 2 characters.";
  }
  return null;
}

export function validateEmail(email: string, isBn = false): string | null {
  const trimmed = email ? email.trim() : "";
  if (!trimmed) {
    return isBn ? "ইমেইল ঠিকানা আবশ্যক।" : "Email address is required.";
  }
  if (!EMAIL_REGEX.test(trimmed)) {
    return isBn
      ? "অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা দিন।"
      : "Please enter a valid email address.";
  }
  if (trimmed.length > 254) {
    return isBn
      ? "ইমেইল ঠিকানা অতিরিক্ত দীর্ঘ।"
      : "Email address cannot exceed 254 characters.";
  }
  return null;
}

export function validatePassword(password: string, isBn = false): string | null {
  if (!password) {
    return isBn ? "পাসওয়ার্ড আবশ্যক।" : "Password is required.";
  }
  if (password.length < 6) {
    return isBn
      ? "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।"
      : "Password must be at least 6 characters.";
  }
  return null;
}

export function validateRegisterPassword(
  password: string,
  isBn = false
): string | null {
  if (!password) {
    return isBn ? "পাসওয়ার্ড আবশ্যক।" : "Password is required.";
  }
  if (password.length < 8) {
    return isBn
      ? "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।"
      : "Password must be at least 8 characters.";
  }
  return null;
}

export function validateConfirmPassword(
  password: string,
  confirmPassword?: string,
  isBn = false
): string | null {
  if (!confirmPassword) {
    return isBn
      ? "পাসওয়ার্ড নিশ্চিতকরণ আবশ্যক।"
      : "Please confirm your password.";
  }
  if (password !== confirmPassword) {
    return isBn
      ? "পাসওয়ার্ড দুটি মিলছে না।"
      : "Passwords do not match.";
  }
  return null;
}

export function validateTermsAccepted(
  termsAccepted: boolean,
  isBn = false
): string | null {
  if (!termsAccepted) {
    return isBn
      ? "এগিয়ে যেতে শর্তাবলী ও গোপনীয়তা নীতি সম্মতি আবশ্যক।"
      : "You must accept the Terms of Service and Privacy Policy to proceed.";
  }
  return null;
}

export function validateLoginCredentials(
  credentials: LoginCredentials,
  isBn = false
): ValidationResult {
  const emailError = validateEmail(credentials.email, isBn);
  const passwordError = validatePassword(credentials.password, isBn);

  const errors: ValidationResult["errors"] = {};
  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateRegisterCredentials(
  credentials: RegisterCredentials,
  isBn = false
): ValidationResult {
  const fullNameError = validateFullName(credentials.fullName, isBn);
  const emailError = validateEmail(credentials.email, isBn);
  const passwordError = validateRegisterPassword(credentials.password, isBn);
  const confirmPasswordError = validateConfirmPassword(
    credentials.password,
    credentials.confirmPassword,
    isBn
  );
  const termsError = validateTermsAccepted(credentials.termsAccepted, isBn);

  const errors: ValidationResult["errors"] = {};
  if (fullNameError) errors.fullName = fullNameError;
  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;
  if (termsError) errors.termsAccepted = termsError;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
