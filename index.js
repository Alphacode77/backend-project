const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patients');

const app = express();

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/medical_records', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Routes
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
