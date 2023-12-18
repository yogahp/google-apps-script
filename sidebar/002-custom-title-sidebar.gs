function onOpen() {
    SpreadsheetApp
        .getUi()
        .createMenu("Bounceless")
        .addItem("Bounceless Addon", "showBouncelessSidebar")
        .addToUi();
}

function showBouncelessSidebar() {
    var widget = HtmlService.createHtmlOutput("<h1>Bounceless Sidebar</h1>");
     widget.setTitle("Bounceless Sidebar");
    SpreadsheetApp.getUi().showSidebar(widget);
}