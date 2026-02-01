const fs = require('fs');
const path = require('path');

const locales = ['en', 'it', 'de', 'fr', 'es'];
const outDir = path.join(__dirname, '../out');

function processHtmlFiles(dir, currentLang = null) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Check if this directory is a locale
      const lang = locales.includes(item) ? item : currentLang;
      processHtmlFiles(fullPath, lang);
    } else if (item.endsWith('.html')) {
      // Check if this is a locale homepage file (e.g., de.html, en.html)
      const localeFileMatch = item.match(/^([a-z]{2})\.html$/);
      const lang = localeFileMatch ? localeFileMatch[1] : currentLang;

      if (lang && locales.includes(lang)) {
        // Process HTML file
        let content = fs.readFileSync(fullPath, 'utf8');

        // Replace <html> or <html class="..."> with lang attribute
        content = content.replace(
          /<html([^>]*)>/i,
          (match, attributes) => {
            // Remove existing lang attribute if present
            attributes = attributes.replace(/\s*lang="[^"]*"/gi, '');
            return `<html lang="${lang}"${attributes}>`;
          }
        );

        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✓ Fixed lang="${lang}" in ${fullPath.replace(outDir, '')}`);
      }
    }
  });
}

console.log('Fixing HTML lang attributes...');
processHtmlFiles(outDir);
console.log('Done!');
