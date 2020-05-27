import Iron from "@hapi/iron";
import { getTokenCookie } from "Utils/auth/auth-cookies";

// Use an environment variable here instead of a hardcoded value for production
const TOKEN_SECRET =
  process.env.NODE_ENV === "production"
    ? process.env.TOKEN_SECRET
    : "this-is-a-secret-value-with-at-least-32-characters";
console.log(TOKEN_SECRET);
export function encryptSession(session) {
  return Iron.seal(session, TOKEN_SECRET, Iron.defaults);
}

export async function getSession(req) {
  const token = getTokenCookie(req);
  console.log(token);
  return token && Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
}
