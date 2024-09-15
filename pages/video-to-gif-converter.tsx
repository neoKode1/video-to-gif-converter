import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import { convertVideoToGif } from '../utils/videoToGif';
import fs from 'fs-extra';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);


// Ensure upload and gif directories exist
fs.ensureDirSync('./uploads');
fs.ensureDirSync('./public/gifs');

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
      // Use multer to handle file upload
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

        // Convert the uploaded video to a GIF
        try {
          await convertVideoToGif(inputPath, outputPath);
        } catch (convertError) {
          console.error('Error during video to GIF conversion:', convertError);
          return res.status(500).json({ error: 'Conversion failed' });
        }

        // Assuming your Next.js app is served from the root
        const gifUrl = `/gifs/${path.basename(outputPath)}`;

        // Return the GIF URL to the client
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
