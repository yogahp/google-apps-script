//@OnlyCurrentDoc

function onOpen() {
 SpreadsheetApp
   .getUi()
   .createMenu("Admin")
   .addItem("Admin page", "showAdminSidebar")
   .addToUi();
}

function showAdminSidebar() {
 var widget = HtmlService.createHtmlOutputFromFile("Adminpage.html");
 widget.setTitle("Admin page");
 SpreadsheetApp.getUi().showSidebar(widget);
}