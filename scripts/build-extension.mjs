import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const root = process.cwd();
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const filesToCopy = ['manifest.json'];
for (const f of filesToCopy) {
  const src = path.join(root, f);
  const dest = path.join(dist, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, dest);
}

const folders = ['src', 'icons'];
for (const fld of folders) {
  const src = path.join(root, fld);
  const dest = path.join(dist, fld);
  if (fs.existsSync(src)) fs.cpSync(src, dest, { recursive: true });
}

const output = fs.createWriteStream(path.join(dist, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);
archive.directory(dist, false);

await archive.finalize();
console.log('Build gerado em dist/ e dist/extension.zip');
