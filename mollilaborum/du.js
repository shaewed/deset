function writeToSheet(sheetName, resultCell, value) {
  // Get the spreadsheet by name
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);

  // Write the value to the resultCell
  sheet.getRange(resultCell).setValue(value);
}
