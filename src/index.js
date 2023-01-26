const somaHorasExtras = (sal, horas) => sal + horas;

const calculaDesconto = (sal, desc) => sal - desc;

calculaDesconto(1000, 300);

const teste = (t, e, r) => {
  if (e === r) {
    console.log(t, 'passou');
  } else {
    console.log(t, 'nao passou');
  }
};

teste('somaHorasExtras', 1200, somaHorasExtras(1000, 200));
