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