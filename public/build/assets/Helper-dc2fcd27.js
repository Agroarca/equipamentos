function tituloTamanhoMinimo(tipo) {
  switch (tipo) {
    case 1:
    case 2:
      return "Número Mínimo";
    case 3:
    case 4:
      return "Tamanho Mínimo";
    default:
      return "";
  }
}
function tituloTamanhoMaximo(tipo) {
  switch (tipo) {
    case 1:
    case 2:
      return "Número Máximo";
    case 3:
    case 4:
      return "Tamanho Máximo";
    default:
      return "";
  }
}
function mostrarTamanhos(tipo) {
  return [1, 2, 3, 4].includes(tipo);
}
function mostrarCasasDecimais(tipo) {
  return tipo === 2;
}
function mostrarOpcoes(tipo) {
  return tipo === 5;
}
export {
  tituloTamanhoMaximo as a,
  mostrarCasasDecimais as b,
  mostrarOpcoes as c,
  mostrarTamanhos as m,
  tituloTamanhoMinimo as t
};
//# sourceMappingURL=Helper-dc2fcd27.js.map
