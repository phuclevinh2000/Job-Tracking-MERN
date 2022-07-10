import express from 'express';
const router = express.Router();

import rateLimiter from 'express-rate-limit';

const apiLimitter = rateLimiter({
  windowMs: 15 * 60 * 1000, //15 mins,
  max: 10,
  message:
    'Too many requests from this IP address, please try again after 15 mins',
});

import { register, login, updateUser } from '../controllers/authController.js';
import authenticateUser from '../middleware/auth.js';

router.route('/register').post(apiLimitter, register);
router.route('/login').post(apiLimitter, login);
router.route('/updateUser').patch(authenticateUser, updateUser);

export default router;
