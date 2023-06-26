import React, { useEffect, useState } from 'react'
import bag from "./bag.jpg"
import style from "./ProductListing.module.css"
import ProductCard from './ProductCard';
function ProductListing() {
    const [storeData, setStoreData]=useState()
    let data;
    useEffect(()=>{
        
        fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) =>{ data=json
    setStoreData(json)
});

    },[])
console.log(data)
console.log(!storeData)
return (
storeData?<>
    <div>
        <h2>ProductListing</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s
        </p>
        <div className={style.product_list_container}>
        {storeData.map((data)=>{
            return <div className={style.product_list_child} key={data.id}> 
            <ProductCard storeData={data}/>
            </div>
        })}
        </div>
       
        {/* <div className={style.card_container}>
            <div className='cars'>
                <div className='card-image-container'>
               <img className={style.card_image} src={storeData[0].image}/>
                </div>
                <div className={style.card_description}>
                    <h3>
                        {storeData[0].title}
                    </h3>
                    
                    <p>{storeData[0].price}</p>
                </div>

            </div>
        </div> */}
        {/*  ------------------------2nd card       */}
      


        
    </div>
  </>:<> <h3>loading</h3></>
)
}

export default ProductListing