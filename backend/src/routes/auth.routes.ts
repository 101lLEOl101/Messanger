import {Router} from "express";
import {AuthResponse, SafeUser} from "../interfaces/auth.interfaces";
import {login, register} from "../services/auth.services";
import {validateBody} from "../middlewares/validateBody";
import {loginSchema, registerSchema} from "../schemas/auth.schemas";
import {authLimiter} from "../middlewares/rateLimits";

const router = Router();
router.post('/register', authLimiter, validateBody(registerSchema),  async (req, res) => {
    const user: SafeUser = await register(req.body);
    res.status(201).json(user);
});
router.post('/login', authLimiter, validateBody(loginSchema), async (req, res) => {
    const user: AuthResponse = await login(req.body);
    res.status(200).json(user);
});
export default router;