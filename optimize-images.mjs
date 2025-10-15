import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Image optimization configuration
const OPTIMIZATION_CONFIG = {
  // Standard web sizes for different use cases
  sizes: {
    thumbnail: { width: 300, height: 300 },
    small: { width: 600, height: 600 },
    medium: { width: 800, height: 800 },
    large: { width: 1200, height: 1200 },
    hero: { width: 1920, height: 1080 }
  },
  
  // Quality settings
  quality: {
    webp: 80,
    avif: 70,
    jpeg: 85
  }
};

// Directories to process
const IMAGE_DIRS = [
  'public/images/products',
  'public/images/Leadership',
  'public/images/Team_workers',
  'public/images/Trusted Brands',
  'public/images/certifications',
  'public/images/manufacturing'
];

async function optimizeImage(inputPath, outputDir, filename, config) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${filename} (${metadata.width}x${metadata.height})`);
    
    // Determine appropriate size based on original dimensions
    let targetSize;
    if (metadata.width > 1200 || metadata.height > 1200) {
      targetSize = config.sizes.large;
    } else if (metadata.width > 800 || metadata.height > 800) {
      targetSize = config.sizes.medium;
    } else if (metadata.width > 600 || metadata.height > 600) {
      targetSize = config.sizes.small;
    } else {
      targetSize = config.sizes.thumbnail;
    }
    
    const baseName = path.parse(filename).name;
    
    // Create WebP version
    await image
      .resize(targetSize.width, targetSize.height, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality: config.quality.webp })
      .toFile(path.join(outputDir, `${baseName}.webp`));
    
    // Create AVIF version
    await image
      .resize(targetSize.width, targetSize.height, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .avif({ quality: config.quality.avif })
      .toFile(path.join(outputDir, `${baseName}.avif`));
    
    // Create optimized JPEG version
    await image
      .resize(targetSize.width, targetSize.height, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ quality: config.quality.jpeg })
      .toFile(path.join(outputDir, `${baseName}-optimized.jpg`));
    
    console.log(`✓ Optimized: ${filename} -> ${targetSize.width}x${targetSize.height}`);
    
  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
        await optimizeImage(filePath, dirPath, file, OPTIMIZATION_CONFIG);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...');
  
  // Check if sharp is installed
  try {
    await import('sharp');
  } catch {
    console.error('Sharp is not installed. Please run: npm install sharp');
    process.exit(1);
  }
  
  for (const dir of IMAGE_DIRS) {
    if (fs.existsSync(dir)) {
      console.log(`\nProcessing directory: ${dir}`);
      await processDirectory(dir);
    } else {
      console.log(`Directory not found: ${dir}`);
    }
  }
  
  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);