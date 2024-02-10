import express from 'express';
import AppointmentSchema from '../models/Appointment.js';
import { body, validationResult } from 'express-validator';
import fetchuser from '../middlewares/fetchuser.js';

const router = express.Router();

// Route 1: Booking an appointment: POST: http://localhost:5000/api/appointment. Login Required
router.post('/new', [
    body('date', "Enter a valid date").notEmpty(),
    body('time', "Enter a valid time").notEmpty(),
    body('docId', "Not valid doctor").notEmpty(),
    body('hospitalId', "Not valid hospital").notEmpty(),
    body('description', "Not valid description").notEmpty(),
], fetchuser, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { date, description, docId, hospitalId, time } = req.body;

        // Find all the previously queued appointments for the same hospital and the same doctor
        const previousNumberOfQueues = await AppointmentSchema.countDocuments({ hospitalId, docId });
        const queueNumber = previousNumberOfQueues + 1;
        
        const newAppointment = await AppointmentSchema.create({
            patientId: req.user.id,
            date,
            time,
            description,
            docId,
            hospitalId,
            status: 'appointed',
            queueNumber
        });
        return res.json(newAppointment);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

export default router;