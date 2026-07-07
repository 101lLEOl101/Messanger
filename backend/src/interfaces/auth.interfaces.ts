import {User} from "../../generated/prisma/client";

export interface RegistrationInput{
    login : string;
    passwordRaw : string;
}

export interface LoginInput{
    login : string;
    passwordRaw : string;
}

export type SafeUser = Omit<User, 'password'>

export interface AuthResponse{
    user: SafeUser;
    token: string;
}