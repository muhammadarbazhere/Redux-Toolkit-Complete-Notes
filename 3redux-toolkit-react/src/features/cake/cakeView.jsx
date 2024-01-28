import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { ordered, reStocked } from './cakeSlice'

function CakeView() {

  const nmbrOfCakes = useSelector((state) => state.cake.numOfCakes )

  const dispatch = useDispatch()

  return (

    <div>

        <h2> Number of cakes - {nmbrOfCakes} </h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(reStocked(5))}>ReStock Cakes</button>
   
    </div>

  )
}

export default CakeView