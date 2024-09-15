import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import { convertVideoToGif } from '../../utils/videoToGif';
import fs from 'fs-extra';

// Configure multer for file upload
const upload = multer({
  storage: multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
  }),
});

// Disable body parsing, we'll handle it with multer
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Handle the file upload via multer
      upload.single('video')(req as any, res as any, async (err) => {
        if (err) {
          return res.status(500).json({ error: 'File upload failed' });
        }

        const file = (req as any).file;
        if (!file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }

        const inputPath = file.path;
        const outputPath = path.join('./public/gifs', `${Date.now()}.gif`);

        await convertVideoToGif(inputPath, outputPath);

        const gifUrl = `/gifs/${path.basename(outputPath)}`;

        res.status(200).json({ gifUrl });
      });
    } catch (error) {
      console.error('Error in GIF conversion:', error);
      res.status(500).json({ error: 'Failed to convert video to GIF' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
