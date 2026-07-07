import {prisma} from "../db/prisma";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {AuthResponse, LoginInput, RegistrationInput, SafeUser} from "../interfaces/auth.interfaces";
import {ConflictError, UnauthorizedError} from "../errors";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '1d';

export const register = async (input: RegistrationInput) : Promise<SafeUser> => {
    const {login, passwordRaw} = input;
    const checkUser = await prisma.user.findUnique({where: {login: login}});
    if(checkUser){
        throw new ConflictError('Пользователь с таким login уже существует');
    }
    const hashedPassword = await bcrypt.hash(passwordRaw, 12);
    const newUser = await prisma.user.create({
        data: {
            login,
            password: hashedPassword,
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password, ...userWithoutPassword} = newUser;
    return userWithoutPassword;
}

const DUMMY_HASH = bcrypt.hashSync('unused-placeholder', 12);

export const login = async (input: LoginInput): Promise<AuthResponse> => {
    const { login, passwordRaw } = input;
    const user = await prisma.user.findUnique({ where: { login } });
    const isPasswordValid = await bcrypt.compare(passwordRaw, user?.password ?? DUMMY_HASH);
    if (!user || !isPasswordValid) {
        throw new UnauthorizedError('Введён неверный логин или пароль');
    }
    if (!JWT_SECRET) throw new Error('JWT_SECRET is not set');
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password, ...userWithoutPassword} = user;
    return {
        token,
        user: userWithoutPassword,
    }
}