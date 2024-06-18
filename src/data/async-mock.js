const PRODUCT_LIST =    [
    {
       "id": 1,
       "category": "Iphone",
       "name": "Carcaza Iphone 15",
       "price": 35000,
       "stock": 19,
       "img": "https://placehold.co/300x400",
       "imgThumbnail": "https://placehold.co/200x120",
       "description": "tus mejores carcasas"
     },
     {
       "id": 2,
       "category": "Samsung",
       "name": "Carcaza s23 negra",
       "price": 40000,
       "stock": 6,
       "img": "https://placehold.co/200x200",
       "imgThumbnail": "https://placehold.co/200x120",
       "description": "tus mejores carcasas"
     },
     {
       "id": 3,
       "category": "Motorola",
       "name": "Carcaza G14",
       "price": 30000,
       "stock": 9,
       "img": "https://placehold.co/300x400",
       "imgThumbnail": "https://placehold.co/200x120",
       "description": "tus mejores carcasas"
     },
     {
       "id": 4,
       "category": "Other",
       "name": "Carcaza Universal",
       "price": 38000,
       "stock": 4,
       "img": "https://placehold.co/300x400",
       "imgThumbnail": "https://placehold.co/200x120",
       "description": "tus mejores carcasas"
     }
 ]

export function getProductList(categoryId)
{
    const filterProductList = () => {
        if (!categoryId)
        {
            return PRODUCT_LIST;
        }
        else
        {
            const FILTER_RESULT = PRODUCT_LIST.filter(product => product.category === categoryId);
            return FILTER_RESULT.length > 0 ? FILTER_RESULT : null;
        }
    }

    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            const REJECT_MESSAGE =  "Proximamente mas productos para vos...";
            
            PRODUCT_LIST.length > 0 ? resolve(filterProductList) : reject(REJECT_MESSAGE)
        }, 1000)
    })
}

export function getProduct(itemId)
{
    return new Promise((resolve, reject) => {
        
        const PRODUCT_INDEX = PRODUCT_LIST.findIndex(product => product.id === itemId);
        
        const REJECT_MESSAGE =  "¡UPS! Ese item no existe...";

        PRODUCT_INDEX > -1 ? resolve(PRODUCT_LIST[PRODUCT_INDEX]) : reject(REJECT_MESSAGE)
    })
}