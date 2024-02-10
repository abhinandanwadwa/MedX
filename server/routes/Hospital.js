import express from 'express';
import { body, validationResult } from 'express-validator';
import fetchuser from '../middlewares/fetchuser.js';
import HospitalSchema from '../models/Hospital.js';

const router = express.Router();

// Route 1: Creating a new hostpital: POST: http://localhost:5000/api/hospital. Login Required
router.post('/new', [
    body('name', "Enter a valid name").notEmpty(),
    body('location', "Enter a valid location").notEmpty(),
], fetchuser, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, location } = req.body;
        
        const newHospital = await HospitalSchema.create({
            name,
            location
        });
        return res.json(newHospital);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

export default router;