import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductComponentStyles.css'

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products)
    console.log('productComponent', products)
    const renderProduct = products.map((product) => {
        const { id, title, categories, price, image } = product;

        return (
            <div className='renderItems' key={id}>
                <Link to={`/product/${id}`}>
                <div className='single-container'>
                    <img src={image} alt='Image' width={'250px'} height={'60%'} />
                    <h4>{title}</h4>
                    <h5>{price}</h5>
                    <p>{categories}</p>
                </div>
                </Link>
            </div>
        )
    })
    return (
        <div className='parent'>{renderProduct}</div>
    )
}

export default ProductComponent