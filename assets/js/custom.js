$("#print-button").on("click", function () {
  $("#body").printThis({
    importCSS: true,
    loadCSS: "../markdown.css",
  });
});
