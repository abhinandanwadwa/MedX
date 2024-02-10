import express from 'express';
import { body, validationResult } from 'express-validator';
import fetchuser from '../middlewares/fetchuser.js';
import DoctorSchema from '../models/Doctor.js';

const router = express.Router();

// Route 1: Creating a new hostpital: POST: http://localhost:5000/api/hospital. Login Required
router.post('/new', [
    body('name', "Enter a valid Name").notEmpty(),
    body('qualifications', "Enter valid Qualifications").notEmpty(),
    body('description', "Enter valid Description").notEmpty(),
    body('hospitalId', "Enter valid Hospital ID").notEmpty(),
], fetchuser, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, qualifications, description, hospitalId } = req.body;
        
        const newDoctor = await DoctorSchema.create({
            name,
            userId: req.user.id,
            qualifications,
            description,
            hospitalId
        });
        return res.json(newDoctor);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

export default router;