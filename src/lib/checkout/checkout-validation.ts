import {
  CheckoutCustomerInfo,
  CheckoutValidationResult,
} from "./checkout-types";

// RFC 5322 simplified email regex
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Standard phone format (supports BD 01XXXXXXXXX / +8801XXXXXXXXX and general 10-15 digit numbers)
const PHONE_REGEX = /^(?:\+?880|0)?1[3-9]\d{8}$/;

export function validateFullName(name: string, isBn: boolean): string | null {
  const trimmed = (name || "").trim();
  if (!trimmed) {
    return isBn ? "আপনার পুরো নাম আবশ্যক।" : "Full name is required.";
  }
  if (trimmed.length < 2) {
    return isBn
      ? "নাম কমপক্ষে ২ অক্ষরের হতে হবে।"
      : "Full name must be at least 2 characters.";
  }
  return null;
}

export function validateStoreName(store: string, isBn: boolean): string | null {
  const trimmed = (store || "").trim();
  if (!trimmed) {
    return isBn
      ? "স্টোর বা ব্র্যান্ডের নাম আবশ্যক।"
      : "Store or brand name is required.";
  }
  if (trimmed.length < 2) {
    return isBn
      ? "স্টোরের নাম কমপক্ষে ২ অক্ষরের হতে হবে।"
      : "Store name must be at least 2 characters.";
  }
  return null;
}

export function validateEmail(email: string, isBn: boolean): string | null {
  const trimmed = (email || "").trim();
  if (!trimmed) {
    return isBn ? "ইমেইল ঠিকানা আবশ্যক।" : "Email address is required.";
  }
  if (!EMAIL_REGEX.test(trimmed)) {
    return isBn
      ? "অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা প্রদান করুন।"
      : "Please enter a valid email address.";
  }
  return null;
}

export function validatePhone(phone: string, isBn: boolean): string | null {
  const trimmed = (phone || "").replace(/[\s-]/g, "");
  if (!trimmed) {
    return isBn
      ? "মোবাইল বা হোয়াটসঅ্যাপ নম্বর আবশ্যক।"
      : "Mobile or WhatsApp number is required.";
  }
  if (!PHONE_REGEX.test(trimmed)) {
    return isBn
      ? "অনুগ্রহ করে একটি সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01712345678)।"
      : "Please enter a valid mobile number (e.g., 01712345678).";
  }
  return null;
}

export function validateCheckoutCustomerInfo(
  info: CheckoutCustomerInfo,
  isBn: boolean = false
): CheckoutValidationResult {
  const errors: Partial<Record<keyof CheckoutCustomerInfo, string>> = {};

  const nameError = validateFullName(info.fullName, isBn);
  if (nameError) errors.fullName = nameError;

  const storeError = validateStoreName(info.storeName, isBn);
  if (storeError) errors.storeName = storeError;

  const emailError = validateEmail(info.email, isBn);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(info.phone, isBn);
  if (phoneError) errors.phone = phoneError;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

