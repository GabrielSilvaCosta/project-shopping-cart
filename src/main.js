import { searchCep } from './helpers/cepFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
// chamamos a função 'fetchProductsList' passando o parametro computador
const products = await fetchProductsList('computador');

// criei um elemento html para cada produto utilizando a função
// createProductElement(), com o forEach para cada elemento e adicionamo
const produto = document.querySelector('.products');
products.forEach((element) => {
  const elemento = createProductElement(element);
  produto.appendChild(elemento);
});
