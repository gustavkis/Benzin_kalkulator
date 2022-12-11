function uj() {
  location.reload();
}

function megtalal() {
  var arak = azonosit();
  var arSapkasAron = arak[0];
  kiiras(arSapkasAron);

  var nincsPiaciAr = arak[1];
  kiiras1(nincsPiaciAr);
  console.log(nincsPiaciAr);

  var fizetendoArSapkasAr = arak[2];
  kiiras2(fizetendoArSapkasAr);

  var arSapkasAron1 = arak[0];
  kiiras3(arSapkasAron1);

  var piaciAron = arak[2];
  kiiras4(piaciAron);

  var fizetendoPiaciAr = arak[1];
  kiiras5(fizetendoPiaciAr);
}

function kiiras(szoveg) {
  var spanom = document.createElement("span");
  var arSapkasAronErtek = document.createTextNode(szoveg);
  spanom.appendChild(arSapkasAronErtek);
  document.getElementById("fizetendo1").innerHTML = "";
  var arSapkasAron = document.getElementById("fizetendo1");
  arSapkasAron.appendChild(spanom);
}
function kiiras1(szoveg) {
  var spanom = document.createElement("span");
  var nincsPiaciArErtek = document.createTextNode(szoveg);
  spanom.appendChild(nincsPiaciArErtek);
  document.getElementById("fizetendoPiaciAr1").innerHTML = "";
  var nincsPiaciAr = document.getElementById("fizetendoPiaciAr1");
  nincsPiaciAr.appendChild(spanom);
}

function kiiras2(szoveg) {
  var spanom = document.createElement("span");
  var fizetendoArSapkasArErtek = document.createTextNode(szoveg);
  spanom.appendChild(fizetendoArSapkasArErtek);
  document.getElementById("fizetendo1").innerHTML = "";
  var fizetendoArSapkasAr = document.getElementById("fizetendo1");
  fizetendoArSapkasAr.appendChild(spanom);
}

function kiiras3(szoveg) {
  var spanom = document.createElement("span");
  var arSapkasAron1Ertek = document.createTextNode(szoveg);
  spanom.appendChild(arSapkasAron1Ertek);
  document.getElementById("fizetendoArSapkasAr1").innerHTML = "";
  var arSapkasAron1 = document.getElementById("fizetendoArSapkasAr1");
  arSapkasAron1.appendChild(spanom);
}
function kiiras4(szoveg) {
  var spanom = document.createElement("span");
  var piaciAronErtek = document.createTextNode(szoveg);
  spanom.appendChild(piaciAronErtek);
  document.getElementById("fizetendo1").innerHTML = "";
  var piaciAron = document.getElementById("fizetendo1");
  piaciAron.appendChild(spanom);
}

function kiiras5(szoveg) {
  var spanom = document.createElement("span");
  var fizetendoPiaciArErtek = document.createTextNode(szoveg);
  spanom.appendChild(fizetendoPiaciArErtek);
  document.getElementById("fizetendoPiaciAr1").innerHTML = "";
  var fizetendoPiaciAr = document.getElementById("fizetendoPiaciAr1");
  fizetendoPiaciAr.appendChild(spanom);
}

function azonosit() {
  var arSapkasAr = parseInt(document.getElementById("arSapkasAr").value);
  var piaciAr = parseInt(document.getElementById("piaciAr").value);
  tankoltMennyiseg = parseInt(
    document.getElementById("tankoltMennyiseg").value
  );

  var piaciAron = 20 * arSapkasAr + (tankoltMennyiseg - 20) * piaciAr;
  var arSapkasAron = arSapkasAr * tankoltMennyiseg;
  var arSapkasAron1 = arSapkasAr * 20;
  var fizetendoPiaciAr = (tankoltMennyiseg - 20) * piaciAr;
  var fizetendoArSapkasAr = arSapkasAr * tankoltMennyiseg;
  var nincsPiaciAr = 0;

  if (tankoltMennyiseg <= 20) {
    return [arSapkasAron, nincsPiaciAr, fizetendoArSapkasAr];
  } else {
    return [arSapkasAron1, fizetendoPiaciAr, piaciAron];
  }
}
