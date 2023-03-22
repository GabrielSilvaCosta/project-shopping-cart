export const fetchProduct = () => {
  // seu código aqui
};

export async function fetchProductsList(query) {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }

  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao buscar produtos');
  }
}
