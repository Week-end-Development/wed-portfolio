import { stat } from 'node:fs/promises';
import sharp from 'sharp';

const jobs = [
  {
    input: 'public/images/wed-logo.png',
    output: 'public/images/wed-logo.webp',
    resize: {
      width: 80,
      height: 80,
      fit: 'cover',
      withoutEnlargement: true,
    },
    quality: 76,
  },
  {
    input: 'public/images/hss-logo-dark.png',
    output: 'public/images/hss-logo-dark.webp',
    resize: {
      width: 170,
      withoutEnlargement: true,
    },
    quality: 82,
  },
];

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KiB`;
}

for (const job of jobs) {
  await sharp(job.input)
    .rotate()
    .resize(job.resize)
    .webp({ quality: job.quality, effort: 6 })
    .toFile(job.output);

  const [before, after] = await Promise.all([stat(job.input), stat(job.output)]);

  console.log(`${job.input} -> ${job.output}`);
  console.log(`  ${formatKb(before.size)} -> ${formatKb(after.size)}`);
}
