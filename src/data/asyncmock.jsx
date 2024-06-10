export const listadoProductos = [
    {
      id: 1,
      category: "Iphone",
      description: "tus mejores carcasas",
      img: "https://waldencases.com/products/iphone-classic-series",
      name: "carcaza iphone 15",
      price: 35000,
    },
    {
      id: 2,
      category: "Iphone",
      description: "tus mejores carcasas",
      img: "https://waldencases.com/products/iphone-tejido-gros",
      name: "carcaza iphone 15 gros",
      price: 40000,
    },
    {
      id: 3,
      category: "Samsung",
      description: "tus mejores carcasas",
      img: "https://waldencases.com/products/samsung-bio",
      name: "carcaza s23 negra",
      price: 30000,
    },
    {
      id: 4,
      category: "Samsung",
      description: "tus mejores carcasas",
      img: "https://waldencases.com/products/samsung-tejido-gros",
      name: "carcaza s23 premium",
      price: 38000,
    },
  ];

  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        listadoProductos.length > 0
          ? resolve(listadoProductos)
          : reject("no hay datos");
      }, 500);
    });
  }
