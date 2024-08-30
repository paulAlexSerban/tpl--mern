import nodeGeocoder, { Options } from 'node-geocoder';

// Use a type assertion to narrow down the type from 'string' to the specific string literals expected
const provider = process.env.DEVCAMPER_GEOCODER_PROVIDER as 'google';

const options: Options = {
    provider,
    apiKey: process.env.DEVCAMPER_GEOCODER_API_KEY,
    formatter: null,
};

const geocoder = nodeGeocoder(options);

export default geocoder;
