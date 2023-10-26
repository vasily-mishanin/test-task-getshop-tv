import fetch from 'node-fetch';

import { Config, Context } from '@netlify/functions';

export default async (req: Request, context: Context) => {
  const { number, countryCode } = await req.json();
  const apiURL = Netlify.env.get('VITE_NUMVERIFY_URL');
  if (!apiURL) {
    throw new Error('No VITE_NUMVERIFY_URL in Evnironment variables');
  }
  const response = await fetch(apiURL);
  const verificationResult = await response.json();

  const body = {
    message: 'Number Verification Request',
    apiURL,
    number,
    countryCode,
    verificationResult,
  };

  return new Response(JSON.stringify(body));
};

// export const config: Config = {
//   path: '/.netlify/functions/numVerifyProxy/:number/:countryCode',
// };
