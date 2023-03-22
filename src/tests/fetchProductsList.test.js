import "./mocks/fetchSimulator";
import { fetchProductsList } from "../helpers/fetchFunctions";
import computadorSearch from "./mocks/search";

// implemente seus testes aqui
describe("Teste a função fetchProductsList", () => {
  it("fetchProductsList é uma função", () => {
    expect(typeof fetchProductsList).toBe("function");
  });

  it("fetch é chamado ao executar fetchProductsList", async () => {
    fetchProductsList("computador");
    expect(fetch).toHaveBeenCalled();
  });

  it("fetch é chamado com o endpoint correto ao executar fetchProductsList", () => {
    fetchProductsList("computador");
    expect(fetch).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/sites/MLB/search?q=computador"
    );
  });

  it('fetch e chamado com argumento, "computador", estrutura de dados igual "computadorSearch" ', async () => {
    const query = 'computador';
    const { results } = await fetchProductsList(query);
    expect(results).toEqual(computadorSearch.results);
  });

  it('fetch e chamado sem argumento, retorna um erro com a mensgaem  "Termo de busca não informado" ', async () => {
    try {
      await fetchProductsList();
    } catch (error) {
      expect(error.message).toEqual('Termo de busca não informado');
    }

  });
});
