export interface AuthenticationModel {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    refreshToken: string;
}

export interface LoginRegisterModel {
    email: string;
    password: string;
}

export interface AuthTokenModel {
    token: string;
}