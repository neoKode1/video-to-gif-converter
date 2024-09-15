import express from 'express';
import { convertVideoToGif } from '../controllers/gifController';  // Importing the controller function

const router = express.Router();

// POST route to handle video-to-GIF conversion
router.post('/convert-to-gif', convertVideoToGif);

export default router;
