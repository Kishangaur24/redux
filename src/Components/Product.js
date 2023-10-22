import React, { useState,useEffect } from 'react'

const Product = () => {

    const [product, setProduct]= useState([])

    useEffect(()=>{
       const fetchProduct=async()=>{
        const res= await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.log(data)
        setProduct(data)
       }
       fetchProduct()
    },[])

  return (
    <div>
      {product.map(data=>{
        return(
            <div className='product-list' key={data.id}>
            {/* <div> {data.title}</div> */}
            <img src={data.image} style={{height:"60px"}}/>
            <div>
            <h4 className='title'>{data.title}</h4>
            <h5>{data.price}</h5>
            <button>Add to cart</button>
            </div>
            </div>
        )
      })}
    </div>
  )
}

export default Product
