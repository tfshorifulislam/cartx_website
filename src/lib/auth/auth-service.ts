/**
 * CartX Public Website — Authentication Service
 *
 * Provides a decoupled abstraction for user authentication.
 *
 * Current Behavior:
 * - Checks for a configured backend endpoint (`process.env.NEXT_PUBLIC_AUTH_API_URL`).
 * - If not connected or unconfigured, simulates realistic network latency and returns
 *   a clear, structured service unavailable error message.
 * - When an API endpoint is connected, transparently dispatches HTTP POST requests
 *   without requiring any changes to the UI layer.
 */

import { LoginCredentials, AuthResponse } from "./auth-types";

export async function loginUser(
  credentials: LoginCredentials,
  locale = "en"
): Promise<AuthResponse> {
  const isBn = locale === "bn";
  const authApiUrl = process.env.NEXT_PUBLIC_AUTH_API_URL;

  // If the backend API endpoint is not yet connected/configured
  if (!authApiUrl) {
    // Brief async delay so the loading state and interaction feedback remain realistic
    await new Promise((resolve) => setTimeout(resolve, 600));

    return {
      success: false,
      errorCode: "SERVICE_UNAVAILABLE",
      message: isBn
        ? "অথেনটিকেশন সার্ভিসটি বর্তমানে সংযুক্ত নয়। ব্যাকএন্ড এপিআই কনফিগারেশন সম্পন্ন হলে এটি সক্রিয় হবে।"
        : "The authentication service is currently not connected. Please try again once the backend API is connected or contact support.",
    };
  }

  // Real backend connection dispatch
  try {
    const res = await fetch(authApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale,
      },
      body: JSON.stringify(credentials),
    });

    const data: AuthResponse = await res.json();
    return data;
  } catch {
    return {
      success: false,
      errorCode: "NETWORK_ERROR",
      message: isBn
        ? "অথেনটিকেশন সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি। অনুগ্রহ করে আপনার ইন্টারনেট সংযোগ পরীক্ষা করে পুনরায় চেষ্টা করুন।"
        : "Unable to connect to the authentication server. Please check your network connection and try again.",
    };
  }
}
