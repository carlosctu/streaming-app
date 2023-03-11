import useAsync from '../useAsync';

import * as oAuth from '../../services/GithubOAuth';

export default function useGithubOAuth() {
    const {
        loading: githubOAuthLoading,
        error: githubOAuthError,
        act: githubOAuth,
    } = useAsync(oAuth.oAuthGithub, false);

    return {
        githubOAuth,
        githubOAuthbLoading: githubOAuthLoading,
        githubOAuthbError: githubOAuthError,
    };
}