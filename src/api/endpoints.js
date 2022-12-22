const BASE_URL = "https://api.bitmnc.com"
const _ = (url) => { return new URL(url, BASE_URL).href}


//! Source: https://documenter.getpostman.com/view/11854249

// Auth endpoints
export const GENERATE_TOKEN = _("/api/v2/token/otp/" )
export const CONFIRM_TOKEN = _("/api/v2/token/verify/")
export const REFRESH_TOKEN = _("/api/v2/token/refresh/")
export const REGISTER_TOKEN = _("/api/v2/token/register/")
export const REGISTER_VERIFY = _("/api/v2/token/register/verify/")
export const FORGET_PASSWORD = _("/api/v2/token/password/")
export const FORGET_VERIFY = _("/api/v2/token/password/verify/")
export const RESEND_OTP = _("/api/v2/token/otp/resend/")
export const GET_PROFILE = _("/api/v2/account/details/")







