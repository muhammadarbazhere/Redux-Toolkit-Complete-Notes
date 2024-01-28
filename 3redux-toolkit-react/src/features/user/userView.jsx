import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from './userSlice'

function UserView() {

  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (

    <div>

{/* ........................................................... */} 
        <h2>List of Users</h2>
{/* ........................................................... */}  

       {
           (user.loading) ? ( 
                 <div>Loading...</div> 
                        )  : ( null )
       }

{/* ........................................................... */}
       
        {
                                         // && means both = true 
          ( !user.loading && user.error )  ?  (

            <div> Error: {user.error}</div> 

                                         ) : ( null )

        }

{/* ........................................................... */}

  {
                                  // users comes from initialState of userSlice
                                     //means user is equal to array

        ( !user.loading && user.users.length ) ? (

     <ul>    
            { user.users.map((element) => (

                <li key={element.id}>
                  
                   {element.name}
                   
                </li>

              ))
            }         
     </ul> 

                                           ) : ( null )    
                                  // if user is not equal to array then = null
  }

{/* ........................................................... */}

    </div>

  )
}

export default UserView