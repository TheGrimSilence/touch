import * as path from 'path';
import { compilerOptions } from '../tsconfig.json';
export const outDir = path.resolve(__dirname, '..', compilerOptions.outDir);
