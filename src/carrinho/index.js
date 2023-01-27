const somaHorasExtras = (sal, horas) => sal + horas;

const calculaDesconto = (sal, desc) => sal - desc;

const multiplicaDobra = (fat1, fat2) => (fat1 * fat2) * 2;

export {
  somaHorasExtras,
  calculaDesconto,
  multiplicaDobra,
};

// calculaDesconto(1000, 300);
// const teste = (t, e, r) => {
//   if (e === r) {
//     console.log(t, 'passou');
//   } else {
//     console.log(t, 'nao passou');
//   }
// };
// teste('somaHorasExtras', 1200, somaHorasExtras(1000, 200));
