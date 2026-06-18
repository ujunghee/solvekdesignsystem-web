const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const errors = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    if (entry.name === '.git') return [];
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function rel(file) {
  return path.relative(root, file).replace(/\\/g, '/');
}

function fail(message) {
  errors.push(message);
}

const files = walk(root);
const jsonFiles = files.filter((file) => file.endsWith('.json'));
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const cssFiles = files.filter((file) => file.endsWith('.css'));

jsonFiles.forEach((file) => {
  try {
    JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    fail(`${rel(file)}: invalid JSON (${error.message})`);
  }
});

files
  .filter((file) => path.basename(file) === 'sepc.json')
  .forEach((file) => fail(`${rel(file)}: rename sepc.json to spec.json`));

[
  path.join(root, 'components'),
  path.join(root, 'solvek-web', 'components'),
  path.join(root, 'solvek-map', 'components')
].forEach((baseDir) => {
  if (!fs.existsSync(baseDir)) return;
  fs.readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .forEach((entry) => {
      const dir = path.join(baseDir, entry.name);
      if (!fs.existsSync(path.join(dir, 'README.md'))) {
        fail(`${rel(dir)}: missing README.md`);
      }
      if (!fs.existsSync(path.join(dir, 'spec.json'))) {
        fail(`${rel(dir)}: missing spec.json`);
      }
    });
});

htmlFiles.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  if (/\sstyle=/.test(content)) {
    fail(`${rel(file)}: inline style attribute found`);
  }
  if (/<script\b(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/i.test(content)) {
    fail(`${rel(file)}: inline script block found`);
  }
  if (
    content.includes('/components/datepicker/datepicker.js') ||
    (content.includes('/js/datepicker.js') && content.includes('components/datepicker/datepicker.js'))
  ) {
    fail(`${rel(file)}: use only /js/datepicker.js for datepicker`);
  }
});

cssFiles.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  const relative = rel(file);
  if (/url\(["']?\.\.\/image\//.test(content)) {
    fail(`${relative}: image URL should use /image/... or a correct relative path`);
  }
});

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Design system validation passed.');
