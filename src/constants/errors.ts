export enum ERROR_CODE {
  Guard_MalformedJWT = "Malformed JWT",
  Guard_RequiredJWT = "Required JWT",

  Auth_UsernameNotFound = "Username Not Found",
  Auth_UsernameAlreadyRegistered = "Username Already Registered",
  Auth_EmailNotFound = "Email Not Found",
  Auth_EmailAlreadyRegistered = "Email Already Registered",
  Auth_AddressNotFound = "Address Not Found",
  Auth_AddressAlreadyRegistered = "Address Already Registered",
  Auth_InvalidUsernamePassword = "Invalid Username Password",
  Auth_InvalidEmailPassword = "Invalid Email Password",
  Auth_InvalidNonce = "Invalid Nonce",
  Auth_InvalidSignature = "Invalid Signature",
  Auth_PasswordConfirmNotMatch = "Password Confirm Not Match",
  Auth_InvalidEmailVerification = "User Not Found Or Secret Not Matched",
  Auth_EmailAlreadyVerified = "Email Already Verified",
  Auth_EmailVerificationUnavailable = "Email Verification Unavailable",

  Code_UnableToResendCode = "Unable To Resend Code",
  Code_InvalidCodeType = "Invalid Code Type",

  TwoFA_UserNotFoundOrDeleted = "User Not Found Or Deleted",
  TwoFA_UserAlreadyVerifiedEmail = "User Already Verified Email",
  TwoFA_InvalidEmailVerification = "Invalid Email Verification",
  TwoFA_AuthorityNotFound = "Authority Not Found",
  TwoFA_AccountAlreadyRegisteredEmail = "Account Already Registered Email",
  TwoFA_AccountAlreadyLinkedWallet = "Account Already Linked Wallet",

  KYC_UnboundStatus = " Unbound Status",

  Profile_UsernameAlreadyExisted = "Username Already Existed",
  Profile_InvalidReferralCode = "Invalid Referral Code",
  Profile_AccountAlreadyInputtedReferral = "Account Already Inputted Referral",
  Profile_MimeTypeNotAllowed = "Mimetype Not Allowed",

  Whitelist_Not_In_Whitelist = "User don't have whitelist access",

  Sale_MarketClosed = "Market Closed",
  Sale_MarketNotStarted = "Market Not Started",
  Sale_WhitelistRequired = "Whitelist Required",
  Sale_MarketExceedSupply = "Market Exceed Supply",
  Sale_TokenNotAllowed = "Token Not Allowed",
  Sale_MarketNotFound = "Market Not Found",
}

export const METAMASK_POSSIBLE_ERRORS = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error.",
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input.",
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found.",
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable.",
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected.",
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported.",
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded.",
  },
  "4001": {
    standard: "EIP-1193",
    message: "User rejected the request.",
  },
  "4100": {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  "4200": {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  "4900": {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  "4901": {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
};
