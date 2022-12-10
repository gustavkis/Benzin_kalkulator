function uj() {
    location.reload();
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