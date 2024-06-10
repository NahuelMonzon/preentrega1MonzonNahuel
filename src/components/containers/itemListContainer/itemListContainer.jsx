import { useEffect, useState } from "react";
import { ItemList } from "../itemList/itemList";
import { getProducts } from "../../../data/asyncmock";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProductos(res))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      {productos ? <ItemList productos={productos}  /> : <div>Cargando...</div>}
    </>
  )
}

export default ItemListContainer;
