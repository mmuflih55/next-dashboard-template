import { encryptSession } from "Utils/iron";
import { setTokenCookie } from "Utils/auth/auth-cookies";

export default async function login(req, res) {
  try {
    // const user = await authenticate('local', req, res)
    const user = req.body;
    // session is the payload to save in the token, it may contain basic info about the user
    const session = { ...user };
    // The token is a string with the encrypted session
    const token = await encryptSession(session);

    setTokenCookie(res, token);
    res.status(200).send({ done: true });
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
}
