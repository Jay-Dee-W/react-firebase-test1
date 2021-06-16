import React, { useContext, useEffect } from 'react'
import db, { auth } from './firebase'
import StoreContext from './context/Store'
import Category from './Catergory'

const Home = () => {
    const { Store, dispatch } = useContext(StoreContext)
    console.log(Store)
    async function getCategories() {
        let returnArr = []
        const response = db.collection('products')
        const products = await response.get()
        products.docs.forEach((product) => {
            returnArr.push(product.id);
        });
        dispatch({ type: 'SET-CATEGORIES', payload: returnArr })
        
     
        
    }

    useEffect(() => {
        getCategories()
        // eslint-disable-next-line 
    }, [])
    return (
        <div>
            <h1>Welcome to WareHouse</h1>
            <h2> List of Product categories in Warehouse</h2>
            {Store.categories && 
                Store.categories.map( category => 
                    <li> {category} </li>
                )
            }
                <button onClick={() => auth.signOut()}>Signout</button>
            
        </div>
    )
}
export default Home