const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Endpoint to register a new patient
router.post('/register', async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const newPatient = new Patient({ name, age, gender });
    const savedPatient = await newPatient.save();
    res.json(savedPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Endpoint to start an encounter for a patient
router.put('/:id/start-encounter', async (req, res) => {
  try {
    const patientId = req.params.id;
    // Logic to start encounter for the patient identified by ID
    res.json({ message: `Encounter started for patient ${patientId}` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
