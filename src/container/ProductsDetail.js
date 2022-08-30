import axios from 'axios'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/actions/productsActions';
// import './ProductDetailStyles.css';
import './ProductComponentStyles.css'

import { removedSelectedProduct } from '../redux/actions/productsActions';

function ProductsDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const { id, title, category, image, price, description, rating } = product;
  console.log('useSelector', product)
  console.log('useParams===>', productId)
  const fetchingProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      console.log(res.data)
      dispatch(setSelectedProduct(res.data))
    }).catch((error) => {
      console.log('Error', error)
    });
    console.log(response)
  }
  useEffect(() => {
    if (productId && productId !== '') fetchingProduct();
    return () => {
      dispatch(removedSelectedProduct())
    }
  }, [productId])

  return (
    <div className='container'>
      {
        Object.keys(product).length === 0 ? (
          <h1>Loading...</h1>
        ) :
          <div className='content-container' key={id}>
            <div className='image-container'>
              <img src={image} alt={title} width={'300px'} height={'300px'} />
            </div>
            <div className='children-container'>
              <p className='title'>{title}</p>
              <button className='price-button' type='button'>{price}</button>
              <p>{category}</p>
              <p>{description}</p>
              <p>{rating.rate}</p>
              <button className='adtocart-button' type='button'>{'Add to Cart'}</button>
            </div>
          </div>
      }
    </div>
  )
}

export default ProductsDetail