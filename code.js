onEvent("btaoRolar", "click", function( ) {
  setNumber("etq1", randomNumber(1, 6));
  if (getNumber("etq1") == 1) {
    setImageURL("imagem1", "assets/1.PNG");
  }
  if (getNumber("etq1") == 2) {
    setImageURL("imagem1", "assets/2.PNG");
  }
  if (getNumber("etq1") == 3) {
    setImageURL("imagem1", "assets/3.PNG");
  }
  if (getNumber("etq1") == 4) {
    setImageURL("imagem1", "assets/4.PNG");
  }
  if (getNumber("etq1") == 5) {
    setImageURL("imagem1", "assets/5.PNG");
  }
  if (getNumber("etq1") == 6) {
    setImageURL("imagem1", "assets/6.PNG");
  }
});
