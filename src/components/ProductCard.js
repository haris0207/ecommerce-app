import React from 'react'
import style from "./ProductCard.module.css"
function ProductCard({storeData}) {
  return (
    <div>
        <div className={style.card_container}>
            <div className='cars'>
                <div className={style.card_image_container}>
               <img className={style.card_image} src={storeData.image}/>
                </div>
                <div className={style.card_description}>
                    <h3>
                        {storeData.title}
                    </h3>
                    
                    <p>${storeData.price}</p>
                </div>
                <div className={style.buy_btn}>
                    <button>
                        Shop Now
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductCard