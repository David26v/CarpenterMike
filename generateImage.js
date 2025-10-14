const fs = require('fs');
const path = require('path');

// === CONFIGURE THESE ===
const folderPath = 'public/gallery/Tatiana_guest_bedroom_makeover';
const prefix = '/gallery/Tatiana_guest_bedroom_makeover';         

// =======================

try {
  // Read all files in the folder
  const files = fs.readdirSync(folderPath);

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  });

  imageFiles.sort();

  const galleryArray = imageFiles.map(file => `"${prefix}/${file}"`);

  const output = `[\n  ${galleryArray.join(',\n  ')}\n]`;

  console.log('✅ Gallery array generated:\n');
  console.log(output);

  // Optional: Save to a file
  fs.writeFileSync('gallery-output.js', `// Auto-generated gallery\nconst gallery = ${output};\nexport default gallery;\n`);
  console.log('\n📁 Saved to gallery-output.js');

} catch (err) {
  console.error('❌ Error reading folder:', err.message);
}