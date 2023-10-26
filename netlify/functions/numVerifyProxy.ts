import fetch from 'node-fetch';

// exports.handler = async function (event, context) {
//   const { number, countryCode } = event.queryStringParameters;
//   const apiUrl = process.env.VITE_NUMVERIFY_URL;

//   try {
//     const url = `${apiUrl}&number=${number}&country_code=${countryCode}&format=1`;
//     const response = await fetch(url);
//     const data = await response.json();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     return {
//       statusCode: error.response ? error.response.status : 500,
//       body: JSON.stringify({ error: 'Failed to fetch data' }),
//     };
//   }
// };

import { Config, Context } from '@netlify/functions';

export default async (req: Request, context: Context) => {
  const { number, countryCode } = context.params;
  const apiURL = Netlify.env.get('VITE_NUMVERIFY_URL');
  const REQ = req.json();
  return new Response(
    `${REQ} ===> You're searching for ${number} in ${countryCode} from ${apiURL}!`
  );
};

export const config: Config = {
  path: '/.netlify/functions/numVerifyProxy/:number/:countryCode',
};
