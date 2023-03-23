// import { showLoading, hideLoading } from 'main';

export async function fetchProduct(ProductID) {
  if (!ProductID) {
    throw new Error('ID não informado');
  }

  const response = await fetch(
    `https://api.mercadolibre.com/items/${ProductID}`,
  );
  const data = await response.json();
  return data;
}

async function exibirDados() {
  const productID = 'MLB1405519561';
  // renomeamos este productID com o primeiro
  // e o mesmo
  const product = await fetchProduct(productID);
  return product;
}

exibirDados();

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
