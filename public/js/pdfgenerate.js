$("#gen").on("click", () => {
    var doc = new jsPDF();   

var elementHandler = {
  '#d-d-pic': function (element, renderer) {
    return true;
  }
};

var source = window.document.getElementsByTagName("body")[0];

doc.fromHTML(
    source,
    15,
    15,
    {
      'width': 180,'elementHandlers': elementHandler
    }, () => {
        doc.output("dataurlnewwindow");
    });
})