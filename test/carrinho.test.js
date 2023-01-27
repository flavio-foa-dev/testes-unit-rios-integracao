import Carrinho from "../src/carrinho/carrinho.js"
import Item from "../src/carrinho/item.js"

describe("Carrinho", () => {
  it("Deve inicializar null subtotal", () => {
    const carrinho = new Carrinho()
    expect(carrinho.subtotal).toBeNull()
  })

  it ("Deve conter itens adicionado no carrinho", ()=> {
    const item1 = new Item('Uva', 4.3, 2)
    const item2 = new Item('Açaí', 3, 5)
    const item3 = new Item('manga', 2, 10)

    const carrinho = new Carrinho()

    carrinho.adiciona(item1)
    carrinho.adiciona(item2)
    carrinho.adiciona(item3)


    expect(carrinho instanceof Carrinho).toBe(true)
    expect(typeof carrinho).toBe("object")
    expect(carrinho.itens[0]).toBe(item1)
    expect(carrinho.itens[1]).toBe(item2)
    expect(carrinho.itens).toContain(item3)
  })

  it('Deve ter as Propiedades subtotal', ()=> {
    const carrinho = new Carrinho()

    expect(carrinho).toHaveProperty('subtotal')
  })

  it('Deve lancar error ao finalizar carrinho vazio', ()=> {
    const carrinho = new Carrinho()

    function finalizarCar() {
      const result = carrinho.finalizaCompra()
    }

    expect(finalizarCar).toThrowError('Carrinho de compras vazio')
  })
})