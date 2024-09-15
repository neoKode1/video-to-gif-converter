import ffmpeg from 'fluent-ffmpeg';

export const convertVideoToGif = (inputPath: string, outputPath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions([
        '-vf', 'fps=10,scale=320:-1:flags=lanczos',
        '-pix_fmt', 'rgb24',
        '-loop', '0'
      ])
      .save(outputPath)
      .on('end', () => resolve())
      .on('error', (err: Error) => reject(err));
  });
};
