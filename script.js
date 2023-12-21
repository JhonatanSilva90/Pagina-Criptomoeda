// Criando um objeto com os dados das moedas
const cryptoData = [
  {
    name: "Bitcoin",
    logo: "./images/bitcoin.png",
    rate: 42381,
    date: "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "Ethereum",
    logo: "./images/ethereum.png",
    rate: 2183,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "Tether",
    logo: "./images/tether.png",
    rate: 1,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "USD Coin",
    logo: "./images/coin.png",
    rate: 4.87,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "BNB",
    logo: "./images/bnb.png",
    rate: 1238,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "XRP",
    logo: "./images/xrpname.png",
    rate: 0.61,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "Binance USD",
    logo: "./images/binancia.png",
    rate: 1,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "Dogecoin",
    logo: "./images/dogecoin.png",
    rate: 0.091,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "Cardano",
    logo: "./images/cardano.png",
    rate: 0.58,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  {
    name: "Polygon",
    logo: "./images/matic.png",
    rate: 0.77,
    date:  "2023-12-19",
    description: "Descrição do Bitcoin",
  },
  // Adicione mais criptomoedas conforme necessário
];

// Preencher seletor de criptomoedas
const cryptoSelect = document.getElementById("cryptoSelect");
const convertedCryptoSelect = document.getElementById("convertedCryptoSelect");

cryptoData.forEach((crypto) => {
  const option = document.createElement("option");
  option.value = crypto.name;
  option.text = crypto.name;
  cryptoSelect.add(option);

  const convertedOption = document.createElement("option");
  convertedOption.value = crypto.name;
  convertedOption.text = crypto.name;
  convertedCryptoSelect.add(convertedOption);
});


// Exibir informações de criptomoedas
const cryptoListSection = document.getElementById("cryptoList");

cryptoData.forEach((crypto) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <img src="${crypto.logo}" alt="${crypto.name}" style="width: 50px; height: 50px; margin: 10px;">
        <h3 style="margin: 12px;">${crypto.name}</h3>
        <p>Cotação: ${crypto.rate} USD</p>
        <p style="margin: 12px;">Data: ${crypto.date}</p>
        <p>${crypto.description}</p>
    `;
  cryptoListSection.appendChild(card);
});

// Função para conversão das Criptomoedas
function convertCurrency() {
  const selectedCrypto = cryptoSelect.value;
  const amount = document.getElementById("amount").value;
  const convertedCrypto = convertedCryptoSelect.value;

  const selectedCryptoObject = cryptoData.find(
    (crypto) => crypto.name === selectedCrypto
  );
  const convertedCryptoObject = cryptoData.find(
    (crypto) => crypto.name === convertedCrypto
  );

  if (selectedCryptoObject && convertedCryptoObject) {
    const conversionRate = 
      selectedCryptoObject.rate / convertedCryptoObject.rate;
    const result = amount * conversionRate;

    document.getElementById(
      "conversionResult"
    ).innerText = `${amount} ${selectedCrypto} = ${result.toFixed(
      2
    )} ${convertedCrypto}`;
  } else {
    document.getElementById("conversionResult").innerText =
      "Selecione criptomoedas válidas";
  }
}
