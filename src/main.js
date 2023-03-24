import { searchCep } from './helpers/cepFunctions';
import { createProductElement, createCustomElement,
} from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
// requisto 4
const addLoading = (parentElement) => {
  const loadingElement = createCustomElement('div', 'loading', 'Carregando...');
  parentElement.appendChild(loadingElement);
};

const removeLoadingElement = () => {
  const loadingElement = document.querySelector('.loading');
  if (loadingElement) {
    loadingElement.remove();
  }
};
// requisito 5
const messageError = (elemento) => {
  const newElement = document.createElement('p');
  newElement.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  newElement.classList.add('error');
  elemento.appendChild(newElement);
  return newElement;
};
// requisito 3
document.querySelector('.cep-button').addEventListener('click', searchCep);
// chamamos a função 'fetchProductsList' passando o parametro computador

// criei um elemento html para cada produto utilizando a função
// createProductElement(), com o forEach para cada elemento e adicionamo
const produto = document.querySelector('.products');
addLoading(produto);

fetchProductsList('computador').then((products) => {
  products.forEach((element) => {
    const elemento = createProductElement(element);
    produto.appendChild(elemento);
  });
  removeLoadingElement();
}).catch((error) => {
  console.error(error.messageError);
  removeLoadingElement();
  messageError(produto);
});
// requisito 9;
