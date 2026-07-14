export interface SafeUser {
    id: string;
    login: string;
    createdAt: string;
}
export interface AuthResponse {
    token: string;
    user: SafeUser;
}
export interface AuthDto {
    login: string;
    passwordRaw: string;
}