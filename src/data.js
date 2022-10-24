const list = [
  {
    id: 1,
    title: "Boné Unissex Aba Curva - Laranja",
    author: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 59.99,
    img: "https://hering.vtexassets.com/arquivos/ids/576579-800-auto?v=638019492870100000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories female men'
  },
  {
    id: 2,
    title: "Bolsa Tiracolo Feminina Pequena + Cinto - Azul",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 139.99,
    img: "https://hering.vtexassets.com/arquivos/ids/576563-800-auto?v=638016574333400000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories female'
  },
  {
    id: 3,
    title: "Carteira Feminina Em Material Sintético - Preto",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 59.99,
    img: "https://hering.vtexassets.com/arquivos/ids/306911-800-auto?v=637985953909700000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories female'
  },{
    id: 4,
    title: "Kit 5 Pares De Meias Cano Curto Unissex - Preto",
    author: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 69.99,
    img: "https://hering.vtexassets.com/arquivos/ids/260126-800-auto?v=637956042446500000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories'
  },
  {
    id: 5,
    title: "Cinto Masculino De Couro - Preto",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 119.99,
    img: "https://hering.vtexassets.com/arquivos/ids/499241-800-auto?v=637994991743270000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories men'
  },
  {
    id: 6,
    title: "Bolsa Térmica Cooler Masculina - Preto",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 99.99,
    img: "https://hering.vtexassets.com/arquivos/ids/576458-800-auto?v=638016596312900000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories men'
  },{
    id: 7,
    title: "Gorro Feminino Básico Em Tricô - Off White",
    author: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 59.99,
    img: "https://hering.vtexassets.com/arquivos/ids/306946-800-auto?v=637982834316230000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories female'
  },
  {
    id: 8,
    title: "Cinto Feminino Croco Com Fivela - Verde",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 29.99,
    img: "https://hering.vtexassets.com/arquivos/ids/499202-800-auto?v=637956539590270000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories female'
  },
  {
    id: 9,
    title: "Bolsa Tote Feminina Média Em Sarja - Preto",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at risus a risus congue cursus eu in erat.",
    price: 159.99,
    img: "https://hering.vtexassets.com/arquivos/ids/499644-800-auto?v=637982543335470000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'acessories female'
  },{
    id: 10,
    title: "Blusa Básica Feminina Em Algodão Com Decote V - Azul",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis",
    price: 69.99,
    img: "https://hering.vtexassets.com/arquivos/ids/630242-800-auto?v=638016551024730000&width=800&height=auto&aspect=true",
    amount: 2,
    categories:'clothes female'
  },
  {
    id: 11,
    title: "Blusa Cropped Feminina Canelada Básicos Do Brasil - Rosa",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula pretium",
    price: 59.99,
    img: "https://hering.vtexassets.com/arquivos/ids/627670-800-auto?v=638016522426670000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'clothes female'
  },
  {
    id: 12,
    title: "Top Cropped Básico Feminino - Amarelo",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula pretium risus., vehicula pretium risus.Lorem ipsum dolor sit amet,",
    price: 59.99,
    img: "https://hering.vtexassets.com/arquivos/ids/594327-800-auto?v=638016519126200000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'clothes female'
  },
  {
    id: 13,
    title: "Vestido Curto Estampado Reto - Verde",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula pretium risus., vehicula pretium risus.Lorem ipsum dolor sit amet,",
    price: 159.99,
    img: "https://hering.vtexassets.com/arquivos/ids/594819-800-auto?v=638016520983100000&width=800&height=auto&aspect=trueg",
    amount: 1,
    categories:'clothes female'
  },
  {
    id: 14,
    title: "Vestido Básico Curto Oversized Evasê - Preto",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula pretium risus.",
    price: 119.99,
    img: "https://hering.vtexassets.com/arquivos/ids/596976-800-auto?v=638016544407400000&width=800&height=auto&aspect=true",
    amount: 2,
    categories:'clothes female'
  },
  {
    id: 15,
    title: "Camiseta Masculina Comfort Super Cotton Básicos Do Brasil - Verde",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula",
    price: 79.99,
    img: "https://hering.vtexassets.com/arquivos/ids/631697-800-auto?v=638016584904100000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'clothes men'
  },
  {
    id: 16,
    title: "Bermuda Básica Masculina Chino - Verde",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula",
    price: 139.99,
    img: "https://hering.vtexassets.com/arquivos/ids/630980-800-auto?v=638016562960970000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'clothes men'
  },
  {
    id: 17,
    title: "Camisa Básica Masculina Polo Texturizada - Preto",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula",
    price: 119.99,
    img: "https://hering.vtexassets.com/arquivos/ids/598914-800-auto?v=638016557576530000&width=800&height=auto&aspect=true",
    amount: 1,
    categories:'clothes men'
  },
  {
    id: 18,
    title: "Calça Básica Masculina Em Sarja Chino - Preto",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula",
    price: 179.99,
    img: "https://hering.vtexassets.com/arquivos/ids/180566-800-auto?v=638011338110830000&width=800&height=auto&aspect=true", 
    amount: 1,
    categories:'clothes men'
  }
  ,
  {
    id: 19,
    title: "Sapato de Couro",
    author:
      "Tamanho:43 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula",
    price: 559.99,
    img: "https://static.zara.net/photos///2022/S/1/2/p/2400/920/105/2/w/563/2400920105_6_1_1.jpg?ts=1659513064031", 
    amount: 1,
    categories:'acessories men'
  }
  ,
  {
    id: 20,
    title: "Tênis Bota de Tecido Técnico",
    author:
      "Tamanho:41 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula",
    price: 439.99,
    img: "https://static.zara.net/photos///2022/S/1/2/p/2102/020/040/2/w/563/2102020040_6_1_1.jpg?ts=1659009150947", 
    amount: 1,
    categories:'acessories men'
  }
 ,
  {
    id: 21,
    title: "Corrente Cordão",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula",
    price: 209.99,
    img: "https://static.zara.net/photos///2022/S/0/2/p/1012/302/808/2/w/563/1012302808_6_1_1.jpg?ts=1662105400006", 
    amount: 1,
    categories:'acessories men'
  }
  ,
  {
    id: 21,
    title: "Gravata Jacquad Geométrica",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, lobortis nec elementum quis, vehicula",
    price: 249.99,
    img: "https://static.zara.net/photos///2022/S/0/2/p/9569/446/401/2/w/563/9569446401_6_1_1.jpg?ts=1655290171711", 
    amount: 1,
    categories:'acessories men'
  }
];

export default list;