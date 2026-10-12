// Lists every TODO left in src/data so nothing placeholder ships by accident.
// Usage: npm run check:todo
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src', 'data');
let count = 0;

for (const file of readdirSync(dir)) {
  const lines = readFileSync(join(dir, file), 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (line.includes('TODO')) {
      count += 1;
      console.log(`src/data/${file}:${i + 1}  ${line.trim()}`);
    }
  });
}

console.log(count ? `\n${count} TODO item(s) left in src/data` : 'No TODOs left in src/data');
process.exitCode = count ? 1 : 0;
