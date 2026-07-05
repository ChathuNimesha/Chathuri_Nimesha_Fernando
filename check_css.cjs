const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const open = (content.match(/\{/g) || []).length;
  const close = (content.match(/\}/g) || []).length;
  if (open !== close) {
    console.log(`${f}: open ${open}, close ${close}`);
  }
});
