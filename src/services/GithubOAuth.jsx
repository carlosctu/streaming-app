import axios from './axios';

export async function oAuthGithub(code) {
    const response = await axios.get('/oauth/github', {
        params: {
            code: code,
        },
    });
    return response.data;
}