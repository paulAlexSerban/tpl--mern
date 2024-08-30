import { type AuthenticationState } from './authentication';

export const login = (state: AuthenticationState) => {
    state.isAuthenticated = true;
};

export const logout = (state: AuthenticationState) => {
    state.isAuthenticated = false;
};
