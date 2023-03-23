import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it("fetchProduct é uma função", () => {
    expect(typeof fetchProduct).toBe("function");
  });

  it('fetch é chamado ao executar "MLB1405519561" como argumento ', async () => {
    fetchProduct("MLB1405519561");
    expect(fetch).toHaveBeenCalled();
  });

  it("fetch é chamado com o endpoint correto ao executar fetchProduct", () => {
    fetchProduct("MLB1405519561");
    expect(fetch).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/items/MLB1405519561"
    );
  });

  it('fetch e chamado com argumento, "MLB1405519561", estrutura de dados igual "product" ', async () => {
    const ProductID = 'MLB1405519561';
    const { results } = await fetchProduct(ProductID);
    expect(results).toEqual(product.results);
  });

  it('fetch e chamado sem argumento, retorna um erro com a mensgaem  "ID não informado" ', async () => {
    try {
      await fetchProduct();
    } catch (error) {
      expect(error.message).toEqual('ID não informado');
    }

  });


});
