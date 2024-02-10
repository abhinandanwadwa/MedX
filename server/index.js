import express from 'express';
import cors from 'cors';
import connectToMongo from './db.js';
import authRoute from './routes/Auth.js';
import appointmentRoute from './routes/Appointment.js';
import hospitalRoute from './routes/Hospital.js';
connectToMongo();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

// Test Routes
app.get('/', (_req, res) => {
    return res.status(200).send('Server Working!');
});

// Available Routes
app.use('/api/auth', authRoute);
app.use('/api/appointment', appointmentRoute);
app.use('/api/hospital', hospitalRoute);

app.listen(PORT, () => {
    console.log(`The app is running at http://localhost:${PORT}`);
});
