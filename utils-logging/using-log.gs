/**
 * Logs Google Sheet information.
 * @param {number} rowNumber The spreadsheet row number.
 * @param {string} email The email to send with the row data.
 */
function emailDataRow(rowNumber, email) {
  console.log('Emailing data row ' + rowNumber + ' to ' + email);
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    const rowData = data[rowNumber - 1].join(' ');
    console.log('Row ' + rowNumber + ' data: ' + rowData);
    MailApp.sendEmail(email, 'Data in row ' + rowNumber, rowData);
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log('Failed with error %s', err.message);
  }
}