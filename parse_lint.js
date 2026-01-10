
const fs = require('fs');

try {
  // Read as utf16le? Or maybe read as buffer and detect? 
  // PowerShell redirected files often have BOM.
  // Let's try to read as utf-16le if possible, or just readFileSync and let node handle it if it can.
  // Actually, standard node fs.readFileSync defaults to utf8. If it's utf16le, it might look like garbage.
  // Let's use 'utf16le' encoding.
  const content = fs.readFileSync('lint_report.json', 'utf16le');
  
  // Sometimes there is a BOM at the start.
  const jsonContent = content.charCodeAt(0) === 0xFEFF ? content.slice(1) : content;
  
  const report = JSON.parse(jsonContent);
  
  let errorCount = 0;
  let warningCount = 0;

  report.forEach(file => {
    if (file.errorCount > 0 || file.warningCount > 0) {
      console.log(`File: ${file.filePath}`);
      file.messages.forEach(msg => {
        console.log(`  ${msg.line}:${msg.column} [${msg.severity === 2 ? 'ERROR' : 'WARN'}] ${msg.message} (${msg.ruleId})`);
        if (msg.severity === 2) errorCount++;
        else warningCount++;
      });
    }
  });

  console.log(`\nTotal Errors: ${errorCount}`);
  console.log(`Total Warnings: ${warningCount}`);

} catch (e) {
  console.error(e);
}
