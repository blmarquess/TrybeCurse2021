// prefentDefault();
function addUFs () {
  const ufs = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  const otp = document.querySelector('#uf');
  ufs.forEach(ufAtual => {
    const uf = document.createElement('option');
    uf.innerText = ufAtual; uf.value = ufAtual;
    otp.appendChild(uf);
  });
}
addUFs();

function validaData() {
  const dateInsp = document.querySelector('#dataInicio');
  return dateInsp;
}
validaData();