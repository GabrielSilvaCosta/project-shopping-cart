import { searchCep } from './helpers/cepFunctions';
import { createProductElement, createCustomElement, createCartProductElement }
  from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import './style.css';
// requisto 4
// // Define a função addLoading que recebe um elemento pai como parâmetro
// e cria os elementos, e se tornam filho de parentElement
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
// // Define a função messageError que recebe um elemento como parâmetro
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

// requisito 9
const loadSaved = async () => {
  try {
    const savedCart = getSavedCartIDs();
    const promises = savedCart.map((id) => fetchProduct(id));
    const products = await Promise.all(promises);
    const cartContainer = document.querySelector('.cart__products');
    products.forEach((element) => {
      const productElement = createCartProductElement(element);
      cartContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error(error);
  }
};

window.onload = loadSaved;
//-----------------------------------------------------------------------
//----------------------------------------------------------------------
