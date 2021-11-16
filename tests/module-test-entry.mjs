import { readFileSync } from 'fs';
console.log(import.meta.url)
const buffer = readFileSync(new URL('./module-test.js', import.meta.url));
