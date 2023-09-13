import React from 'react'
import { orderByPrice } from '../../functions/orderByPrice'
const Filter = ({setData,games}) => {
    const handlefilters = (order) =>{
        console.log(games.results)
        const filtered = orderByPrice(order,games.results)
        setData(filtered)
    }
  return (
    <section>
        {console.log(games.results)}
        <h3>Ordernar Por:</h3>
        <button
        onClick={()=> handlefilters('ascending')}
        >Mayor Precio</button>
        <button
        onClick={()=> handlefilters('descending')}
        >Menor Precio</button>

    </section>
  )
}

export default Filter