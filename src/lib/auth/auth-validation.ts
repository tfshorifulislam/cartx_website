/**
 * CartX Public Website — Authentication Validation
 *
 * Implements client and pre-flight validation rules for login inputs.
 * Ensures consistent email format and password length requirements.
 */

import { LoginCredentials, ValidationResult } from "./auth-types";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

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

