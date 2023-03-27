const vae = 'Cep não encontrado';
export const getAddress = async (ceps) => {
  try {
    const response = await Promise.any([
      fetch(`https://cep.awesomeapi.com.br/json/${ceps}`),
      fetch(`https://brasilapi.com.br/api/cep/v2/${ceps}`),
    ]);
    const data = await response.json();
    if (data.neighborhood) {
      return `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
    }
    return `${data.address} - ${data.district} - ${data.city} - ${data.state}`;
  } catch {
    return `CEP não encontrado${vae}`;
  }
};

const CEP_YE = 8;
export const searchCep = () => {
  const displayCep = document.querySelector('.cart__address');
  const cepInput = document.querySelector('.cep-input');
  const cep = cepInput.value.replace(/\D/g, ''); // Remova todos os não-dígitos do CEP
  if (cep.length !== CEP_YE) {
    displayCep.innerHTML = 'CEP inválido';
    return;
  }
  getAddress(cep).then((address) => {
    if (address.includes('CEP não encontrado')) {
      displayCep.innerHTML = 'CEP não encontrado';
    } else {
      displayCep.innerHTML = address;
    }
  }).catch((error) => {
    displayCep.innerHTML = error.message;
  });
};
