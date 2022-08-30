import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent'

function ProductListing() {
    const dispatch =useDispatch();
    const fetchingProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res.data)
            dispatch(setProducts(res.data));
        }).catch((error) => {
            console.log('Err', error)
        })
        console.log(response)
    }
    useEffect(() => {
        fetchingProducts()
    }, [])
  return (
    <div>
        <ProductComponent />
    </div>
  )
}

export default ProductListing