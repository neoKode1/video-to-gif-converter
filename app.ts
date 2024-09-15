import express from 'express';
import gifRoutes from './routes/gifRoutes';  // Importing routes

const app = express();
app.use(express.json());

// Registering the routes
app.use('/api', gifRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
