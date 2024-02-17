/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onCall, onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// https://helloworld-ipbc7r7sta-uc.a.run.app
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send({
    params: request.params,
    query: request.query,
  });
});

export const testCall = onCall((request) => {
  const text = request.data.text;
  // Authentication / user information is automatically added to the request.
  const uid = request.auth.uid;
  const name = request.auth.token.name || null;
  const picture = request.auth.token.picture || null;
  const email = request.auth.token.email || null;
  return {data: "Test call here", auth: request.auth};
});
