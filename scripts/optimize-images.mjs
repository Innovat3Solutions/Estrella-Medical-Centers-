import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, parse } from 'path';
import { existsSync } from 'fs';

const BASE_PATH = './public/assets/images';

// Images to optimize (larger than 500KB)
const FOLDERS_TO_OPTIMIZE = [
  'doctors',
  'about',
  'premium',
  'services'
];

// Also optimize hero-team.png in the root images folder
const ROOT_IMAGES = ['hero-team.png'];

async function optimizeImage(inputPath, outputPath, maxWidth = 1200) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const width = Math.min(metadata.width || maxWidth, maxWidth);

    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✓ Optimized: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`✗ Failed: ${inputPath}`, error.message);
  }
}

async function processFolder(folder) {
  const folderPath = join(BASE_PATH, folder);

  if (!existsSync(folderPath)) {
    console.log(`Folder not found: ${folderPath}`);
    return;
  }

  const files = await readdir(folderPath);

  for (const file of files) {
    const ext = parse(file).ext.toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const inputPath = join(folderPath, file);
      const outputName = parse(file).name + '.webp';
      const outputPath = join(folderPath, outputName);

      // Skip if already a small file or webp already exists
      await optimizeImage(inputPath, outputPath);
    }
  }
}

async function processRootImages() {
  for (const file of ROOT_IMAGES) {
    const inputPath = join(BASE_PATH, file);
    if (existsSync(inputPath)) {
      const outputPath = join(BASE_PATH, parse(file).name + '.webp');
      await optimizeImage(inputPath, outputPath);
    }
  }
}

async function main() {
  console.log('Starting image optimization...\n');

  for (const folder of FOLDERS_TO_OPTIMIZE) {
    console.log(`\nProcessing ${folder}/...`);
    await processFolder(folder);
  }

  console.log('\nProcessing root images...');
  await processRootImages();

  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);
