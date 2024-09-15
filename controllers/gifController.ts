import { Request, Response } from 'express';

export const convertVideoToGif = async (req: Request, res: Response) => {
  try {
    const videoFile = req.body.video;

    // Handle conversion logic here (using a library or third-party service)

    const gifUrl = 'https://generated-gif-url.com/gif';  // Example URL
    res.status(200).json({ gifUrl });
  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({ error: 'Failed to convert video to GIF' });
  }
};
