function uj() {
    location.reload();
  }

  function megtalal() {
    var arak = azonosit();
    var arSapkasAron = arak[0];
    kiiras(arSapkasAron);
    var nincsPiaciAr = arak[1];
    kiiras1(nincsPiaciAr);
    var fizetendoArSapkasAr = arak[2];
    kiiras2(fizetendoArSapkasAr);
    var arSapkasAron1 = arak[0];
    kiiras3(arSapkasAron1);
    var piaciAron = arak[1];
    kiiras4(piaciAron);
    var fizetendoPiaciAr = arak[2];
    kiiras5(fizetendoPiaciAr);
  }

  function kiiras(szoveg) {
    var spanom = document.createElement("span");
    var arSapkasAronErtek = document.createTextNode(szoveg);
    spanom.appendChild(arSapkasAronErtek);
    document.getElementById("fizetendo").innerHTML = "";
    var arSapkasAron = document.getElementById("fizetendo");
    arSapkasAron.appendChild(spanom);
  }
  function kiiras1(szoveg) {
    var spanom = document.createElement("span");
    var nincsPiaciArErtek = document.createTextNode(szoveg);
    spanom.appendChild(nincsPiaciArErtek);
    document.getElementById("fizetendoPiaciAr").innerHTML = "";
    var nincsPiaciAr = document.getElementById("fizetendoPiaciAr");
    nincsPiaciAr.appendChild(spanom);
  }
  function kiiras2(szoveg) {
    var spanom = document.createElement("span");
    var fizetendoArSapkasArErtek = document.createTextNode(szoveg);
    spanom.appendChild(fizetendoArSapkasArErtek);
    document.getElementById("fizetendoArSapkasAr").innerHTML = "";
    var fizetendoArSapkasAr = document.getElementById("fizetendoArSapkasAr");
    fizetendoArSapkasAr.appendChild(spanom);
  }
  function kiiras3(szoveg) {
    var spanom = document.createElement("span");
    var arSapkasAron1Ertek = document.createTextNode(szoveg);
    spanom.appendChild(arSapkasAron1Ertek);
    document.getElementById("fizetendoArSapkasAr").innerHTML = "";
    var arSapkasAron1 = document.getElementById("fizetendoArSapkasAr");
    arSapkasAron1.appendChild(spanom);
  }
  function kiiras4(szoveg) {
    var spanom = document.createElement("span");
    var piaciAronErtek = document.createTextNode(szoveg);
    spanom.appendChild(piaciAronErtek);
    document.getElementById("fizetendo").innerHTML = "";
    var piaciAron = document.getElementById("fizetendo");
    piaciAron.appendChild(spanom);
  }
  function kiiras5(szoveg) {
    var spanom = document.createElement("span");
    var fizetendoPiaciArErtek = document.createTextNode(szoveg);
    spanom.appendChild(fizetendoPiaciArErtek);
    document.getElementById("fizetendoPiaciAr").innerHTML = "";
    var fizetendoPiaciAr = document.getElementById("fizetendoPiaciAr");
    fizetendoPiaciAr.appendChild(spanom);
  }


  function azonosit() {
    arSapkasAr = parseInt(document.getElementById("arSapkasAr").value);
    piaciAr = parseInt(document.getElementById("piaciAr").value);
    tankoltMennyiseg = parseInt(
      document.getElementById("tankoltMennyiseg").value
    );
  
    var piaciAron = 20 * arSapkasAr + (tankoltMennyiseg - 20) * piaciAr;
    var arSapkasAron = arSapkasAr * tankoltMennyiseg;
    var arSapkasAron1 = arSapkasAr * 20;
    var fizetendoPiaciAr = (tankoltMennyiseg - 20) * piaciAr;
    var fizetendoArSapkasAr = arSapkasAron;
    var nincsPiaciAr = 0;
  
    if (tankoltMennyiseg <= 20) {
      return [arSapkasAron, nincsPiaciAr, fizetendoArSapkasAr];
    } else {
      return [arSapkasAron1, piaciAron, fizetendoPiaciAr];
    }
  }