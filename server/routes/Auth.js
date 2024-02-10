import express from 'express';
import UserSchema from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();

// Route 1: Creating A New User: POST: http://localhost:5000/api/auth/createuser. No Login Required
router.post('/register', [
    body('name', "Your Name Should Be At Least 4 Characters").isLength({ min: 4 }),
    body('email', "Please Enter a Vaild Email").isEmail(),
    body('password', "Password Should Be At Least 6 Characters").isLength({ min: 6 }),
    body('age', "Please enter a valid age").isNumeric(),
    body('gender', "Please enter a valid gender").notEmpty(),
    body('phone', "Please enter a valid phone number").isMobilePhone(),
    body('address', "Please enter a valid address").notEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, email, age, gender, password, phone, address } = req.body;

        const alreadyExistingEmail = await UserSchema.find({ email });
        if (alreadyExistingEmail.length > 0) {
            return res.status(403).json({ error: "Email already exists" });
        }

        const alreadyExistingPhone = await UserSchema.find({ phone });
        if (alreadyExistingPhone.length > 0) {
            return res.status(403).json({ error: "Phone number already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = await UserSchema.create({
            name,
            email,
            age,
            gender,
            password: hash,
            phone,
            address,
        });

        const payload = {
            user: {
                id: newUser.id
            }
        }
        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({authtoken});

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});


// Route 2: Logging in a user: POST: http://localhost:5000/api/auth/login. No Login Required
router.post('/login', [
    body('email', "Please Enter a Vaild Email").isEmail(),
    body('password', "Password Should Be At Least 6 Characters").isLength({ min: 6 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;

        const theUser = await UserSchema.findOne({ email });
        if (theUser) {
            const checkHash = await bcrypt.compare(password, theUser.password);
            if (checkHash) {
                const payload = {
                    user: {
                        id: theUser.id
                    }
                }
                const authtoken = jwt.sign(payload, JWT_SECRET);
                res.json({authtoken});
            }
            else {
                return res.status(403).json({ error: "Invalid Credentials" });
            }
        }

        else {
            return res.status(403).json({ error: "Invalid Credentials" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

export default router;