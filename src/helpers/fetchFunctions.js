export const fetchProduct = () => {
  // seu código aqui
};

export async function fetchProductsList(query) {
  // query e usado para pesquisar a
  // pesquisa especifica do ususario
  if (!query) {
    throw new Error('Termo de busca não informado');
  }

  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  const response = await fetch(endpoint);
  const data = await response.json();
  return data.results;
}
