import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const [productData,setProductData]=useState()
    const {id} =useParams()
    console.log(id)
    useEffect(()=>{
       ( async()=>{
    const response =await fetch(`https://fakestoreapi.com/products/${id}`)
    const json = await response.json();
    setProductData(json)
        })()

    },[])
    console.log(productData)
  return (
    <div>
        <img src={productData.image} width="40%"/>
        <h2>{productData.title}</h2>
        {productData.price}
    </div>
  )
}

export default ProductDetails