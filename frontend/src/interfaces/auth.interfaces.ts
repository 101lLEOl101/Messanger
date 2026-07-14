export interface SafeUser {
    id: string;
    login: string;
    createdAt: string;
}

export interface AuthResponse {
    user: SafeUser;
    token: string;
}
export interface AuthDto {
    login: string;
    passwordRaw: string;
}