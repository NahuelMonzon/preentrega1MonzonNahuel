import  { useState, useEffect } from 'react'

const ItemDetailContainer = ({ idProduct }) => {
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${idProduct}`)
        .then(res=> res.json())
        .then(json=> setProduct(json))
        .catch(e => console.error(e))
  }, [idProduct])
  
    return (
    <div>{product?.title}</div>
  )
}

export default ItemDetailContainer