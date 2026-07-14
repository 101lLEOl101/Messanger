export interface User{
    id: string;
    login: string;
    createdAt: Date;
}

export interface UserState {
    user: User | null;
    token: string | null;
}

export interface UserAction {
    type: "ADD_USER" | "REMOVE_USER" | null;
    payload : UserState | null;
}