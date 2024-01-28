import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { ordered, reStocked } from './icecreamSlice'

function IceCreamView() {

  const [ value, setValue ] = React.useState(1)

  const nmbrOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)

  const dispatch = useDispatch()

  return (

    <div>
        <h2> Number of IceCreams - {nmbrOfIcecreams} </h2>

        <button onClick={() => dispatch(ordered())}>
          Order IceCreams
        </button>


<input type="number" 
       value={value}
       onChange={(e) => setValue(parseInt(e.target.value))} />   

        <button onClick={() => dispatch(reStocked(value))} >
          ReStock IceCreams
        </button>

    </div>

  )
}

export default IceCreamView