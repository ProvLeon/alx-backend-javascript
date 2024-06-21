const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const fieldsArray = [];
        const rowArray = [];
        const rows = data.split('\n');
        // removing the first row
        rows.splice(0, 1);
        let lastRow = rows[rows.length - 1];
        while (lastRow === '' || lastRow === '\r') {
          rows.pop();
          lastRow = rows[rows.length - 1];
        }
        console.log(`Number of students: ${rows.length}`);
        for (let row of rows) {
          row = row.trim().split(',');
          rowArray.push(row);
          const fields = row[3];
          if (!fieldsArray.includes(fields) && fields !== undefined) {
            fieldsArray.push(fields);
          }
        } const stat = {};
        for (const sub of fieldsArray) {
          stat[`list of ${sub}`] = [];
          for (const item of rowArray) {
            if (sub === item[3]) {
              stat[`list of ${sub}`].push(item[0]);
            }
          }
        }
        for (const item of fieldsArray) {
          console.log(`Number of students in ${item}: ${stat[`list of ${item}`].length}. List: ${stat[`list of ${item}`].join(', ')}`);
        }
      }resolve(true);
    });
  });
}

module.exports = countStudents;
