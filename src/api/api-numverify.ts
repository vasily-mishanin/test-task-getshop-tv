const NUMVERIFY_URL = import.meta.env.VITE_NUMVERIFY_URL;

export interface NumveifyResult {
  valid: boolean;
  location: string;
  carrier: string;
}

export async function verifyNumber({
  countryCode,
  number,
}: {
  countryCode: string;
  number: string;
}) {
  const URL = `${NUMVERIFY_URL}&number=${number}&country_code=${countryCode}&format=1`;
  try {
    const res = await fetch(URL);
    const result: NumveifyResult = await res.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Error while calling Numverify API');
    }
  }
}

export const NETLIFY_FN_URL = `/.netlify/functions/numVerifyProxy`;
