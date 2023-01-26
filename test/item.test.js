import Item from "../src/carrinho/item"

describe("Item", () => {
  it('Deve ter 3 campos, nome, valor e quantidade', () => {
    const item = new Item("maca", 2, 5)

    expect(item.nome).toBe("maca")
    expect(item.valor).toBe(2)
    expect(item.quantidade).toBe(5)
  })

  it('Deve ter valor total calculado', () => {
    const item = new Item("maca", 0.1, 3)

    const result = item.pegaValorTotalItem()

    expect(result).toBeCloseTo(0.3)
  })

})