function DataAtual() {
  function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  // let myDate = new Date();
  // let hs = myDate.getHours();
  // let mn = zeroEsquerda(myDate.getMinutes());
  // let sg = zeroEsquerda(myDate.getSeconds());

  let data = new Date();
  let hs = zeroEsquerda(data.getHours());
}

DataAtual();