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
    const carrinho = new Carrinho()

    carrinho.adiciona(item1)
    carrinho.adiciona(item2)

    expect(typeof carrinho).toBe("object")
    expect(carrinho instanceof Carrinho).toBe(true)
    expect(carrinho.itens[0]).toBe(item1)
    expect(carrinho.itens[1]).toBe(item2)



  })
})