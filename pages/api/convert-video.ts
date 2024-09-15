import { NextApiRequest, NextApiResponse } from 'next';
import { convertVideoToGif } from '../../utils/videoToGif';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { inputPath, outputPath } = req.body;
      await convertVideoToGif(inputPath, outputPath);
      res.status(200).json({ message: 'Conversion successful' });
    } catch (error) {
      res.status(500).json({ error: 'Conversion failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}