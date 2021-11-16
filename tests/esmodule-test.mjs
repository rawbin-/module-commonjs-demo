import { createRequire } from 'module';
console.log(import.meta)
const require = createRequire(import.meta.url);

// sibling-module.js is a CommonJS module.
const siblingModule = require('./just-console');

import('./just-console')
