//@OnlyCurrentDoc

function onOpen() {
 SpreadsheetApp
   .getUi()
   .createMenu("Admin")
   .addItem("Admin page", "showAdminSidebar")
   .addToUi();
}

function showAdminSidebar() {
 var widget = HtmlService.createHtmlOutputFromFile("Form.html");
 widget.setTitle("Admin page");
 SpreadsheetApp.getUi().showSidebar(widget);
}

function appendRowFromFormSubmit(form) {
 var row = [form.firstName, form.lastName, form.department];
 SpreadsheetApp.getActiveSheet().appendRow(row);
}