function refresher() {
  while(true) {
    updateCell();
  }
}

function updateCell() {
  for (i=0; i<2; i++){
    Utilities.sleep(1000);
    writeRandomStr();
    SpreadsheetApp.flush();
  } 
}

function randomStr(m) {
    var m = m || 15; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
    return s;
};

function writeRandomStr() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = randomStr();
  sheet.getRange(1,1).setValue(data);
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Custom Menu')
      .addItem('Refresh', 'refresher')
      .addToUi();
}