/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const parse = require('csv-parser');
const csv = require('fast-csv');
const path = require('path');

// const originFilePath = path.join(__dirname, '../data/sample/sampleQuestions.csv');
// const destinationFilePath = path.join(__dirname, '../data/sample/sampleQuestionsCleaned.csv');
const originFilePath = path.join(__dirname, '../data/original/questions.csv');
const destinationFilePath = path.join(__dirname, '../data/cleaned/questionsCleaned.csv');
fs.writeFileSync(destinationFilePath, '');

const readableStream = fs.createReadStream(originFilePath);
const writableStream = fs.createWriteStream(destinationFilePath, { flags: 'a' });
const csvStream = csv.format({ headers: true });


const startTime = Date.now();
csvStream.pipe(writableStream);
readableStream
  .pipe(parse())
  .on('data', (row) => {
    const newRow = {};
    // const [id, product_id, body, date_written, asker_name, asker_email, reported] = Object.values(newRow);
    newRow.id = row.id;
    newRow.product_id = row[' product_id'];
    newRow.body = row[' body'];
    newRow.date_written = row[' date_written'];
    newRow.asker_name = row[' asker_name'];
    newRow.asker_email = row[' asker_email'];
    newRow.reported = row[' reported'];
    newRow.helpfulness = row[' helpful'];

    (() => { // log stuff
      // console.log('new row', newRow)
    })();

    csvStream.write(newRow);
  })
  .on('end', () => {
    csvStream.end();
    // eslint-disable-next-line no-console
    console.log(`CSV file successfully processed in ${(Date.now() - startTime) / 1000} seconds`);
  });



