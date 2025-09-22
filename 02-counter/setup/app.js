const valor = document.getElementById("valor");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const resetar = document.getElementById("resetar");

let conta = 0;

function updateValue() {
  valor.textContent = conta;
}

aumentar.addEventListener("click", function () {
  conta++;
  updateValue();
});

diminuir.addEventListener("click", function () {
  conta--;
  updateValue();
});

resetar.addEventListener("click", function () {
  conta = 0;
  updateValue();
});
