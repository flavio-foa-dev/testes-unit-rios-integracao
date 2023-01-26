import { somaHorasExtras, calculaDesconto, multiplicaDobra } from '../src';

describe('Folha de Pagamento', () => {
  it('Deve retorna a soma das hosras extras', () => {
    const sal = 1000;
    const horasExtras = 500;

    const result = somaHorasExtras(sal, horasExtras);

    expect(result).toBe(1500);
  });

  it('Deve aplicar o desconto ao salario', () => {
    const sal = 1000;
    const desc = 300;

    const result = calculaDesconto(sal, desc);

    expect(result).toBe(700);
  });

  it('Deve multiplica depois dobra', () => {
    const fat1 = 10;
    const fat2 = 3;

    const result = multiplicaDobra(fat1, fat2);

    expect(result).toBe(60);
  });
});
