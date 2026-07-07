export class AppError extends Error {
    constructor(public readonly statusCode: number, message: string) {
        super(message);
    }
}

export class ConflictError extends AppError {
    constructor(message: string) { super(409, message); }
}

export class UnauthorizedError extends AppError {
    constructor(message: string) { super(401, message); }
}

export class ValidationError extends AppError {
    constructor(message: string) { super(400, message); }
}