/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const parse = require('csv-parser');
const csv = require('fast-csv');
const path = require('path');

// const originFilePath = path.join(__dirname, '../data/sample/sampleAnswers.csv');
// const destinationFilePath = path.join(__dirname, '../data/sample/sampleAnswersCleaned.csv');
const originFilePath = path.join(__dirname, '../data/original/answers.csv');
const destinationFilePath = path.join(__dirname, '../data/cleaned/answersCleaned.csv');
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
    newRow.id = row.id;
    newRow.question_id = row[' question_id'];
    newRow.body = row[' body'];
    newRow.date_written = row[' date_written'];
    newRow.answerer_name = row[' answerer_name'];
    newRow.answerer_email = row[' answerer_email'];
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



